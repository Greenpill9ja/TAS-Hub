"use client";

import { Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HubActivities() {
    // Placeholder activities data
    const activities = [
        {
            id: 1,
            title: "TAS Hub Awka Launch",
            date: "March 14, 2026",
            location: "TAS Hub Unizik, Coke Center",
            type: "Launch",
            description: "The official commisioning of the the TAS Hub in Univerty of Nigeria."
        },
        {
            id: 2,
            title: "Book an Event",
            date: "TBA",
            location: "TAS Hub Awka",
            type: "TBD",
            description: "Host your event, workshop, or community gathering at the TAS Hub"
        },
        // {
        //     id: 3,
        //     title: "Community Townhall",
        //     date: "June 1, 2026",
        //     location: "Virtual / TAS Hub",
        //     type: "Community",
        //     description: "Monthly discussion addressing community goals, governance, and Q3 expansion plans."
        // },
        // {
        //     id: 4,
        //     title: "Node Operators Meetup",
        //     date: "June 10, 2026",
        //     location: "TAS Hub Awka",
        //     type: "Meetup",
        //     description: "Networking session for current and prospective node operators in the ecosystem."
        // }
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 px-4 border-t border-dark/5">
            {/* Faint Section Background */}
            {/* <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <img src="/tas-hub.png" alt="" className="w-full h-full object-cover grayscale" />
            </div> */}

            <div className="container relative z-10 mx-auto">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-4 drop-shadow-sm">
                            Hub Activities
                        </h2>
                        <p className="font-body text-lg text-dark/70 max-w-xl">
                            Stay updated and subscribe to our calendar for workshops, bootcamps, and community events happening across the TAS ecosystem.
                        </p>
                    </div>
                    <a
                        href="https://luma.com/Greenpillnaija?period=past"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-6 py-3 font-heading text-sm font-bold transition-all hover:bg-primary hover:text-white"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        View Full Calendar <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* Horizontal Scrollable/Carousel Area */}
                <div className="flex items-stretch overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                    {activities.map((activity, idx) => {
                        // Assign a unique background icon based on index or type
                        const bgIcons = ["/Solar Panel.png", "/Battery.png", "/Node.png", "/Internet (Starlink).png"];
                        const bgIcon = bgIcons[idx % bgIcons.length];

                        return (
                            <motion.div
                                key={activity.id}
                                whileHover={{ y: -5 }}
                                className="relative overflow-hidden w-[calc(100vw-2rem)] max-w-[320px] md:max-w-none md:w-[400px] snap-center flex-shrink-0 self-stretch h-auto bg-vibrant p-6 md:p-8 rounded-3xl border border-primary/20 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
                            >
                                {/* Faint Card Background Icon */}
                                <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 grayscale pointer-events-none rotate-12">
                                    <Image src={bgIcon} alt="" width={128} height={128} className="w-full h-full object-contain" />
                                </div>

                                <div className="relative z-10 flex justify-between items-start mb-4 md:mb-6">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/10 shadow-sm">
                                        {activity.type}
                                    </span>
                                    <div className="flex items-center gap-1.5 md:gap-2 text-dark/50 text-xs md:text-sm font-medium">
                                        <Calendar className="w-4 h-4" />
                                        {activity.date}
                                    </div>
                                </div>

                                <h3 className="relative z-10 font-heading text-xl md:text-2xl font-bold text-dark mb-2 md:mb-3">
                                    {activity.title}
                                </h3>

                                <p className="relative z-10 font-body text-sm md:text-base text-dark/70 mb-6 md:mb-8 flex-grow">
                                    {activity.description}
                                </p>

                                <div className="relative z-10 mt-auto pt-4 border-t border-dark/10 flex justify-between items-center">
                                    <span className="font-bold text-xs md:text-sm text-dark/60">{activity.location}</span>
                                </div>
                            </motion.div>
                        );
                    })}
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
