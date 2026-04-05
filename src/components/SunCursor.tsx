"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function SunCursor() {
    const [hidden, setHidden] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    // Damping (lag) physics of 0.15s equivalent
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 20); // offset center (40px width/2)
            cursorY.set(e.clientY - 20);
            setHidden(false);

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
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full will-change-transform"
            style={{
                width: "62px",
                height: "62px",
                background: "rgba(255, 215, 0, 0.34)",
                boxShadow: "0 0 56px rgba(255, 215, 0, 0.3)",
                filter: "blur(32px)",
                x: cursorX,
                y: cursorY,
            }}
            animate={{
                scale: isHovering ? 1.5 : 1,
                opacity: hidden ? 0 : 0.78,
            }}
            transition={{
                scale: { duration: 0.2 },
                opacity: { duration: 0.2 }
            }}
        />
    );
}
