"use client";

import cn from "classnames";
import styles from "./ImpactStats.module.sass";
import Label from "@/components/Label";
import {
    Timer1,
    MoneyRecive,
    CallSlash,
    ShieldTick,
    Calendar,
    Clock,
    ReceiptText,
    People,
} from "iconsax-react";
import { FadeIn, ScaleIn, StaggerChildren, StaggerItem } from "@/components/Animations";

type ImpactStatsProps = {};

const stats = [
    {
        value: "$250K–500K+",
        label: "Total annual value to a mid-size practice",
        icon: (s: number) => <MoneyRecive size={s} variant="Bulk" color="#D2FE17" />,
        highlight: true,
    },
    {
        value: "80%+",
        label: "Cancellation slot fill rate",
        icon: (s: number) => <Calendar size={s} variant="Bulk" color="#D2FE17" />,
    },
    {
        value: "50–70%",
        label: "Phone volume handled without a human",
        icon: (s: number) => <CallSlash size={s} variant="Bulk" color="#D2FE17" />,
    },
    {
        value: "40–60%",
        label: "Reduction in claim rejections",
        icon: (s: number) => <ReceiptText size={s} variant="Bulk" color="#D2FE17" />,
    },
    {
        value: "100%",
        label: "Insurance verified before patient arrival",
        icon: (s: number) => <ShieldTick size={s} variant="Bulk" color="#D2FE17" />,
    },
    {
        value: "30 sec",
        label: "Patient check-in vs. 5–10 min today",
        icon: (s: number) => <Timer1 size={s} variant="Bulk" color="#D2FE17" />,
    },
    {
        value: "5 min",
        label: "Morning prep vs. 30 min today",
        icon: (s: number) => <Clock size={s} variant="Bulk" color="#D2FE17" />,
    },
    {
        value: "24/7",
        label: "Agents work around the clock",
        icon: (s: number) => <People size={s} variant="Bulk" color="#D2FE17" />,
    },
];

const revenueStats = [
    {
        value: "$50–150K",
        label: "Revenue saved from filled cancellations",
    },
    {
        value: "$30–80K",
        label: "Recovered annually from denied claims",
    },
    {
        value: "$50–200K",
        label: "Recovered from unscheduled treatment follow-up",
    },
    {
        value: "$100–200K+",
        label: "Revenue impact from improved recall",
    },
];

const ImpactStats = ({}: ImpactStatsProps) => {
    return (
        <div className={cn("section", styles.section)} id="impact">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <FadeIn direction="up" delay={0} duration={0.6}>
                        <Label title="By the Numbers" />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.1} scale={0.95}>
                        <h2 className={cn("h2", styles.title)}>
                            The numbers don&apos;t lie.
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <div className={styles.subtitle}>
                            Real, measurable impact across every area of your
                            practice — from day one.
                        </div>
                    </FadeIn>
                </div>

                {/* Hero Stat */}
                <ScaleIn delay={0.1} initialScale={0.85} duration={0.9}>
                    <div className={styles.heroStat}>
                        <div className={styles.heroStatIcon}>
                            {stats[0].icon(36)}
                        </div>
                        <div className={styles.heroStatValue}>{stats[0].value}</div>
                        <div className={styles.heroStatLabel}>{stats[0].label}</div>
                    </div>
                </ScaleIn>

                {/* Stat Grid — Top Row (4 columns) */}
                <StaggerChildren className={styles.grid} staggerDelay={0.1}>
                    {stats.slice(1, 5).map((stat, index) => (
                        <StaggerItem key={index} scale>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}>
                                    {stat.icon(22)}
                                </div>
                                <div className={styles.cardValue}>{stat.value}</div>
                                <div className={styles.cardLabel}>{stat.label}</div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerChildren>

                {/* Stat Grid — Bottom Row (3 columns) */}
                <StaggerChildren className={styles.gridThree} staggerDelay={0.1}>
                    {stats.slice(5).map((stat, index) => (
                        <StaggerItem key={index} scale>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}>
                                    {stat.icon(22)}
                                </div>
                                <div className={styles.cardValue}>{stat.value}</div>
                                <div className={styles.cardLabel}>{stat.label}</div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerChildren>

                {/* Revenue Breakdown */}
                <FadeIn direction="up" delay={0.1}>
                    <div className={styles.revenueSection}>
                        <div className={styles.revenueLine}></div>
                        <div className={styles.revenueHead}>
                            <span>Where the revenue comes from</span>
                        </div>
                        <StaggerChildren className={styles.revenueGrid} staggerDelay={0.12}>
                            {revenueStats.map((stat, index) => (
                                <StaggerItem key={index} scale>
                                    <div className={styles.revenueCard}>
                                        <div className={styles.revenueValue}>
                                            {stat.value}
                                        </div>
                                        <div className={styles.revenueLabel}>
                                            {stat.label}
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default ImpactStats;
