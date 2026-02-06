"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import {
    motion,
    useInView,
    useSpring,
    useTransform,
    useMotionValue,
    type Variants,
} from "framer-motion";

// =========================================================
// FADE IN — versatile fade with directional slide
// =========================================================
type FadeInProps = {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    distance?: number;
    once?: boolean;
    threshold?: number;
    scale?: number;
    style?: React.CSSProperties;
};

export const FadeIn = ({
    children,
    className,
    direction = "up",
    delay = 0,
    duration = 0.7,
    distance = 40,
    once = true,
    threshold = 0.15,
    scale = 1,
    style,
}: FadeInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const directionMap = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 },
    };

    const offset = directionMap[direction];

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            initial={{
                opacity: 0,
                x: offset.x,
                y: offset.y,
                scale: scale,
            }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0, scale: 1 }
                    : {
                          opacity: 0,
                          x: offset.x,
                          y: offset.y,
                          scale: scale,
                      }
            }
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

// =========================================================
// SCALE IN — zoom entrance (ideal for hero headings)
// =========================================================
type ScaleInProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    initialScale?: number;
    once?: boolean;
    threshold?: number;
    style?: React.CSSProperties;
};

export const ScaleIn = ({
    children,
    className,
    delay = 0,
    duration = 0.8,
    initialScale = 0.9,
    once = true,
    threshold = 0.15,
    style,
}: ScaleInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            initial={{ opacity: 0, scale: initialScale }}
            animate={
                isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: initialScale }
            }
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

// =========================================================
// STAGGER CHILDREN — wrapper that staggers child animations
// =========================================================
type StaggerChildrenProps = {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    delay?: number;
    once?: boolean;
    threshold?: number;
    style?: React.CSSProperties;
};

const staggerContainerVariants = (
    staggerDelay: number,
    delay: number
): Variants => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
        },
    },
});

export const staggerItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const staggerItemScaleVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const StaggerChildren = ({
    children,
    className,
    staggerDelay = 0.1,
    delay = 0,
    once = true,
    threshold = 0.1,
    style,
}: StaggerChildrenProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            variants={staggerContainerVariants(staggerDelay, delay)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
};

// =========================================================
// STAGGER ITEM — child of StaggerChildren
// =========================================================
type StaggerItemProps = {
    children: ReactNode;
    className?: string;
    scale?: boolean;
    style?: React.CSSProperties;
};

export const StaggerItem = ({
    children,
    className,
    scale = false,
    style,
}: StaggerItemProps) => (
    <motion.div
        className={className}
        style={style}
        variants={scale ? staggerItemScaleVariants : staggerItemVariants}
    >
        {children}
    </motion.div>
);

// =========================================================
// COUNT UP — animated number counter
// =========================================================
type CountUpProps = {
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    decimals?: number;
    className?: string;
    once?: boolean;
    threshold?: number;
};

export const CountUp = ({
    value,
    prefix = "",
    suffix = "",
    duration = 2,
    decimals = 0,
    className,
    once = true,
    threshold = 0.3,
}: CountUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000,
    });
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            const formatted =
                decimals > 0
                    ? latest.toFixed(decimals)
                    : Math.round(latest).toLocaleString();
            setDisplayValue(formatted);
        });
        return unsubscribe;
    }, [springValue, decimals]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue}
            {suffix}
        </span>
    );
};

// =========================================================
// REVEAL LINE — text lines that reveal with mask
// =========================================================
type RevealTextProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    threshold?: number;
};

export const RevealText = ({
    children,
    className,
    delay = 0,
    duration = 0.8,
    once = true,
    threshold = 0.2,
}: RevealTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ overflow: "hidden" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay }}
        >
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// =========================================================
// GLOW PULSE — subtle glow animation for icons/badges
// =========================================================
type GlowPulseProps = {
    children: ReactNode;
    className?: string;
    color?: string;
    style?: React.CSSProperties;
};

export const GlowPulse = ({
    children,
    className,
    color = "rgba(210, 254, 23, 0.15)",
    style,
}: GlowPulseProps) => (
    <motion.div
        className={className}
        style={style}
        animate={{
            boxShadow: [
                `0 0 0px ${color}`,
                `0 0 20px ${color}`,
                `0 0 0px ${color}`,
            ],
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    >
        {children}
    </motion.div>
);

// =========================================================
// PARALLAX FLOAT — subtle floating animation
// =========================================================
type ParallaxFloatProps = {
    children: ReactNode;
    className?: string;
    yOffset?: number;
    duration?: number;
    style?: React.CSSProperties;
};

export const ParallaxFloat = ({
    children,
    className,
    yOffset = 10,
    duration = 4,
    style,
}: ParallaxFloatProps) => (
    <motion.div
        className={className}
        style={style}
        animate={{
            y: [-yOffset, yOffset, -yOffset],
        }}
        transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    >
        {children}
    </motion.div>
);
