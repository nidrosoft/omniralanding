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
                    <Label title="By the Numbers" />
                    <h2 className={cn("h2", styles.title)}>
                        The numbers don&apos;t lie.
                    </h2>
                    <div className={styles.subtitle}>
                        Real, measurable impact across every area of your
                        practice — from day one.
                    </div>
                </div>

                {/* Hero Stat */}
                <div className={styles.heroStat}>
                    <div className={styles.heroStatIcon}>
                        {stats[0].icon(36)}
                    </div>
                    <div className={styles.heroStatValue}>{stats[0].value}</div>
                    <div className={styles.heroStatLabel}>{stats[0].label}</div>
                </div>

                {/* Stat Grid — Top Row (4 columns) */}
                <div className={styles.grid}>
                    {stats.slice(1, 5).map((stat, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardIcon}>
                                {stat.icon(22)}
                            </div>
                            <div className={styles.cardValue}>{stat.value}</div>
                            <div className={styles.cardLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Stat Grid — Bottom Row (3 columns) */}
                <div className={styles.gridThree}>
                    {stats.slice(5).map((stat, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardIcon}>
                                {stat.icon(22)}
                            </div>
                            <div className={styles.cardValue}>{stat.value}</div>
                            <div className={styles.cardLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Revenue Breakdown */}
                <div className={styles.revenueSection}>
                    <div className={styles.revenueLine}></div>
                    <div className={styles.revenueHead}>
                        <span>Where the revenue comes from</span>
                    </div>
                    <div className={styles.revenueGrid}>
                        {revenueStats.map((stat, index) => (
                            <div className={styles.revenueCard} key={index}>
                                <div className={styles.revenueValue}>
                                    {stat.value}
                                </div>
                                <div className={styles.revenueLabel}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactStats;
