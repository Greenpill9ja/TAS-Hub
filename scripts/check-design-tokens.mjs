#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const baselinePath = path.join(repoRoot, 'scripts/data/design-token-baseline.tsv');
const tokenSources = new Set(['src/app/globals.css']);
const scanExts = new Set(['.ts', '.tsx', '.css']);
const skipDirs = new Set(['node_modules', '.next', 'coverage', 'output']);

const checks = [
  ['RAW_HEX', /#[0-9A-Fa-f]{3,8}/],
  ['ARBITRARY_COLOR', /(?:from|to|via|bg|text|border|shadow)-\[[^\]]*(?:#|rgba\(|rgb\(|var\()[^\]]*\]/],
  ['ARBITRARY_SIZE', /(?:rounded|text|tracking|max-h|left|right|top|bottom|w|h)-\[[^\]]*[0-9][^\]]*\]/],
  ['MIN_H_SCREEN', /\bmin-h-screen\b/],
  ['VIEWPORT_100VW', /100vw/],
  ['VIEWPORT_100VH', /\b(?:100vh|90vh)\b/],
  ['MOTION_LIBRARY', /from\s+["']framer-motion["']/],
  ['SMOOTH_SCROLL', /from\s+["']lenis\/react["']/],
  ['SPLINE_RUNTIME', /@splinetool\/react-spline|<Spline\b/],
];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs, files);
    else if (scanExts.has(path.extname(entry.name))) files.push(abs);
  }
  return files;
}

function rel(abs) {
  return path.relative(repoRoot, abs).split(path.sep).join('/');
}

function loadBaseline() {
  if (!existsSync(baselinePath)) return [];
  return readFileSync(baselinePath, 'utf8')
    .split('\n')
    .filter((line) => line.trim() && !line.startsWith('#'))
    .map((line, index) => {
      const [file, code, needle, reason] = line.split('\t');
      if (!file || !code || !needle || !reason) {
        throw new Error(`Invalid baseline entry ${index + 1}: expected file, code, needle, reason`);
      }
      return { file, code, needle, reason };
    });
}

function collectHits() {
  const hits = [];
  const src = path.join(repoRoot, 'src');
  if (!existsSync(src)) return hits;
  for (const file of walk(src)) {
    const relative = rel(file);
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return;
      for (const [code, pattern] of checks) {
        if (tokenSources.has(relative) && code === 'RAW_HEX') continue;
        if (pattern.test(line)) hits.push({ file: relative, line: i + 1, code, text: trimmed });
        pattern.lastIndex = 0;
      }
    });
  }
  return hits;
}

function matchesBaseline(hit, baseline) {
  return baseline.some((entry) => entry.file === hit.file && entry.code === hit.code && hit.text.includes(entry.needle));
}

function writeBaseline(hits) {
  const lines = [
    '# file\tcode\tneedle\treason',
    ...hits.map((hit) => `${hit.file}\t${hit.code}\t${hit.text}\tExisting audited TAS Hub design risk; replace with Tailwind theme tokens, dynamic viewport primitives, or reduced-motion-safe patterns when touching this surface.`),
    '',
  ];
  writeFileSync(baselinePath, lines.join('\n'));
}

if (!existsSync(path.join(repoRoot, 'DESIGN.md'))) {
  console.error('Missing root DESIGN.md');
  process.exit(1);
}

const hits = collectHits();
if (process.argv.includes('--write-baseline')) {
  writeBaseline(hits);
  console.log(`Wrote ${hits.length} baseline design-token risk(s) to ${path.relative(repoRoot, baselinePath)}`);
  process.exit(0);
}

const baseline = loadBaseline();
const unapproved = hits.filter((hit) => !matchesBaseline(hit, baseline));
const stale = baseline.filter((entry) => !hits.some((hit) => entry.file === hit.file && entry.code === hit.code && hit.text.includes(entry.needle)));

if (unapproved.length || stale.length) {
  if (unapproved.length) {
    console.error('Unapproved TAS Hub design-token/static CSS risks:');
    for (const hit of unapproved) console.error(`${hit.file}:${hit.line} ${hit.code} ${hit.text}`);
  }
  if (stale.length) {
    console.error('Stale TAS Hub design-token baseline entries:');
    for (const entry of stale) console.error(`${entry.file} ${entry.code} ${entry.needle}`);
  }
  process.exit(1);
}

console.log(`TAS Hub design guard passed: ${hits.length} audited risk(s), 0 unapproved.`);
