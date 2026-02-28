"use client";

import { motion } from "framer-motion";

function ProblemAnimation() {
    return (
        <div className="relative w-full h-48 md:h-64 mb-8 flex items-center justify-center opacity-80 pointer-events-none">
            <svg viewBox="0 0 400 200" className="w-full h-full max-w-sm overflow-visible">
                <defs>
                    <filter id="glow-red">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central Server/Grid */}
                <rect x="40" y="80" width="40" height="40" rx="4" stroke="#475569" strokeWidth="2" fill="#1e293b" />
                <text x="60" y="104" fill="#94a3b8" fontSize="10" textAnchor="middle" fontWeight="bold">GRID</text>

                {/* Wire to the right */}
                <path d="M 80 100 L 180 100" stroke="#475569" strokeWidth="3" fill="none" strokeDasharray="4 4" />

                {/* The break point flow */}
                <motion.path
                    d="M 80 100 L 160 100"
                    stroke="#ef4444"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glow-red)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Spark at breakpoint */}
                <motion.circle
                    cx="170" cy="100" r="4" fill="#ef4444" filter="url(#glow-red)"
                    animate={{ scale: [1, 2, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                />

                {/* Broken destination path */}
                <path d="M 190 100 L 250 100 L 250 60 L 320 60" stroke="#334155" strokeWidth="2" fill="none" />
                <path d="M 190 100 L 250 100 L 250 140 L 320 140" stroke="#334155" strokeWidth="2" fill="none" />

                {/* Destination user nodes offline */}
                <circle cx="330" cy="60" r="16" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
                <motion.text x="330" y="65" fill="#ef4444" fontSize="16" textAnchor="middle" fontWeight="bold" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }}>!</motion.text>

                <circle cx="330" cy="140" r="16" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
                <motion.text x="330" y="145" fill="#ef4444" fontSize="16" textAnchor="middle" fontWeight="bold" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}>!</motion.text>
            </svg>
        </div>
    );
}

function SolutionAnimation() {
    return (
        <div className="relative w-full h-48 md:h-64 mb-8 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 400 200" className="w-full h-full max-w-sm overflow-visible">
                <defs>
                    <filter id="glow-sun">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glow-green">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Sun Node */}
                <circle cx="60" cy="100" r="24" fill="#FFD700" filter="url(#glow-sun)" />
                <motion.circle
                    cx="60" cy="100" r="28" fill="none" stroke="#FFD700" strokeWidth="2"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Path from Sun to Hub */}
                <path d="M 84 100 L 180 100" stroke="#FFD700" strokeWidth="4" fill="none" opacity="0.6" />

                <motion.line
                    x1="84" y1="100" x2="180" y2="100"
                    stroke="#10b981" strokeWidth="4"
                    filter="url(#glow-green)"
                    strokeDasharray="20 100"
                    animate={{ strokeDashoffset: [120, -20] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Hub Node / Battery */}
                <rect x="180" y="80" width="40" height="40" rx="8" fill="#E5F1FF" filter="url(#glow-green)" />
                <motion.rect
                    x="180" y="80" width="40" height="40" rx="8" fill="none" stroke="#2446A8" strokeWidth="2"
                    animate={{ scale: [1, 1.15, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <text x="200" y="104" fill="#0F172A" fontSize="10" textAnchor="middle" fontWeight="bold">HUB</text>

                {/* Destination paths */}
                <path d="M 220 100 L 260 100 L 260 50 L 320 50" stroke="#fff" strokeWidth="3" fill="none" opacity="0.6" />
                <path d="M 220 100 L 260 100 L 260 150 L 320 150" stroke="#fff" strokeWidth="3" fill="none" opacity="0.6" />

                {/* Flow to Top destination */}
                <motion.path
                    d="M 220 100 L 260 100 L 260 50 L 320 50"
                    stroke="#FFD700" strokeWidth="3" fill="none"
                    filter="url(#glow-green)"
                    strokeDasharray="30 150"
                    animate={{ strokeDashoffset: [180, -30] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Flow to Bottom destination */}
                <motion.path
                    d="M 220 100 L 260 100 L 260 150 L 320 150"
                    stroke="#FFD700" strokeWidth="3" fill="none"
                    filter="url(#glow-green)"
                    strokeDasharray="30 150"
                    animate={{ strokeDashoffset: [180, -30] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />

                {/* Connected user nodes */}
                <circle cx="330" cy="50" r="14" fill="#2F7326" />
                <path d="M 325 50 L 329 55 L 336 44" stroke="#fff" strokeWidth="2" fill="none" />

                <circle cx="330" cy="150" r="14" fill="#2F7326" />
                <path d="M 325 150 L 329 155 L 336 144" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
        </div>
    );
}


export default function ProblemSolution() {
    return (
        <section className="relative flex min-h-screen flex-col md:flex-row overflow-hidden">
            {/* Left: Problem */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-1 flex-col items-center justify-center bg-dark/95 p-8 md:p-16 text-center text-white/50 grayscale transition-all hover:grayscale-0 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div className="z-10 w-full max-w-lg">
                    <ProblemAnimation />
                    <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight text-white/70">
                        The Energy Gap
                    </h2>
                    <p className="font-body text-lg leading-relaxed md:text-xl">
                        Highlighting the Energy Gap in Nigeria: Blackouts, high data costs, and stifled innovation.
                    </p>
                </div>
            </motion.div>

            {/* Right: Solution */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-1 flex-col items-center justify-center bg-vibrant p-8 md:p-16 text-center text-dark relative overflow-hidden"
            >
                {/* Subtle glow effect behind text */}
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[100px]"></div>

                <div className="z-10 w-full max-w-lg">
                    <SolutionAnimation />
                    <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight text-primary">
                        The TAS Solution
                    </h2>
                    <p className="font-body text-lg leading-relaxed md:text-xl font-medium">
                        Solar containers as <span className="text-accent font-bold">Public Goods</span> that turn sunlight into digital equity.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
