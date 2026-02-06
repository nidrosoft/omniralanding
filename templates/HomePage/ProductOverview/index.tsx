import cn from "classnames";
import styles from "./ProductOverview.module.sass";

type ProductOverviewProps = {};

const tiers = [
    {
        color: "#D2FE17",
        tier: "Autonomous",
        meaning: "Agent acts without asking. You pre-approved these.",
        examples:
            "Send reminders, verify insurance, submit clean claims, reorder supplies, send recall messages",
    },
    {
        color: "#fbbf24",
        tier: "Supervised",
        meaning: "Agent prepares the action, waits for your OK.",
        examples:
            "Appeal denied claims, respond to negative reviews, reschedule patients due to provider absence",
    },
    {
        color: "#f87171",
        tier: "Escalated",
        meaning:
            "Agent can't handle it. Creates a task for your team with full context.",
        examples:
            "Patient disputes, clinical questions, legal/liability issues, unhappy patients needing personal attention",
    },
];

const ProductOverview = ({}: ProductOverviewProps) => (
    <div className={cn("section", styles.section)} id="features">
        <div className={cn("container", styles.container)}>
            <div className={styles.lines}>
                <span></span>
                <span></span>
            </div>

            {/* Intro */}
            <div className={styles.intro}>
                <div className={styles.label}>
                    <span>Product Overview</span>
                </div>
                <h2 className={cn("h2", styles.title)}>
                    Meet Omnira — The AI operating
                    <br />
                    system for your dental practice
                </h2>
                <div className={styles.introText}>
                    Omnira is a single platform that replaces your practice
                    management software, patient communication tools, billing
                    systems, analytics dashboards, and scheduling software.
                    Instead of your staff clicking through 5 different tools, 5
                    AI agents operate inside one unified system — handling the
                    work autonomously while your team supervises and focuses on
                    what matters: patients.
                </div>
            </div>

            {/* Autonomy Framework */}
            <div className={styles.framework}>
                <div className={styles.frameworkHead}>
                    <h3 className={cn("h3", styles.frameworkTitle)}>
                        Agent Autonomy Framework
                    </h3>
                    <p className={styles.frameworkSubtitle}>
                        You decide how much freedom each agent gets. Three tiers
                        of control, fully configurable.
                    </p>
                </div>
                <div className={styles.tiers}>
                    {tiers.map((tier, index) => (
                        <div className={styles.tier} key={index}>
                            <div className={styles.tierContent}>
                                <div className={styles.tierHeader}>
                                    <div
                                        className={styles.tierDot}
                                        style={{ background: tier.color }}
                                    ></div>
                                    <div className={styles.tierName}>
                                        {tier.tier}
                                    </div>
                                </div>
                                <div className={styles.tierMeaning}>
                                    {tier.meaning}
                                </div>
                                <div className={styles.tierExamples}>
                                    <div className={styles.tierExamplesLabel}>
                                        Examples
                                    </div>
                                    <div className={styles.tierExamplesText}>
                                        {tier.examples}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ProductOverview;
