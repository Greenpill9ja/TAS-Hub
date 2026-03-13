"use client";

import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
    const team = [
        {
            name: "Anthony Amio",
            role: "Head of Operations",
            image: "/amio.jpg",
            twitter: "https://x.com/amioantho",
            linkedin: "https://linkedin.com/in/anthonyamio"
        },
        {
            name: "Mmeri Anosike",
            role: "Lead Solar Engineer",
            image: "/Nmeri.png",
            twitter: "https://x.com/BuildwithMc",
            linkedin: "https://linkedin.com/in/buildwithmc"
        },
        {
            name: "Nansel Rim",
            role: "Lead Engineer & Designer",
            image: "/nansel.jpg",
            twitter: "https://x.com/nanselrim",
            linkedin: "https://linkedin.com/in/nansel"
        },
        {
            name: "Afolabi Aiyeloja",
            role: "Community Lead",
            image: "/afo.jpg",
            twitter: "https://x.com/time_is_oba",
            linkedin: "https://linkedin.com/in/afolabi-aiyeloja"
        },
        {
            name: "Jonruth",
            role: "Operations Lead",
            image: "/jon.jpg",
            twitter: "https://x.com/jhruth",
            linkedin: "https://linkedin.com/in/jonruth"
        },
    ];

    return (
        <footer className="relative border-t border-dark/10 bg-vibrant pt-24 pb-8 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">

                <div className="mb-20">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-12">
                        Meet the team
                    </h2>

                    {/* Izzy Tribute */}
                    <div className="mb-16 w-full max-w-2xl mx-auto bg-dark rounded-3xl p-8 relative overflow-hidden shadow-xl border border-white/10 group">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/30 transition-colors"></div>

                        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                            <div className="h-28 w-28 shrink-0 rounded-full border-4 border-primary/30 p-1 bg-white/5 overflow-hidden">
                                <div className="h-full w-full rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center overflow-hidden">
                                    <img src="/izzy.jpg" alt="Izzy" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 text-white">
                                <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-2 inline-block">In Loving Memory</span>
                                <h3 className="font-heading text-2xl font-bold mb-1">Izzy</h3>
                                <p className="font-heading text-sm text-white/60 mb-3 font-medium">Founder, Tech and Sun Initiative</p>
                                <p className="font-body text-sm text-white/80 leading-relaxed max-w-sm">
                                    The visionary architect behind the TAS mission. His legacy and commitment to <span className="text-secondary font-black uppercase tracking-widest text-[10px] mb-2 inline-block">Powering Nigeria's next generation</span> continues to drive every container we deploy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="flex flex-col items-center group cursor-pointer w-[calc(50%-1rem)] md:w-[calc(33.33%-2rem)] lg:w-[calc(20%-2.5rem)] min-w-[150px]">
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

                                <div className="flex items-center gap-3 mt-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-full bg-dark/5 hover:bg-primary/20 text-dark/40 hover:text-primary transition-all duration-300"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Twitter className="h-4 w-4" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-full bg-dark/5 hover:bg-primary/20 text-dark/40 hover:text-primary transition-all duration-300"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                </div>
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
