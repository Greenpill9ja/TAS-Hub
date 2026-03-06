"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Battery, X, Plus, ArrowRight } from "lucide-react";

const parts = [
    {
        id: 1,
        name: "6x 580W Mono-crystalline Panels",
        icon: "/Solar Panel.png",
        color: "bg-secondary text-dark",
        description: "High-efficiency Tier 1 solar panels providing consistent green energy for the entire installation. Designed for durability in diverse Nigerian weather conditions.",
        colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
        id: 2,
        name: "Starlink Satellite - 150Mbps",
        icon: "/Internet (Starlink) green.png",
        color: "bg-accent text-white",
        description: "Low-latency, high-speed satellite internet providing reliable connectivity even in the most remote areas, bypassing traditional infrastructure limitations.",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        id: 3,
        name: "7.2kWh Lithium Battery",
        icon: "/Battery.png",
        fallbackIcon: Battery,
        color: "bg-primary text-white",
        description: "Advanced energy storage solution ensuring 24/7 power availability. Our smart BMS optimizes battery life and performance for maximum efficiency.",
        colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
        id: 4,
        name: "Ethereum Validator Node",
        icon: "/Node.png",
        color: "bg-dark text-white",
        description: "On-site blockchain infrastructure participating in network security while generating decentralized rewards to offset operational costs of the hub.",
        colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
        id: 5,
        name: "Monie Point & Green Goods App",
        icon: "/Payment (POS).png",
        color: "bg-vibrant/80 backdrop-blur text-dark border border-primary md:border-2",
        description: "Green Goods App for capturing solar hub development and Monie Point for local payment gateway allowing locals to pay for electricity and internet services fast and easy.",
        action: { label: "view TAS Garden", href: "/garden" },
        colSpan: "md:col-span-2 lg:col-span-2 text-center"
    },
];

export default function TheStack() {
    const [selectedItem, setSelectedItem] = useState<typeof parts[0] | null>(null);

    return (
        <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden bg-white/50 w-full px-4">
            <div className="relative flex h-full w-full flex-col items-center justify-center max-w-6xl mx-auto">
                <div className="mb-16 text-center z-10 w-full pt-10 px-4">
                    <h2 className="font-heading text-5xl md:text-7xl font-bold text-dark mb-4 drop-shadow-sm">
                        The Stack
                    </h2>
                    <p className="font-body text-xl text-dark/70 max-w-2xl mx-auto">
                        Detailed breakdown of the TAS Hardware Hub ecosystem.
                    </p>
                </div>

                {/* Flat responsive grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {parts.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            onClick={() => setSelectedItem(item)}
                            whileHover={{ scale: 1.02 }}
                            className={`relative rounded-3xl p-6 shadow-xl transition-all hover:shadow-2xl border border-black/5 flex flex-col justify-between cursor-pointer group ${item.color} ${item.colSpan}`}
                        >
                            {/* Click Indicator */}
                            <div className="absolute top-4 right-4 flex items-center gap-2">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-sm opacity-60 group-hover:opacity-100"
                                >
                                    <Plus className="h-4 w-4" />
                                </motion.div>
                            </div>

                            <div className="mb-6 flex">
                                <div className="flex bg-white/20 rounded-2xl p-4 shadow-inner">
                                    {(() => {
                                        const FallbackIcon = item.fallbackIcon;
                                        return item.icon.endsWith('.png') ? (
                                            <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain" />
                                        ) : FallbackIcon ? (
                                            <FallbackIcon className="w-12 h-12" />
                                        ) : null;
                                    })()}
                                </div>
                            </div>

                            <div>
                                <div className="font-heading text-2xl font-bold leading-tight mb-2 pr-10">{item.name}</div>
                                <p className="font-body text-sm opacity-80 line-clamp-2 md:line-clamp-3 group-hover:line-clamp-none transition-all duration-300 relative z-10">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
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
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark/60 backdrop-blur-md"
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

                                {selectedItem.action && (
                                    <Link
                                        href={selectedItem.action.href}
                                        className="mt-8 flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-all font-bold text-sm uppercase tracking-wider group/btn border border-white/30"
                                    >
                                        {selectedItem.action.label}
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
