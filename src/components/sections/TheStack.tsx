"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

type StackItem = {
    id: string;
    name: string;
    icon: string;
    color: string;
    description: string;
};

const parts: StackItem[] = [
    {
        id: "green-goods",
        name: "Green Goods",
        icon: "/Hub-icon.png",
        color: "border border-primary/20 bg-vibrant/85 text-dark backdrop-blur",
        description: "A lightweight tool for documenting hub development, sessions, workshops, and the day-to-day activity happening in the space."
    },
    {
        id: "ethereum-staking-node",
        name: "Ethereum Staking Node",
        icon: "/Node.png",
        color: "bg-dark text-white",
        description: "On-site Ethereum staking infrastructure that helps secure the network while creating a revenue stream for hub operations."
    },
    {
        id: "starlink-internet",
        name: "Starlink Internet",
        icon: "/Internet (Starlink) green.png",
        color: "bg-accent text-white",
        description: "Dedicated Starlink connectivity that gives the hub reliable internet for classes, research, coordination, and project work."
    },
    {
        id: "energy-storage",
        name: "Energy Storage",
        icon: "/Battery.png",
        color: "bg-primary text-white",
        description: "Battery storage that carries the hub through outages and evening hours so learning and work do not stop when the grid does."
    },
    {
        id: "solar-energy",
        name: "Solar Energy",
        icon: "/Solar Panel.png",
        color: "bg-secondary text-dark",
        description: "Primary solar generation for the hub, sized to keep the space running through daily use and changing weather conditions."
    },
];

export default function TheStack() {

    return (
        <section
            id="stack"
            className="relative flex w-full scroll-mt-24 flex-col items-center justify-center overflow-hidden bg-white/50 px-4 py-24"
        >
            <div className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center">
                <div className="z-10 mb-16 w-full px-4 pt-10 text-center">
                    <h2 className="mb-4 font-heading text-5xl font-bold text-dark drop-shadow-sm md:text-7xl">
                        The Stack
                    </h2>
                    <p className="mx-auto max-w-2xl font-body text-xl text-dark/70">
                        The systems that keep each TAS hub powered, connected, and documented.
                    </p>
                </div>

                <div className="flex w-full flex-wrap justify-center gap-6">
                    {parts.map((item, i) => (
                        <motion.div
                            key={item.id}
                            data-testid={`stack-card-${item.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ scale: 1.015 }}
                            className={`relative flex min-h-[260px] w-full flex-col justify-between rounded-3xl border border-black/5 p-6 shadow-xl transition-transform transition-shadow hover:shadow-2xl md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${item.color}`}
                        >
                            <div className="absolute right-4 top-4 flex items-center gap-2">
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 shadow-sm backdrop-blur-sm"
                                >
                                    <Plus className="h-4 w-4" />
                                </motion.div>
                            </div>

                            <div className="mb-6 flex">
                                <div className="flex rounded-2xl bg-white/20 p-4 shadow-inner">
                                    <img src={item.icon} alt={item.name} className="h-12 w-12 object-contain" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="pr-10 font-heading text-2xl font-bold leading-tight">
                                    {item.name}
                                </div>
                                <p className="font-body text-sm leading-relaxed opacity-85">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
