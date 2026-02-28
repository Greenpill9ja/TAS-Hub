"use client";

import { useScroll, useTransform, motion, MotionValue, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Sun, Satellite, Battery, Box, Smartphone, X, Plus } from "lucide-react";
import { AnimatedLines } from "../ui/AnimatedLines";


const parts = [
    {
        id: 1,
        name: "6x 580W Mono-crystalline Panels",
        icon: "/Solar Panel.png",
        startY: -400,
        startX: -300,
        endY: -90,
        endX: 0,
        rotate: -8,
        color: "bg-secondary text-dark",
        description: "High-efficiency Tier 1 solar panels providing consistent green energy for the entire installation. Designed for durability in diverse Nigerian weather conditions."
    },
    {
        id: 2,
        name: "Starlink Satellite - 150Mbps",
        icon: "/Internet (Starlink) green.png",
        startY: -200,
        startX: 400,
        endY: -45,
        endX: 0,
        rotate: 12,
        color: "bg-accent text-white",
        description: "Low-latency, high-speed satellite internet providing reliable connectivity even in the most remote areas, bypassing traditional infrastructure limitations."
    },
    {
        id: 3,
        name: "7.2kWh Lithium Battery",
        icon: "/Battery.png",
        fallbackIcon: Battery,
        startY: -50,
        startX: -400,
        endY: 0,
        endX: 0,
        rotate: -5,
        color: "bg-primary text-white",
        description: "Advanced energy storage solution ensuring 24/7 power availability. Our smart BMS optimizes battery life and performance for maximum efficiency."
    },
    {
        id: 4,
        name: "Ethereum Validator Node",
        icon: "/Node.png",
        startY: 150,
        startX: 300,
        endY: 45,
        endX: 0,
        rotate: 8,
        color: "bg-dark text-white",
        description: "On-site blockchain infrastructure participating in network security while generating decentralized rewards to offset operational costs of the hub."
    },
    {
        id: 5,
        name: "Greenpayer App for Local Payment",
        icon: "/Payment (POS).png",
        startY: 300,
        startX: -200,
        endY: 90,
        endX: 0,
        rotate: -3,
        color: "bg-vibrant/80 backdrop-blur text-dark border border-primary md:border-2",
        description: "Our custom payment gateway allowing locals to pay for electricity and internet services using simplified mobile interfaces and local payment methods."
    },
];

function StackItem({ item, i, scrollYProgress, onClick }: { item: any, i: number, scrollYProgress: MotionValue<number>, onClick: () => void }) {
    const yOffset = useTransform(scrollYProgress, [0, 0.4, 1], [item.startY, item.endY, item.endY - (i * 20)]);
    const xOffset = useTransform(scrollYProgress, [0, 0.4, 1], [item.startX, item.endX, item.endX]);
    const rotation = useTransform(scrollYProgress, [0, 0.4, 1], [item.rotate, 0, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1.2, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 1]);

    const zIndex = 10 + i;

    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            style={{ x: xOffset, y: yOffset, rotate: rotation, scale, opacity, zIndex }}
            className={`absolute inset-0 m-auto h-[90px] md:h-[120px] w-[90%] md:w-full max-w-sm rounded-2xl p-4 md:p-6 shadow-2xl transition-shadow hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] border border-white/20 flex items-center gap-3 md:gap-4 cursor-pointer group
          ${item.color}
        `}
        >
            {/* Click Indicator */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
                <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to explore
                </span>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-sm"
                >
                    <Plus className="h-3 w-3" />
                </motion.div>
            </div>

            <div className="flex bg-white/20 rounded-full p-2 md:p-3 shadow-inner">
                {item.icon.endsWith('.png') ? (
                    <img src={item.icon} alt={item.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                ) : (
                    <item.fallbackIcon className="w-5 h-5 md:w-6 md:h-6" />
                )}
            </div>
            <div className="font-heading text-sm md:text-lg font-bold leading-tight pr-8">{item.name}</div>
        </motion.div>
    )
}

export default function TheStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<typeof parts[0] | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="relative flex flex-col items-center justify-center min-h-screen py-24 overflow-visible bg-white/50 w-full px-4">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
                <AnimatedLines />

                {/* Ambient background glow & Parallax shapes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

                <motion.div
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, -400]),
                        rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
                    }}
                    className="absolute right-[5%] top-[10%] h-64 w-64 rounded-3xl border-2 border-primary/20 -z-10 pointer-events-none"
                />
                <motion.div
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, 300]),
                        rotate: useTransform(scrollYProgress, [0, 1], [45, -45])
                    }}
                    className="absolute left-[10%] bottom-[20%] h-48 w-48 rounded-full border-4 border-dashed border-accent/20 -z-10 pointer-events-none"
                />

                <div className="mb-16 text-center z-10 w-full pt-10 px-4">
                    <h2 className="font-heading text-5xl md:text-7xl font-bold text-dark mb-4 drop-shadow-sm">
                        The Stack
                    </h2>
                    <p className="font-body text-xl text-dark/70">
                        Detailed breakdown of the TAS Hardware Hub ecosystem.
                    </p>
                </div>

                <div className="relative w-full max-w-4xl flex items-center justify-center min-h-[500px] md:min-h-[600px] mt-8">
                    {/* Base structure outline */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 1]),
                            scale: useTransform(scrollYProgress, [0, 0.4, 1], [0.8, 1, 0.9])
                        }}
                        className="absolute inset-0 m-auto h-[240px] w-[90%] md:w-full max-w-sm rounded-3xl border-2 border-dashed border-dark/20 flex items-center justify-center"
                    />

                    {parts.map((item, i) => (
                        <StackItem
                            key={item.id}
                            item={item}
                            i={i}
                            scrollYProgress={scrollYProgress}
                            onClick={() => setSelectedItem(item)}
                        />
                    ))}
                </div>
            </div>

            {/* Popup Detail View */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark/40 backdrop-blur-md"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`relative max-w-lg w-full rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 overflow-hidden ${selectedItem.color}`}
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <div className="mb-8 rounded-3xl bg-white/20 p-6 shadow-xl backdrop-blur-md">
                                    <img
                                        src={selectedItem.icon}
                                        alt={selectedItem.name}
                                        className="h-24 w-24 object-contain"
                                    />
                                </div>

                                <h3 className="font-heading text-3xl md:text-4xl font-black mb-6 leading-tight">
                                    {selectedItem.name}
                                </h3>

                                <div className="h-px w-24 bg-current/20 mb-8" />

                                <p className="font-body text-lg md:text-xl font-medium leading-relaxed opacity-90">
                                    {selectedItem.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
