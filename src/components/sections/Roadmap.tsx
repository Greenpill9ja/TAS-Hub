"use client";

import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const milestones = [
    { id: 1, date: "Q4 2025", title: "Secure Funding & University Agreements.", color: "bg-primary" },
    { id: 2, date: "Q1 2026", title: "Migrate Owerri Station & Procure Hardware.", color: "bg-accent" },
    { id: 3, date: "Q1 2026", title: "Complete Buildout & System Testing.", color: "bg-secondary" },
    { id: 4, date: "Launch", title: "Official Opening of TAS Enugu & Anambra.", color: "bg-white" },
];

function Beam({ item, index, scrollYProgress }: { item: any, index: number, scrollYProgress: MotionValue<number> }) {
    const rangeStart = index * 0.25;
    const rangeEnd = (index + 1) * 0.25;
    const beamGlow = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0.1, 1]);
    const beamHeight = useTransform(scrollYProgress, [rangeStart, rangeEnd], ["0%", "100%"]);

    return (
        <div className="relative flex flex-col items-center w-full">
            {/* Text Label */}
            <div className="absolute top-0 z-20 flex w-full -translate-y-20 md:-translate-y-24 flex-col items-center text-center max-w-[100px] md:max-w-[150px]">
                <span className="font-heading text-sm md:text-xl font-bold text-white mb-1 md:mb-2 whitespace-nowrap">{item.date}</span>
                <span className="font-body text-[10px] md:text-sm text-white/50 leading-tight">{item.title}</span>
            </div>

            {/* Beam Background */}
            <div className="relative h-64 md:h-[500px] w-1 md:w-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                {/* Active Beam Fill */}
                <motion.div
                    style={{ opacity: beamGlow, height: beamHeight }}
                    className={`absolute top-0 w-full ${item.color} shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] md:shadow-[0_0_30px_10px_rgba(255,255,255,0.2)] blur-[2px]`}
                />
            </div>

            {/* Bottom Node */}
            <motion.div
                style={{ opacity: beamGlow }}
                className={`absolute bottom-0 h-3 w-3 md:h-6 md:w-6 translate-y-1.5 md:translate-y-3 rounded-full ${item.color} shadow-[0_0_15px_3px_currentColor] md:shadow-[0_0_20px_5px_currentColor]`}
            />
        </div>
    );
}

export default function Roadmap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    return (
        <section ref={containerRef} className="relative bg-dark py-32 md:py-48 px-4 shadow-2xl shadow-dark overflow-hidden">
            <div className="mb-24 md:mb-32 text-center">
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4">
                    Roadmap
                </h2>
            </div>

            <div className="container mx-auto flex max-w-5xl justify-between gap-4 md:gap-8 px-4">
                {milestones.map((item, index) => (
                    <Beam key={item.id} item={item} index={index} scrollYProgress={scrollYProgress} />
                ))}
            </div>
        </section>
    );
}
