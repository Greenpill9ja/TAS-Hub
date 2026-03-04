"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Activity, ChevronLeft } from "lucide-react";

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
}

interface ImpactTrackerProps {
    variant?: "sticky" | "inline";
}

export default function ImpactTracker({ variant = "sticky" }: ImpactTrackerProps) {
    const isSticky = variant === "sticky";

    const energyIcon = <img src="/Solar Panel.png" alt="Energy Yield" className="h-7 w-7 object-contain" />;
    const networkIcon = <img src="/Internet (Starlink) green.png" alt="Network Status" className="h-7 w-7 object-contain" />;
    const nodeIcon = <img src="/Node.png" alt="On-Chain Activity" className="h-7 w-7 object-contain" />;

    const cards = (
        <>
            <TrackerCard
                icon={energyIcon}
                title="Energy Yield"
                value={<Counter end={12} suffix="kW" />}
                subtitle="Generating Now"
                active
            />
            <TrackerCard
                icon={networkIcon}
                title="Network Status"
                value={<Counter end={150} suffix="Mbps" />}
                subtitle="Starlink Online"
                active
            />
            <TrackerCard
                icon={nodeIcon}
                title="On-Chain Activity"
                value={<span>Active</span>}
                subtitle="ETH Node Validating"
                active
            />
        </>
    );

    const [isCollapsed, setIsCollapsed] = useState(false);

    if (isSticky) {
        return (
            <div className="md:fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 p-6 md:flex pointer-events-none">
                <AnimatePresence mode="wait">
                    {!isCollapsed ? (
                        <motion.div
                            key="expanded"
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            className="flex flex-col gap-4 pointer-events-auto relative group"
                        >
                            <button
                                onClick={() => setIsCollapsed(true)}
                                className="absolute -top-3 -left-3 z-50 h-8 w-8 rounded-full bg-white shadow-md border border-dark/10 flex items-center justify-center text-dark hover:bg-gray-50 transition-colors"
                                title="Collapse"
                            >
                                <X className="h-4 w-4" />
                            </button>
                            {cards}
                        </motion.div>
                    ) : (
                        <motion.button
                            key="collapsed"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsCollapsed(false)}
                            className="pointer-events-auto flex flex-col items-center gap-2 group"
                        >
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-vibrant text-dark shadow-lg border-2 border-white overflow-hidden">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-white/30"
                                />
                                <Activity className="h-6 w-6 relative z-10" />
                            </div>
                            <span className="rounded-full bg-dark/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                View Impact
                            </span>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <section className="relative z-30 w-full bg-vibrant py-12 px-4 shadow-sm border-b border-black/5 md:hidden">
            <div className="container mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
                {cards}
            </div>
        </section>
    );
}

function TrackerCard({ icon, title, value, subtitle, active }: any) {
    return (
        <div className="flex w-64 items-center gap-4 rounded-2xl border border-dark/10 bg-white/80 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-transform hover:-translate-y-1">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-vibrant/20 shadow-inner">
                {icon}
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-dark/60">
                        {title}
                    </span>
                    {active && (
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                    )}
                </div>
                <div className="font-heading text-lg font-bold text-dark w-full">
                    {value}
                </div>
                <div className="font-body text-xs font-medium text-dark/70 w-full">
                    {subtitle}
                </div>
            </div>
        </div>
    );
}
