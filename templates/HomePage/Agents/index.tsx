"use client";

import { useState } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Agents.module.sass";
import {
    Calendar,
    DollarCircle,
    CallCalling,
    Health,
    Chart,
} from "iconsax-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

type AgentsProps = {};

const AgentIcons: Record<string, (size: number) => React.ReactNode> = {
    scheduling: (size) => <Calendar size={size} variant="Bulk" color="#D2FE17" />,
    billing: (size) => <DollarCircle size={size} variant="Bulk" color="#D2FE17" />,
    communication: (size) => <CallCalling size={size} variant="Bulk" color="#D2FE17" />,
    clinical: (size) => <Health size={size} variant="Bulk" color="#D2FE17" />,
    operations: (size) => <Chart size={size} variant="Bulk" color="#D2FE17" />,
};

const agents = [
    {
        id: "scheduling",
        name: "Scheduling Agent",
        tagline: "Your calendar, optimized 24/7.",
        owns: "The entire appointment calendar — booking, recalls, cancellations, waitlist, provider optimization.",
        capabilities: [
            "Smart Booking",
            "Cancellation Recovery",
            "Recall System",
            "No-Show Prevention",
            "Schedule Optimization",
            "Waitlist Management",
        ],
        impact: "15–25% increase in chair utilization",
        impactRevenue: "$50–150K in saved cancellation revenue",
    },
    {
        id: "billing",
        name: "Billing & Revenue Agent",
        tagline: "Every dollar accounted for. Every claim submitted same-day.",
        owns: "The entire revenue cycle — from insurance verification through final patient payment.",
        capabilities: [
            "Insurance Verification",
            "Treatment Estimates",
            "Same-Day Claims",
            "Denial Management",
            "Claim Tracking",
            "Patient Billing",
        ],
        impact: "40–60% reduction in claim rejections",
        impactRevenue: "$30–80K recovered annually from denied claims",
    },
    {
        id: "communication",
        name: "Communication Agent",
        tagline: "Every patient touchpoint, handled.",
        owns: "All inbound and outbound patient communication across every channel — text, email, phone, portal.",
        capabilities: [
            "AI Phone System",
            "Appointment Reminders",
            "Post-Procedure Follow-Up",
            "Review Management",
            "Reactivation Campaigns",
            "Emergency Triage",
        ],
        impact: "50–70% reduction in phone volume",
        impactRevenue: "$50–200K recovered from unscheduled treatment",
    },
    {
        id: "clinical",
        name: "Clinical Support Agent",
        tagline: "Your clinical team's documentation backbone.",
        owns: "Treatment planning, referrals, prescriptions, lab coordination, clinical documentation.",
        capabilities: [
            "Treatment Plan Presentation",
            "Referral Management",
            "E-Prescriptions",
            "Lab Case Management",
            "Clinical Notes",
            "Medical History Flagging",
        ],
        impact: "Higher treatment acceptance rates",
        impactRevenue: "$50–200K in unscheduled treatment recovered",
    },
    {
        id: "operations",
        name: "Operations Agent",
        tagline: "Your practice intelligence, always on.",
        owns: "Daily operations, inventory, compliance, HR, reporting, analytics.",
        capabilities: [
            "Morning Briefing",
            "Inventory Management",
            "Compliance Monitoring",
            "Daily/Monthly Reporting",
            "Predictive Analytics",
            "End-of-Day Processing",
        ],
        impact: "Morning prep: 5 min instead of 30",
        impactRevenue: "Never miss a compliance deadline",
    },
];

const Agents = ({}: AgentsProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = agents[activeIndex];

    return (
        <div className={cn("section", styles.section)} id="agents">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <FadeIn direction="up" delay={0} duration={0.6}>
                        <div className={styles.label}>
                            <span>The 5 AI Agents</span>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.1} scale={0.95}>
                        <h2 className={cn("h2", styles.title)}>
                            5 agents. One platform.
                            <br />
                            Your practice on autopilot.
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <div className={styles.subtitle}>
                            Each agent is a specialist — operating autonomously
                            across a critical area of your practice, 24 hours a day,
                            7 days a week.
                        </div>
                    </FadeIn>
                </div>

                {/* Agent Tabs */}
                <FadeIn direction="up" delay={0.3}>
                    <div className={styles.tabs}>
                        {agents.map((agent, index) => (
                            <button
                                className={cn(styles.tab, {
                                    [styles.tabActive]: index === activeIndex,
                                })}
                                key={agent.id}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className={styles.tabIcon}>{AgentIcons[agent.id](18)}</span>
                                <span className={styles.tabName}>{agent.name}</span>
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Active Agent Detail */}
                <FadeIn direction="up" delay={0.4}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            className={styles.detail}
                            key={active.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <div className={styles.detailInner}>
                                <div className={styles.detailLeft}>
                                    <div className={styles.detailIcon}>
                                        {AgentIcons[active.id](32)}
                                    </div>
                                    <h3 className={styles.detailName}>{active.name}</h3>
                                    <p className={styles.detailTagline}>
                                        {active.tagline}
                                    </p>
                                    <p className={styles.detailOwns}>{active.owns}</p>
                                    <div className={styles.detailImpact}>
                                        <div className={styles.impactValue}>
                                            {active.impact}
                                        </div>
                                        <div className={styles.impactLabel}>
                                            {active.impactRevenue}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.detailRight}>
                                    <div className={styles.capabilitiesLabel}>
                                        Key Capabilities
                                    </div>
                                    <div className={styles.capabilities}>
                                        {active.capabilities.map((cap, i) => (
                                            <motion.div
                                                className={styles.capability}
                                                key={cap}
                                                initial={{ opacity: 0, x: 15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.35,
                                                    delay: i * 0.06,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                }}
                                            >
                                                <div className={styles.capDot}></div>
                                                <span>{cap}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </FadeIn>
            </div>
        </div>
    );
};

export default Agents;
