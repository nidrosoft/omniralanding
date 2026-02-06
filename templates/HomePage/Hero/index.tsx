"use client";

import cn from "classnames";
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
                <div className={styles.badge}>
                    Omnira for Dental — Now in Early Access
                </div>
                <h1 className={cn("h1", styles.title)}>
                    Your dental practice
                    <br />
                    <span className={styles.titleAccent}>running itself.</span>
                </h1>
                <div className={styles.info}>
                    Omnira deploys 5 AI agents that handle scheduling,
                    insurance, billing, patient communication, and operations
                    so your team focuses on patient care, not paperwork.
                </div>
                <div className={styles.buttons}>
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
                </div>
                <div className={styles.socialProof}>
                    <div className={styles.emojis}>
                        {["🧑‍⚕️", "👩🏾‍⚕️", "👨🏼‍⚕️", "👩🏽‍⚕️", "👨🏿‍⚕️", "👩🏻‍⚕️"].map(
                            (emoji, index) => (
                                <span className={styles.emoji} key={index}>
                                    {emoji}
                                </span>
                            )
                        )}
                    </div>
                    <div className={styles.proofText}>
                        <span>500+</span> dentists &amp; practice owners across the US already joined
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
