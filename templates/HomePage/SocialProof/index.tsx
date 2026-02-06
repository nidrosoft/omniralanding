"use client";

import cn from "classnames";
import styles from "./SocialProof.module.sass";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

type SocialProofProps = {};

const stats = [
    { value: "200K+", label: "Dental practices in the US" },
    { value: "$3K+", label: "Wasted monthly on fragmented tools" },
    { value: "60-70%", label: "Of front desk time on repetitive tasks" },
    { value: "5-10", label: "Software tools per practice" },
];

const SocialProof = ({}: SocialProofProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.lines}>
                <span></span>
                <span></span>
            </div>
            <div className={styles.head}>
                <FadeIn direction="up" delay={0} duration={0.6}>
                    <div className={styles.label}>
                        <span>The Industry Today</span>
                    </div>
                </FadeIn>
                <FadeIn direction="up" delay={0.1} scale={0.95}>
                    <h2 className={cn("h2", styles.title)}>
                        The numbers don&apos;t lie
                    </h2>
                </FadeIn>
                <FadeIn direction="up" delay={0.2}>
                    <div className={styles.subtitle}>
                        Dental practices are drowning in software, admin work, and
                        lost revenue. Here&apos;s what the average practice looks
                        like today.
                    </div>
                </FadeIn>
            </div>
            <StaggerChildren className={styles.grid} staggerDelay={0.12}>
                {stats.map((stat, index) => (
                    <StaggerItem key={index} scale>
                        <div className={styles.card}>
                            <div className={styles.cardInner}>
                                <div className={styles.value}>{stat.value}</div>
                                <div className={styles.cardLabel}>{stat.label}</div>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerChildren>
            <FadeIn direction="up" delay={0.3}>
                <div className={styles.logos}>
                    <div className={styles.logosLabel}>Replacing tools like</div>
                    <StaggerChildren className={styles.logosRow} staggerDelay={0.08}>
                        {[
                            "Dentrix",
                            "Eaglesoft",
                            "Open Dental",
                            "Weave",
                            "RevenueWell",
                            "Dental Intelligence",
                        ].map((name, index) => (
                            <StaggerItem key={index}>
                                <div className={styles.logoItem}>
                                    <span>{name}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                </div>
            </FadeIn>
        </div>
    </div>
);

export default SocialProof;
