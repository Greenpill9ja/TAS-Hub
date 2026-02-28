"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AnimatedLines() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax transformations - moving the entire grid slightly
    const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const xParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    // Define grid lines spacing (percentage)
    const gridSize = 8; // 8% spacing
    const verticalCount = Math.floor(100 / gridSize) + 4;
    const horizontalCount = Math.floor(100 / gridSize) + 4;

    const verticalLines = Array.from({ length: verticalCount }).map((_, i) => (i - 2) * gridSize);
    const horizontalLines = Array.from({ length: horizontalCount }).map((_, i) => (i - 2) * gridSize);

    return (
        <motion.div
            ref={containerRef}
            style={{ y: yParallax, x: xParallax }}
            className="absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] overflow-hidden pointer-events-none select-none z-0"
        >
            <svg className="w-full h-full opacity-90" preserveAspectRatio="none">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="glow-intense" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Base subtle static grid in #E5F1FF */}
                <g opacity="0.4">
                    {verticalLines.map((pos, i) => (
                        <line key={`base-v-${i}`} x1={`${pos}%`} y1="0%" x2={`${pos}%`} y2="100%" stroke="#E5F1FF" strokeWidth="1" />
                    ))}
                    {horizontalLines.map((pos, i) => (
                        <line key={`base-h-${i}`} x1="0%" y1={`${pos}%`} x2="100%" y2={`${pos}%`} stroke="#E5F1FF" strokeWidth="1" />
                    ))}
                </g>

                {/* Animated Glowing Lines */}
                <g filter="url(#glow)">
                    {/* Thicker vertical lines flashing */}
                    {verticalLines.map((pos, i) => (
                        i % 3 === 0 && (
                            <motion.line
                                key={`anim-v-${i}`}
                                x1={`${pos}%`}
                                y1="0%"
                                x2={`${pos}%`}
                                y2="100%"
                                stroke="#E5F1FF"
                                strokeWidth="2.5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.8, 0] }}
                                transition={{
                                    duration: 3 + (i % 4),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.5,
                                }}
                            />
                        )
                    ))}

                    {/* Thicker horizontal lines flashing */}
                    {horizontalLines.map((pos, i) => (
                        i % 4 === 1 && (
                            <motion.line
                                key={`anim-h-${i}`}
                                x1="0%"
                                y1={`${pos}%`}
                                x2="100%"
                                y2={`${pos}%`}
                                stroke="#E5F1FF"
                                strokeWidth="2.5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.9, 0] }}
                                transition={{
                                    duration: 4 + (i % 3),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.3,
                                }}
                            />
                        )
                    ))}
                </g>

                {/* Highly glowing nodes/intersections */}
                <g filter="url(#glow-intense)">
                    {verticalLines.map((vPos, vIndex) => (
                        horizontalLines.map((hPos, hIndex) => {
                            if ((vIndex + hIndex) % 7 === 0) {
                                return (
                                    <motion.circle
                                        key={`node-${vIndex}-${hIndex}`}
                                        cx={`${vPos}%`}
                                        cy={`${hPos}%`}
                                        r="4"
                                        fill="#ffffff"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                                        transition={{
                                            duration: 2 + (vIndex % 3) + (hIndex % 3),
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: (vIndex * hIndex) % 5,
                                        }}
                                    />
                                );
                            }
                            return null;
                        })
                    ))}
                </g>

                {/* Traveling Beams (dasharray animation) */}
                <g filter="url(#glow-intense)">
                    {verticalLines.map((pos, i) => (
                        i % 4 === 2 && (
                            <motion.line
                                key={`beam-v-${i}`}
                                pathLength="100"
                                x1={`${pos}%`}
                                y1="0%"
                                x2={`${pos}%`}
                                y2="100%"
                                stroke="#ffffff"
                                strokeWidth="4"
                                strokeDasharray="15 100"
                                initial={{ strokeDashoffset: 115 }}
                                animate={{ strokeDashoffset: -15 }}
                                transition={{
                                    duration: 3 + (i % 3),
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.7,
                                }}
                            />
                        )
                    ))}
                    {horizontalLines.map((pos, i) => (
                        i % 5 === 2 && (
                            <motion.line
                                key={`beam-h-${i}`}
                                pathLength="100"
                                x1="0%"
                                y1={`${pos}%`}
                                x2="100%"
                                y2={`${pos}%`}
                                stroke="#ffffff"
                                strokeWidth="4"
                                strokeDasharray="20 100"
                                initial={{ strokeDashoffset: -20 }}
                                animate={{ strokeDashoffset: 120 }}
                                transition={{
                                    duration: 4 + (i % 4),
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 1.1,
                                }}
                            />
                        )
                    ))}
                </g>
            </svg>
        </motion.div>
    );
}
