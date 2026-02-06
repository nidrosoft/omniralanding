import cn from "classnames";
import styles from "./ProblemStatement.module.sass";
import {
    Component,
    CallSlash,
    MoneyRemove,
    EyeSlash,
} from "iconsax-react";

type ProblemStatementProps = {};

const painPoints = [
    {
        icon: <Component size={26} variant="Bulk" color="#D2FE17" />,
        title: "Fragmented Software",
        description:
            "The average dental practice pays for 5–10 separate software subscriptions. None of them talk to each other. Staff re-enters the same data across multiple systems.",
        stat: "$1,500–$3,000/mo",
        statLabel: "wasted on disconnected tools",
    },
    {
        icon: <CallSlash size={26} variant="Bulk" color="#D2FE17" />,
        title: "Drowning Front Desk",
        description:
            "Front desk handles 40–80 phone calls per day. Insurance verification takes 10–20 minutes per patient, manually. 60–70% of their time is repetitive, rule-based work.",
        stat: "60–70%",
        statLabel: "of time on repetitive tasks",
    },
    {
        icon: <MoneyRemove size={26} variant="Bulk" color="#D2FE17" />,
        title: "Revenue Leaking Everywhere",
        description:
            "Claims batched weekly instead of same-day. Denied claims written off. Unscheduled treatment never followed up. Cancellation slots go unfilled.",
        stat: "$250K+",
        statLabel: "lost annually per practice",
    },
    {
        icon: <EyeSlash size={26} variant="Bulk" color="#D2FE17" />,
        title: "No Visibility",
        description:
            "Practice owners check the bank balance and guess. Monthly reports take hours to compile. No real-time view of production, collections, or practice health.",
        stat: "0",
        statLabel: "real-time insights available",
    },
];

const ProblemStatement = ({}: ProblemStatementProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.lines}>
                <span></span>
                <span></span>
            </div>
            <div className={styles.head}>
                <div className={styles.label}>
                    <span>The Problem</span>
                </div>
                <h2 className={cn("h2", styles.title)}>
                    Your front desk is doing the work of&nbsp;5&nbsp;people.
                    <br />
                    With&nbsp;5&nbsp;different&nbsp;tools.
                </h2>
            </div>
            <div className={styles.grid}>
                {painPoints.map((point, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardIcon}>
                                {point.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{point.title}</h3>
                            <p className={styles.cardDescription}>
                                {point.description}
                            </p>
                            <div className={styles.cardStat}>
                                <div className={styles.cardStatValue}>
                                    {point.stat}
                                </div>
                                <div className={styles.cardStatLabel}>
                                    {point.statLabel}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.closing}>
                <div className={styles.closingLine}></div>
                <p className={styles.closingText}>
                    What if one platform replaced all of them — and the agents
                    did the work?
                </p>
                <div className={styles.closingLine}></div>
            </div>
        </div>
    </div>
);

export default ProblemStatement;
