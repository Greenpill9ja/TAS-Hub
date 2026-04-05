"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function SunCursor() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const trackingActive = useRef(false);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    // Desktop detection
    useEffect(() => {
        const mq = window.matchMedia("(pointer: fine)");
        setIsDesktop(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Main cursor logic
    useEffect(() => {
        if (!isDesktop) return;

        // Position glow at the sun's center
        const sunEl = document.getElementById("hero-sun");
        if (sunEl) {
            const rect = sunEl.getBoundingClientRect();
            const sunCenterX = rect.left + rect.width / 2 - 31;
            const sunCenterY = rect.top + rect.height / 2 - 31;
            cursorX.jump(sunCenterX);
            cursorY.jump(sunCenterY);
        }

        // After delay, begin tracking mouse
        const timer = setTimeout(() => {
            trackingActive.current = true;
        }, 2500);

        const onMouseMove = (e: MouseEvent) => {
            if (!trackingActive.current) return;
            cursorX.set(e.clientX - 31);
            cursorY.set(e.clientY - 31);
            setHidden(false);

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
            clearTimeout(timer);
            trackingActive.current = false;
            window.removeEventListener("mousemove", onMouseMove);
            document.body.removeEventListener("mouseleave", onMouseLeave);
            document.body.removeEventListener("mouseenter", onMouseEnter);
        };
    }, [isDesktop, cursorX, cursorY]);

    if (!isDesktop) return null;

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
                opacity: { duration: 0.2 },
            }}
        />
    );
}
