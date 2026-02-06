"use client";

import { useState } from "react";
import cn from "classnames";
import styles from "./WorkflowShowcase.module.sass";
import Label from "@/components/Label";
import {
    CalendarRemove,
    ShieldSecurity,
    CloseCircle,
    Sms,
    Moon,
    UserAdd,
} from "iconsax-react";

type WorkflowShowcaseProps = {};

const workflows = [
    {
        id: "cancellation",
        icon: (s: number) => <CalendarRemove size={s} variant="Bulk" color="#D2FE17" />,
        title: "Cancellation Recovery",
        without: {
            title: "Without Omnira",
            steps: [
                "Patient cancels at 9 AM",
                "Front desk notices, pulls out the paper waitlist",
                "Starts calling patients one by one between other tasks",
                "By 11 AM, the slot is still empty",
                "Practice lost $400–800 in production",
            ],
            time: "2+ hours",
            result: "Slot often unfilled",
        },
        with: {
            title: "With Omnira",
            steps: [
                "Patient cancels at 9 AM",
                "Scheduling Agent identifies the slot's production value",
                "Texts 5 waitlist patients simultaneously",
                "First to confirm gets the slot",
                "Slot filled by 9:15 AM — front desk never interrupted",
            ],
            time: "15 minutes",
            result: "80%+ fill rate",
        },
    },
    {
        id: "insurance",
        icon: (s: number) => <ShieldSecurity size={s} variant="Bulk" color="#D2FE17" />,
        title: "Insurance Verification",
        without: {
            title: "Without Omnira",
            steps: [
                "Front desk calls insurance company or logs into portal",
                "Put on hold for 10–20 minutes per patient",
                "Manually notes benefits, maximums, deductibles",
                "Repeats for every patient, every day",
                "Often done day-of, causing delays and checkout surprises",
            ],
            time: "10–20 min/patient",
            result: "Errors & surprises",
        },
        with: {
            title: "With Omnira",
            steps: [
                "Billing Agent verifies automatically when patient books",
                "Pulls complete benefit breakdown instantly",
                "Covers eligibility, annual max, deductible, coverage by category",
                "Re-verifies 48 hours before appointment",
                "100% of patients verified before arrival — zero staff time",
            ],
            time: "0 min staff time",
            result: "100% verified",
        },
    },
    {
        id: "denial",
        icon: (s: number) => <CloseCircle size={s} variant="Bulk" color="#D2FE17" />,
        title: "Claim Denial",
        without: {
            title: "Without Omnira",
            steps: [
                "EOB arrives showing claim denied",
                "Goes in a pile on someone's desk",
                "Someone looks at it when they have time",
                "Most denials are never reworked",
                "Practice writes off 5–10% of production annually",
            ],
            time: "Days to weeks",
            result: "$30–80K lost/year",
        },
        with: {
            title: "With Omnira",
            steps: [
                "Billing Agent reads the denial reason code instantly",
                "Categorizes the issue and determines the action",
                "Correctable denials: fixed and resubmitted within 24 hours",
                "Complex denials: appeal prepared with documentation",
                "Outcomes tracked — agent learns what works per payer",
            ],
            time: "Within 24 hours",
            result: "40–60% fewer rejections",
        },
    },
    {
        id: "recall",
        icon: (s: number) => <Sms size={s} variant="Bulk" color="#D2FE17" />,
        title: "Patient Recall",
        without: {
            title: "Without Omnira",
            steps: [
                "Someone runs a recall report and prints a list",
                "Calls patients when there's time between tasks",
                "Many patients never get called at all",
                "No systematic follow-up or escalation",
                "Industry recall effectiveness: only 50–60%",
            ],
            time: "Hours of staff time",
            result: "50–60% recall rate",
        },
        with: {
            title: "With Omnira",
            steps: [
                "Communication Agent manages the entire recall sequence",
                "Scheduling link → reminder → personal message from hygienist",
                "Tracks everything automatically for every patient",
                "Escalates overdue patients for personal outreach",
                "Recall effectiveness: 80–90% — worth $200K+/year",
            ],
            time: "0 min staff time",
            result: "80–90% recall rate",
        },
    },
    {
        id: "endofday",
        icon: (s: number) => <Moon size={s} variant="Bulk" color="#D2FE17" />,
        title: "End of Day",
        without: {
            title: "Without Omnira",
            steps: [
                "Staff rushes to check out last patients and collect payments",
                "Unsubmitted claims wait until tomorrow or later",
                "No one contacted unconfirmed patients for next day",
                "Tomorrow's prep not started",
                "Staff leaves exhausted and behind",
            ],
            time: "30–45 min rush",
            result: "Tasks carry over",
        },
        with: {
            title: "With Omnira",
            steps: [
                "Check-out is fast — statements auto-generated, payments processed",
                "Operations Agent reconciles all payments automatically",
                "Submits remaining claims same-day",
                "Sends final confirmations for tomorrow's patients",
                "Prepares next-day morning briefing — staff leaves on time",
            ],
            time: "5 min wrap-up",
            result: "Nothing left behind",
        },
    },
    {
        id: "newpatient",
        icon: (s: number) => <UserAdd size={s} variant="Bulk" color="#D2FE17" />,
        title: "New Patient Onboarding",
        without: {
            title: "Without Omnira",
            steps: [
                "Patient arrives, fills out 15 min of paper forms in the lobby",
                "Front desk manually enters data into the system",
                "Insurance card photocopied and verified manually",
                "Errors are common from manual data entry",
                "Patient waits 20+ minutes before being seen",
            ],
            time: "20+ min in lobby",
            result: "Errors & delays",
        },
        with: {
            title: "With Omnira",
            steps: [
                "Digital forms sent automatically when patient books",
                "Patient completes on their phone at home before visit",
                "Data flows directly into the record — zero manual entry",
                "Insurance card photo uploaded and auto-parsed",
                "Patient arrives ready to be seen immediately",
            ],
            time: "0 min in lobby",
            result: "Seamless experience",
        },
    },
];

