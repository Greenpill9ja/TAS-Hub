"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function SunCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    // Damping (lag) physics of 0.15s equivalent
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 20); // offset center (40px width/2)
            cursorY.set(e.clientY - 20);
            setPosition({ x: e.clientX, y: e.clientY });
            if (hidden) setHidden(false);

            // Expanding on hover
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], input, select, textarea')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const onMouseLeave = () => setHidden(true);
        const onMouseEnter = () => setHidden(false);

        window.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseleave", onMouseLeave);
        document.body.addEventListener("mouseenter", onMouseEnter);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.body.removeEventListener("mouseleave", onMouseLeave);
            document.body.removeEventListener("mouseenter", onMouseEnter);
        };
    }, [hidden, cursorX, cursorY]);

    if (!mounted) return null;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#FFD700] will-change-transform"
            style={{
                width: "50px",
                height: "50px",
                filter: "blur(50px)",
                mixBlendMode: "difference",
                x: cursorX,
                y: cursorY,
            }}
            animate={{
                scale: isHovering ? 1.5 : 1,
                opacity: hidden ? 0 : 1,
            }}
            transition={{
                scale: { duration: 0.2 },
                opacity: { duration: 0.2 }
            }}
        />
    );
}

