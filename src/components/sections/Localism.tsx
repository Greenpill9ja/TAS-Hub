"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimatedLines } from "../ui/AnimatedLines";
import { Calendar, X, ExternalLink } from "lucide-react";

export default function Localism() {
    // Modal State
    const [selectedHub, setSelectedHub] = useState<any | null>(null);

    const hubs = [
        {
            id: "awka",
            name: "TAS Hub Awka",
            image: "/the-stack.png",
            status: "Active",
            statusColor: "text-emerald-600 bg-white/90 border-emerald-500/20",
            dotColor: "bg-emerald-500",
            border: "border-accent/20",
            overlay: "bg-accent/20",
            textColor: "text-accent",
            summary: "This hub provides 24/7 internet and power to students and local developers.",
            description: "TAS Hub Awka serves as our pioneering location. It features our complete v1 hardware stack including a customized 6x 580W solar array, robust battery storage, and an active Ethereum validator node. This hub provides 24/7 internet and power to students and local developers.",
            capacity: "50+ Daily Users",
            lumaLink: "https://luma.com/Greenpillnaija"
        },
        {
            id: "enugu",
            name: "TAS Hub Enugu",
            image: "/tas-hub.png",
            status: "Coming Soon",
            statusColor: "text-white/70 bg-dark/80 border-white/10",
            dotColor: "hidden",
            border: "border-primary/20",
            overlay: "bg-primary/20",
            textColor: "text-primary",
            summary: "This hub will provides 24/7 internet and power to students and local developers.",
            description: "TAS Hub Enugu is currently in the strategic planning and funding phase. It will be designed to handle a larger student capacity and will include dedicated research facilities for decentralized hardware experiments.",
            capacity: "150+ Planned Capacity",
            lumaLink: "https://luma.com/Greenpillnaija"
        }
    ];

    return (
        <section className="relative flex flex-col items-center justify-center bg-white py-16 md:py-24 px-4 overflow-hidden">
            <AnimatedLines />
            {/* Static Background Visuals */}
            <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full border-[40px] border-vibrant/20 blur-sm pointer-events-none" />
            <div className="absolute right-[-5%] bottom-[-10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute left-[20%] bottom-[10%] h-32 w-32 rounded-3xl rotate-12 bg-accent/10 blur-xl pointer-events-none" />

            <div className="mb-16 text-center relative z-10 w-full px-4">
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-dark mb-4">
                    Localism & Impact
                </h2>
                <p className="font-body text-lg text-dark/70 max-w-2xl mx-auto">
                    Deploying physical infrastructure to empower decentralized networks natively in Nigeria.
                </p>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-16">
                {hubs.map((hub, idx) => (
                    <motion.div
                        key={hub.id}
                        onClick={() => setSelectedHub(hub)}
                        className={`group relative w-full h-full max-w-md overflow-hidden flex flex-col rounded-3xl border ${hub.border} bg-white shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer`}
                    >
                        <div className="aspect-[4/3] w-full bg-dark/5 relative overflow-hidden shrink-0">
                            <img src={hub.image} alt={hub.name} className="w-full h-full object-cover" />
                            <div className={`absolute inset-0 ${hub.overlay} mix-blend-multiply group-hover:bg-transparent transition-colors duration-500`}></div>

                            {/* Status Indicator */}
                            <div className={`absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full backdrop-blur-sm px-3 py-1 shadow-sm border ${hub.statusColor}`}>
                                {hub.dotColor !== 'hidden' && (
                                    <span className="relative flex h-2 w-2">
                                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${hub.dotColor}`}></span>
                                        <span className={`relative inline-flex h-2 w-2 rounded-full ${hub.dotColor}`}></span>
                                    </span>
                                )}
                                <span className="text-[10px] font-black uppercase tracking-widest">{hub.status}</span>
                            </div>
                        </div>
                        <div className="p-8 relative z-10 bg-white flex-grow flex flex-col justify-start">
                            <h3 className={`mb-2 font-heading text-3xl font-bold ${hub.textColor}`}>
                                {hub.name}
                            </h3>
                            <p className="font-body text-dark/80">
                                {hub.summary}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for Details */}
            <AnimatePresence>
                {selectedHub && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm"
                        onClick={() => setSelectedHub(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 30, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            <div className="h-48 md:h-64 w-full relative shrink-0">
                                <img src={selectedHub.image} alt={selectedHub.name} className="w-full h-full object-cover" />
                                <div className={`absolute inset-0 ${selectedHub.overlay} mix-blend-multiply`}></div>
                                <button
                                    onClick={() => setSelectedHub(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-dark/40 text-white hover:bg-dark/60 backdrop-blur-md transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                                <div className={`absolute bottom-4 left-4 z-20 flex items-center gap-1.5 rounded-full backdrop-blur-md px-3 py-1 shadow-md border ${selectedHub.statusColor}`}>
                                    {selectedHub.dotColor !== 'hidden' && (
                                        <span className="relative flex h-2 w-2">
                                            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${selectedHub.dotColor}`}></span>
                                            <span className={`relative inline-flex h-2 w-2 rounded-full ${selectedHub.dotColor}`}></span>
                                        </span>
                                    )}
                                    <span className="text-[10px] font-bold uppercase tracking-widest">{selectedHub.status}</span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 overflow-y-auto">
                                <h3 className={`font-heading text-4xl font-bold mb-4 ${selectedHub.textColor}`}>
                                    {selectedHub.name}
                                </h3>

                                <p className="font-body text-lg text-dark/80 leading-relaxed mb-8">
                                    {selectedHub.description}
                                </p>

                                <div className="flex flex-col md:flex-row items-center gap-4 pt-6 border-t border-dark/10">
                                    <div className="bg-vibrant text-dark/80 px-4 py-3 rounded-xl text-sm font-bold flex-1 text-center w-full">
                                        Capacity: {selectedHub.capacity}
                                    </div>
                                    <a
                                        href={selectedHub.lumaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 w-full bg-dark text-white hover:bg-primary transition-colors flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-bold"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        View Events on Luma
                                        <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
