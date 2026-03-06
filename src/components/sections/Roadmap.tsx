"use client";

import { motion } from "framer-motion";

const milestones = [
    { id: 1, date: "Q4 2025", title: "Secure Funding & University Agreements.", color: "bg-primary", glow: "shadow-primary", textDark: true },
    { id: 2, date: "Q1 2026", title: "Migrate Owerri Station & Procure Hardware.", color: "bg-accent", glow: "shadow-accent", textDark: false },
    { id: 3, date: "Q2 2026", title: "Complete Buildout & System Testing.", color: "bg-secondary", glow: "shadow-secondary", textDark: true },
    { id: 4, date: "Launch", title: "Official Opening of TAS Enugu & Anambra.", color: "bg-white", glow: "shadow-white", textDark: true },
];

function MilestoneBeam({ item, index }: { item: typeof milestones[0], index: number }) {
    return (
        <div className="relative flex flex-col items-center justify-end h-[400px] w-full max-w-[200px] flex-shrink-0 group">
            {/* Information Context (Above Light) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="absolute top-0 w-full text-center px-2 flex flex-col items-center z-20"
            >
                <div className={`rounded-xl p-4 shadow-xl backdrop-blur-md border border-white/10 ${item.color} mb-4 transform transition-transform group-hover:-translate-y-2`}>
                    <p className={`font-body text-sm font-bold leading-tight ${item.textDark ? 'text-dark' : 'text-white'}`}>
                        {item.title}
                    </p>
                </div>
            </motion.div>

            {/* Downward Light Beam (Shining Upward conceptually) */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "160px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                className={`w-[4px] relative z-10`}
                style={{
                    background: `linear-gradient(to top, var(--color-${item.color.replace('bg-', '')}, white), transparent)`
                }}
            >
                {/* Glow aura */}
                <div className={`absolute inset-0 w-full h-full blur-[10px] bg-inherit opacity-70`}></div>
            </motion.div>

            {/* Quarter Point Circle (Bottom) */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.2 + 0.1 }}
                className={`relative z-20 mt-2 flex h-16 w-20 items-center justify-center rounded-[2rem] border-4 border-dark ${item.color} ${item.glow} shadow-[0_0_30px_rgba(255,255,255,0.2)]`}
            >
                <span className={`font-heading text-xs font-black uppercase tracking-wider ${item.textDark ? 'text-dark' : 'text-white'}`}>
                    {item.date}
                </span>
            </motion.div>
        </div>
    );
}

export default function Roadmap() {
    return (
        <section className="relative bg-dark py-24 md:py-32 px-4 shadow-2xl overflow-hidden border-b border-white/5">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="mb-20 text-center relative z-10 w-full max-w-4xl mx-auto">
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-sm">
                    Roadmap
                </h2>
                <p className="font-body text-lg text-white/50">
                    The path to launching our first interconnected green energy hubs in Nigeria.
                </p>
            </div>

            {/* Horizontal timeline container */}
            <div className="relative w-full max-w-6xl mx-auto overflow-x-auto pb-10 hide-scrollbar">

                {/* Baseline connection line */}
                <div className="absolute bottom-[28px] left-0 right-0 h-1 bg-white/10 z-0 mx-10"></div>

                <div className="flex flex-nowrap items-end justify-between min-w-[800px] px-8 gap-4">
                    {milestones.map((item, index) => (
                        <MilestoneBeam key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}
