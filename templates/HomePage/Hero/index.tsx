"use client";

import cn from "classnames";
import { motion } from "framer-motion";
import styles from "./Hero.module.sass";

type HeroProps = {};

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

const Hero = ({}: HeroProps) => (
    <div className={cn("section", styles.hero)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <motion.div
                    className={styles.badge}
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Omnira for Dental — Now in Early Access
                </motion.div>
                <motion.h1
                    className={cn("h1", styles.title)}
                    initial={{ opacity: 0, scale: 0.88, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                    Your dental practice
                    <br />
                    <span className={styles.titleAccent}>running itself.</span>
                </motion.h1>
                <motion.div
                    className={styles.info}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Omnira deploys 5 AI agents that handle scheduling,
                    insurance, billing, patient communication, and operations
                    so your team focuses on patient care, not paperwork.
                </motion.div>
                <motion.div
                    className={styles.buttons}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <a
                        className={cn(styles.button, styles.ctaButton)}
                        href="#waitlist"
                        onClick={(e) => smoothScroll(e, "waitlist")}
                    >
                        <svg className={styles.ctaIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        <span>Join the Waitlist</span>
                    </a>
                    <a
                        className={cn(styles.button, styles.ctaButtonSecondary)}
                        href="#demo"
                        onClick={(e) => smoothScroll(e, "demo")}
                    >
                        <svg className={styles.ctaIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                        </svg>
                        <span>See Demo</span>
                    </a>
                </motion.div>
                <motion.div
                    className={styles.socialProof}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className={styles.emojis}>
                        {["🧑‍⚕️", "👩🏾‍⚕️", "👨🏼‍⚕️", "👩🏽‍⚕️", "👨🏿‍⚕️", "👩🏻‍⚕️"].map(
                            (emoji, index) => (
                                <motion.span
                                    className={styles.emoji}
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 1.0 + index * 0.08,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    {emoji}
                                </motion.span>
                            )
                        )}
                    </div>
                    <div className={styles.proofText}>
                        <span>500+</span> dentists &amp; practice owners across the US already joined
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
);

export default Hero;