const WorkflowShowcase = ({}: WorkflowShowcaseProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = workflows[activeIndex];

    return (
        <div className={cn("section", styles.section)} id="workflows">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <Label title="Workflow Showcase" />
                    <h2 className={cn("h2", styles.title)}>
                        See it in action —
                        <br />
                        before and after.
                    </h2>
                    <div className={styles.subtitle}>
                        Real workflows. Real time saved. See how Omnira
                        transforms the daily operations your team struggles
                        with.
                    </div>
                </div>

                {/* Workflow Tabs */}
                <div className={styles.tabs}>
                    {workflows.map((wf, index) => (
                        <button
                            className={cn(styles.tab, {
                                [styles.tabActive]: index === activeIndex,
                            })}
                            key={wf.id}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className={styles.tabIcon}>
                                {wf.icon(18)}
                            </span>
                            <span className={styles.tabName}>{wf.title}</span>
                        </button>
                    ))}
                </div>

                {/* Before / After Comparison */}
                <div className={styles.comparison}>
                    {/* WITHOUT */}
                    <div className={cn(styles.card, styles.cardBefore)}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardDot + " " + styles.dotRed}></div>
                            <span className={styles.cardLabel}>
                                {active.without.title}
                            </span>
                        </div>
                        <div className={styles.steps}>
                            {active.without.steps.map((step, i) => (
                                <div className={styles.step} key={i}>
                                    <div className={styles.stepNumber}>
                                        {i + 1}
                                    </div>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.metric}>
                                <span className={styles.metricLabel}>Time</span>
                                <span className={styles.metricValue}>
                                    {active.without.time}
                                </span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.metricLabel}>Result</span>
                                <span className={styles.metricValue}>
                                    {active.without.result}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* VS Divider */}
                    <div className={styles.vsBlock}>
                        <span>vs</span>
                    </div>

                    {/* WITH */}
                    <div className={cn(styles.card, styles.cardAfter)}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardDot + " " + styles.dotGreen}></div>
                            <span className={styles.cardLabel}>
                                {active.with.title}
                            </span>
                        </div>
                        <div className={styles.steps}>
                            {active.with.steps.map((step, i) => (
                                <div className={styles.step} key={i}>
                                    <div
                                        className={
                                            styles.stepNumber +
                                            " " +
                                            styles.stepNumberGreen
                                        }
                                    >
                                        {i + 1}
                                    </div>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.metric}>
                                <span className={styles.metricLabel}>Time</span>
                                <span
                                    className={
                                        styles.metricValue +
                                        " " +
                                        styles.metricGreen
                                    }
                                >
                                    {active.with.time}
                                </span>
                            </div>
                            <div className={styles.metric}>
                                <span className={styles.metricLabel}>Result</span>
                                <span
                                    className={
                                        styles.metricValue +
                                        " " +
                                        styles.metricGreen
                                    }
                                >
                                    {active.with.result}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkflowShowcase;
