"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedLines } from "../ui/AnimatedLines";

export default function Localism() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 90]);

    return (
        <section ref={containerRef} className="relative flex flex-col items-center justify-center bg-white py-16 md:py-24 px-4 overflow-hidden">
            <AnimatedLines />
            {/* Parallax Background Visuals */}
            <motion.div
                style={{ y: yParallax1, rotate: rotateParallax }}
                className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full border-[40px] border-vibrant/20 blur-sm pointer-events-none"
            />
            <motion.div
                style={{ y: yParallax2 }}
                className="absolute right-[-5%] bottom-[-10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: yParallax1, x: yParallax2 }}
                className="absolute left-[20%] bottom-[10%] h-32 w-32 rounded-3xl rotate-12 bg-accent/10 blur-xl pointer-events-none"
            />

            <div className="mb-16 text-center relative z-10">
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-dark mb-4">
                    Localism & Impact
                </h2>
                <p className="font-body text-lg text-dark/70 max-w-2xl mx-auto">
                    Deploying physical infrastructure to empower decentralized networks natively in Nigeria.
                </p>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {/* Card 1: Enugu */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer"
                >
                    <div className="aspect-[4/3] w-full bg-dark/5 relative overflow-hidden">
                        <img src="/tas-hub.png" alt="TAS Hub Enugu" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    <div className="p-8 relative z-10 bg-white">
                        <h3 className="mb-2 font-heading text-3xl font-bold text-primary">
                            TAS Hub Enugu
                        </h3>
                        <p className="font-body text-dark/80">
                            Specific student population data & Research Hub.
                        </p>
                    </div>
                </motion.div>

                {/* Card 2: Anambra */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
                    className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-accent/20 bg-white shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer"
                >
                    <div className="aspect-[4/3] w-full bg-dark/5 relative overflow-hidden">
                        <img src="/the-stack.png" alt="TAS Hub Awka" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    <div className="p-8 relative z-10 bg-white">
                        <h3 className="mb-2 font-heading text-3xl font-bold text-accent">
                            TAS Hub Awka
                        </h3>
                        <p className="font-body text-dark/80">
                            Site-specific construction status & Staking Node deployment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
