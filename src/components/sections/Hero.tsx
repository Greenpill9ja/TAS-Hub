"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, Star, ArrowUpRight, X, Twitter, Github } from "lucide-react";
import { useRef, useState } from "react";

const floatingIconCards = [
    {
        id: "Nodes",
        title: "PG Staking",
        icon: "/Node.png", // Using Node.png as requested for custom icons
        position: { top: "10%", right: "350px" },
        delay: 0,
    },
    {
        id: "Starlink",
        title: "Fast Internet",
        icon: "/Internet (Starlink) green.png",
        position: { top: "5%", right: "50px" },
        delay: 0.5,
    },
    {
        id: "solar",
        title: "Solar Panel",
        icon: "/Solar Panel.png",
        position: { top: "45%", right: "350px" },
        delay: 1,
    },
    {
        id: "power",
        title: "Power Storage",
        icon: "/Battery.png",
        position: { top: "47%", right: "30px" },
        delay: 1.5,
    },
];

// Helper for paths to the turbine hub (rough approximations based on layout)
function getTurbinePath(id: string) {
    // Hub relative to card center (approximate deltas)
    switch (id) {
        case 'Nodes': return "M 300 250 Q 400 300 480 380";
        case 'Starlink': return "M 300 250 Q 250 300 180 380";
        case 'solar': return "M 300 250 Q 400 200 480 120";
        case 'power': return "M 300 250 Q 250 200 160 120";
        default: return "M 300 250 L 350 300";
    }
}

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const turbineRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#A5D5F5] to-[#E5F1FF]">
            {/* Navigation */}
            <header className="absolute top-0 left-0 right-0 z-50 flex w-full items-center justify-between p-6 md:p-10">
                <div className="flex items-center gap-2">
                    <img src="/Tas Logo-green.png" alt="TAS Logo" className="h-10 w-10 rounded-full" />
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        <a href="https://x.com/techandsunhub" target="_blank" rel="noopener noreferrer" className="text-dark/60 hover:text-primary transition-colors">
                            <Twitter className="h-7 w-7" />
                        </a>
                        <a href="https://github.com/Greenpill9ja" target="_blank" rel="noopener noreferrer" className="text-dark/60 hover:text-primary transition-colors">
                            <Github className="h-7 w-7" />
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 text-dark"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md"
                    >
                        <button
                            className="absolute top-6 right-6 text-dark p-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <nav className="flex flex-col items-center gap-8 text-2xl font-heading font-bold text-primary">
                            <a href="#" className="hover:text-accent" onClick={() => setMobileMenuOpen(false)}>About TAS</a>
                            <a href="#" className="hover:text-accent" onClick={() => setMobileMenuOpen(false)}>Impact Tracker</a>
                            <a href="#" className="hover:text-accent" onClick={() => setMobileMenuOpen(false)}>Roadmap</a>
                            <a href="#" className="mt-4 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-dark" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sun Illustration */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-0">
                <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-secondary-400/30 blur-3xl rounded-full" />
                    <img src="/sun.png" alt="Sun" className="h-32 w-32 md:h-48 md:w-48 brightness-110" />
                </motion.div>
            </div>

            {/* Main Content Layout */}
            <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pt-20">
                <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl pb-20 md:pb-0 lg:-translate-y-12"
                    >
                        {/* Social Proof Badge */}
                        <div className="mb-6 flex items-center gap-3 rounded-full bg-white/40 border border-white/60 p-1 pr-3 md:p-1.5 md:pr-4 backdrop-blur-sm w-fit scale-90 md:scale-100 origin-left">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="h-full w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-secondary">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-2 w-2 md:h-3 md:w-3 fill-current" />)}
                                </div>
                                <span className="text-[8px] md:text-[10px] font-bold text-dark/70 uppercase tracking-tighter text-nowrap">1k+ Impacted Students</span>
                            </div>
                        </div>

                        <h1 className="font-heading text-4xl font-black leading-[1.1] text-dark md:text-6xl lg:text-6xl">
                            Tech And Sun <br />
                            <span className="text-primary">Powering</span> <br />
                            Next Generation
                        </h1>

                        <p className="mt-4 md:mt-6 max-w-lg font-body text-sm text-dark/80 md:text-lg lg:text-xl font-medium leading-relaxed">
                            TAS is bridging the digital divide in Nigeria
                            by Powering Nigeria’s Next Generation of
                            Builders and Innovators with
                            24/7 Electricity and Internet.
                        </p>

                        <div className="mt-8 md:mt-10">
                            <a
                                href="https://chat.whatsapp.com/DDcSTISh6FfLJ2sTBkSolJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 md:px-10 md:py-4 font-heading text-base md:text-lg font-bold text-dark shadow-lg shadow-secondary/20 transition-all hover:scale-105 hover:shadow-xl"
                            >
                                Get Started
                                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                            </a>
                        </div>

                        {/* <div className="mt-12 flex flex-col gap-1">
                            <span className="text-4xl font-black text-dark tracking-tighter">30<sup className="text-xl">+</sup></span>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-dark/40">Years of Experience</span>
                        </div> */}
                    </motion.div>

                    {/* Right Column: Turbine and Floating Icons */}
                    <div className="relative hidden h-[600px] lg:block">
                        {/* Wind Turbine Illustration */}
                        <div ref={turbineRef} className="absolute inset-0 flex items-center justify-end">
                            <div className="relative h-full w-full">
                                {/* The "Hub" point for connections */}
                                <div id="turbine-hub" className="absolute left-[72%] top-[31%] z-30 h-4 w-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

                                {/* TAS */}
                                <img
                                    src="/tas-hub.png"
                                    alt="TAS Hub"
                                    className="absolute bottom-0 right-0 h-[110%] object-contain opacity-90 brightness-110 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]"
                                />
                            </div>
                        </div>

                        {/* Floating Cards */}
                        {floatingIconCards.map((card) => (
                            <motion.div
                                key={card.id}
                                style={{ top: card.position.top, right: card.position.right }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -15, 0]
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: card.delay,
                                    y: {
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="absolute z-20 flex flex-col items-center gap-2"
                            >
                                <div className="group relative overflow-hidden rounded-2xl border border-white/80 bg-vibrant/40 p-1.5 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/60 shadow-xl">
                                    <div className="h-24 w-32 overflow-hidden rounded-xl bg-white/50">
                                        <img src={card.icon} alt={card.title} className="h-full w-full object-contain p-2" />
                                    </div>
                                    <div className="py-2 text-center">
                                        <span className="text-xs font-black uppercase text-dark/70 tracking-tight">{card.title}</span>
                                    </div>
                                </div>

                                {/* Connecting Dotted Line to Hub */}
                                <svg className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible">
                                    <motion.path
                                        d={getTurbinePath(card.id)}
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="2"
                                        strokeDasharray="6 6"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: card.delay + 0.5 }}
                                    />
                                    <motion.circle
                                        r="3"
                                        fill="white"
                                        className="shadow-sm"
                                        animate={{
                                            offsetDistance: ["0%", "100%"],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: card.delay
                                        }}
                                        style={{ offsetPath: `path("${getTurbinePath(card.id)}")` }}
                                    />
                                </svg>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Partners Section - Looping Animation */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="mx-auto max-w-6xl rounded-t-[40px] bg-white px-8 py-8 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] md:py-10">
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-dark/40 whitespace-nowrap">
                            <div className="h-px w-6 bg-dark/80" />
                            Strategic Partners
                        </div>

                        <div className="relative flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 20,
                                }}
                                className="flex w-max items-center gap-12 md:gap-16 pr-12"
                            >
                                {/* First Set */}
                                {[
                                    { name: "Greenpill Nigeria", logo: "/greenpillnaija.png" },
                                    { name: "Greenpill Dev Guild", logo: "/Dev-Guild.png" },
                                    { name: "Localism", logo: "/localism.png" },
                                    { name: "M3tering Protocol", logo: "/m3tering protocol.png" },
                                    { name: "Switch Electric", logo: "/switch.png" }
                                ].map((partner, idx) => (
                                    <div key={`p1-${idx}`} className="group flex flex-nowrap items-center gap-4 transition-all">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-dark/5 bg-gray-50 p-1 opacity-60 transition-opacity group-hover:opacity-100">
                                            <img src={partner.logo} alt={partner.name} className="h-full w-full object-contain" />
                                        </div>
                                        <span className="font-heading text-xl font-extrabold tracking-tight text-dark/30 transition-colors group-hover:text-dark whitespace-nowrap">{partner.name}</span>
                                    </div>
                                ))}
                                {/* Second Set for seamless loop */}
                                {[
                                    { name: "Greenpill Nigeria", logo: "/greenpillnaija.png" },
                                    { name: "Greenpill Dev Guild", logo: "/Dev-Guild.png" },
                                    { name: "Localism", logo: "/localism.png" },
                                    { name: "M3tering Protocol", logo: "/m3tering protocol.png" },
                                    { name: "Switch Electric", logo: "/switch.png" }
                                ].map((partner, idx) => (
                                    <div key={`p1-${idx}`} className="group flex flex-nowrap items-center gap-4 transition-all">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-dark/5 bg-gray-50 p-1 opacity-60 transition-opacity group-hover:opacity-100">
                                            <img src={partner.logo} alt={partner.name} className="h-full w-full object-contain" />
                                        </div>
                                        <span className="font-heading text-xl font-extrabold tracking-tight text-dark/30 transition-colors group-hover:text-dark whitespace-nowrap">{partner.name}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
