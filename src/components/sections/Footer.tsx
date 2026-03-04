"use client";

import { Twitter, Github } from "lucide-react";

export default function Footer() {
    const team = [
        { name: "Anthony Amio", role: "Operations", image: "/amio.png" },
        { name: "Mmeri Anosike", role: "Solar Engineer", image: "/nmeri.png" },
        { name: "Nansel Rimsah", role: "Designer & Engineer", image: "/nansel.png" },
        { name: "Afolabi Aiyeloja", role: "Operations", image: "/afo.png" },
    ];

    return (
        <footer className="relative border-t border-dark/10 bg-vibrant pt-24 pb-8 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">

                <div className="mb-20">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-12">
                        Meet the Builders
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                        {team.map((member, i) => (
                            <div key={i} className="flex flex-col items-center group cursor-pointer">
                                {/* Avatar with Glass Border */}
                                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-primary/40 bg-white/20 p-2 shadow-[0_0_30px_-5px_var(--color-primary)] transition-transform group-hover:-translate-y-2 backdrop-blur-sm mb-6 flex items-center justify-center overflow-hidden">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="h-full w-full rounded-full object-cover"
                                            onError={(e) => {
                                                // Fallback if image fails to load
                                                (e.target as HTMLImageElement).style.display = 'none';
                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                    ) : null}
                                    <div className={`${member.image ? 'hidden' : ''} h-full w-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-heading text-dark/30 font-bold text-2xl`}>
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-dark">{member.name}</h3>
                                <p className="font-body md:text-sm text-xs mt-1 text-dark/60 font-medium uppercase tracking-wider">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-32 flex flex-col items-center">
                    <p className="font-body text-xl font-medium text-dark/70 mb-8 max-w-xl">
                        Join us in building physical infrastructure for decentralized systems in Africa.
                    </p>
                    <a href="mailto:[techandsunhub@gmail.com]" className="group rounded-full bg-secondary px-10 py-5 font-heading text-xl font-bold text-dark shadow-xl transition-all hover:scale-105 hover:bg-yellow-400 hover:shadow-yellow-400/50 flex flex-col items-center">
                        <span>Get in Touch</span>
                    </a>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-dark/10 pt-8 mt-12">
                    <p className="font-body text-dark/50 text-sm font-medium">
                        Tech and Sun © 2026.
                    </p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <p className="font-body text-dark/50 text-sm font-medium flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-accent animate-pulse inline-block"></span>
                            Built on Ethereum.
                        </p>
                        <div className="flex items-center gap-4 border-l border-dark/10 pl-6">
                            <a href="https://x.com/techandsunhub" target="_blank" rel="noopener noreferrer" className="text-dark/40 hover:text-primary transition-colors">
                                <Twitter className="h-7 w-7" />
                            </a>
                            <a href="https://github.com/Greenpill9ja" target="_blank" rel="noopener noreferrer" className="text-dark/40 hover:text-primary transition-colors">
                                <Github className="h-7 w-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
