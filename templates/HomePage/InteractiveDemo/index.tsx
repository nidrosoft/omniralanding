"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import cn from "classnames";
import Label from "@/components/Label";
import styles from "./InteractiveDemo.module.sass";
import { FadeIn } from "@/components/Animations";
import {
    Calendar,
    DollarCircle,
    CallCalling,
    Health,
    Chart,
    ShieldSecurity,
    Lock1,
    Import,
    User,
    Hospital,
    Setting2,
    TickCircle,
    Clock,
    People,
    Notification,
    ArrowRight2,
    ArrowLeft2,
} from "iconsax-react";

/* ─── Step definitions ─── */
const STEPS = [
    { label: "Welcome", num: 1 },
    { label: "Practice", num: 2 },
    { label: "AI Assistant", num: 3 },
    { label: "Import Data", num: 4 },
    { label: "Security", num: 5 },
    { label: "Agents", num: 6 },
    { label: "Dashboard", num: 7 },
];

const AGENT_LIST = [
    {
        id: "scheduling",
        name: "Scheduling Agent",
        icon: (s: number) => <Calendar size={s} variant="Bulk" />,
        desc: "Manages appointments, fills cancellations, sends reminders",
        color: "#D2FE17",
    },
    {
        id: "billing",
        name: "Billing Agent",
        icon: (s: number) => <DollarCircle size={s} variant="Bulk" />,
        desc: "Verifies insurance, submits claims, follows up on denials",
        color: "#60a5fa",
    },
    {
        id: "communication",
        name: "Communication Agent",
        icon: (s: number) => <CallCalling size={s} variant="Bulk" />,
        desc: "Handles calls, texts, recall campaigns, patient outreach",
        color: "#f59e0b",
    },
    {
        id: "clinical",
        name: "Clinical Agent",
        icon: (s: number) => <Health size={s} variant="Bulk" />,
        desc: "Treatment tracking, follow-up reminders, clinical alerts",
        color: "#f472b6",
    },
    {
        id: "operations",
        name: "Operations Agent",
        icon: (s: number) => <Chart size={s} variant="Bulk" />,
        desc: "Morning huddles, KPI dashboards, supply management",
        color: "#a78bfa",
    },
];

const IMPORT_ITEMS = [
    { name: "Patient records", count: "2,847" },
    { name: "Appointment history", count: "12,394" },
    { name: "Insurance profiles", count: "1,623" },
    { name: "Treatment plans", count: "4,291" },
    { name: "Billing records", count: "8,756" },
];

type InteractiveDemoProps = {};

const InteractiveDemo = ({}: InteractiveDemoProps) => {
    const [step, setStep] = useState(0);
    const [started, setStarted] = useState(false);

    // Step 1: Practice info
    const [practiceName, setPracticeName] = useState("");
    const [practiceSize, setPracticeSize] = useState("");

    // Step 2: AI name
    const [aiName, setAiName] = useState("");
    const [aiTyping, setAiTyping] = useState(false);

    // Step 3: Import
    const [importProgress, setImportProgress] = useState(0);
    const [importStarted, setImportStarted] = useState(false);
    const [importComplete, setImportComplete] = useState(false);
    const importRef = useRef<NodeJS.Timeout | null>(null);

    // Step 4: Security
    const [hipaaEnabled, setHipaaEnabled] = useState(true);
    const [encryptionEnabled, setEncryptionEnabled] = useState(true);
    const [auditEnabled, setAuditEnabled] = useState(true);
    const [backupEnabled, setBackupEnabled] = useState(false);

    // Step 5: Agents
    const [enabledAgents, setEnabledAgents] = useState<string[]>([
        "scheduling",
        "billing",
        "communication",
        "clinical",
        "operations",
    ]);

    // Step 6: Dashboard
    const [dashboardLoaded, setDashboardLoaded] = useState(false);

    const displayName = practiceName || "Bright Smile Dental";
    const displayAI = aiName || "Nova";

    // AI typing animation
    useEffect(() => {
        if (step === 2 && !aiName && !aiTyping) {
            setAiTyping(true);
            const name = "Nova";
            let i = 0;
            const interval = setInterval(() => {
                i++;
                setAiName(name.slice(0, i));
                if (i >= name.length) {
                    clearInterval(interval);
                    setAiTyping(false);
                }
            }, 200);
            return () => clearInterval(interval);
        }
    }, [step]);

    // Import progress simulation
    const startImport = useCallback(() => {
        if (importStarted) return;
        setImportStarted(true);
        setImportProgress(0);
        let p = 0;
        importRef.current = setInterval(() => {
            p += Math.random() * 8 + 2;
            if (p >= 100) {
                p = 100;
                if (importRef.current) clearInterval(importRef.current);
                setImportComplete(true);
            }
            setImportProgress(Math.min(p, 100));
        }, 300);
    }, [importStarted]);

    useEffect(() => {
        if (step === 3 && !importStarted) {
            const timer = setTimeout(startImport, 600);
            return () => clearTimeout(timer);
        }
    }, [step, importStarted, startImport]);

    // Dashboard load animation
    useEffect(() => {
        if (step === 6) {
            setDashboardLoaded(false);
            const timer = setTimeout(() => setDashboardLoaded(true), 800);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const next = () => {
        if (step < 6) setStep(step + 1);
    };
    const prev = () => {
        if (step > 0) setStep(step - 1);
    };

    const toggleAgent = (id: string) => {
        setEnabledAgents((prev) =>
            prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
        );
    };

    const handleStart = () => {
        setStarted(true);
        setStep(0);
    };

    /* ─── Render each step ─── */
    const renderStep = () => {
        switch (step) {
            // ── Welcome ──
            case 0:
                return (
                    <div className={styles.stepContent}>
                        <div className={styles.welcomeIcon}>
                            <Hospital size={48} variant="Bulk" color="#D2FE17" />
                        </div>
                        <h3 className={styles.stepTitle}>
                            Welcome to Omnira
                        </h3>
                        <p className={styles.stepDesc}>
                            Let&apos;s set up your practice in under 2 minutes.
                            You&apos;ll see exactly how Omnira transforms your
                            daily operations.
                        </p>
                        <div className={styles.welcomeSteps}>
                            {[
                                "Set up your practice",
                                "Name your AI assistant",
                                "Import your data",
                                "Configure security",
                                "Activate AI agents",
                                "See your dashboard",
                            ].map((s, i) => (
                                <div className={styles.welcomeStep} key={i}>
                                    <span className={styles.welcomeNum}>
                                        {i + 1}
                                    </span>
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>
                );

            // ── Practice Info ──
            case 1:
                return (
                    <div className={styles.stepContent}>
                        <div className={styles.stepIcon}>
                            <Hospital size={28} variant="Bulk" color="#D2FE17" />
                        </div>
                        <h3 className={styles.stepTitle}>
                            Tell us about your practice
                        </h3>
                        <p className={styles.stepDesc}>
                            We&apos;ll customize everything for your workflow.
                        </p>
                        <div className={styles.formFields}>
                            <div className={styles.demoField}>
                                <label className={styles.demoLabel}>
                                    Practice Name
                                </label>
                                <input
                                    className={styles.demoInput}
                                    type="text"
                                    value={practiceName}
                                    onChange={(e) =>
                                        setPracticeName(e.target.value)
                                    }
                                    placeholder="Bright Smile Dental"
                                />
                            </div>
                            <div className={styles.demoField}>
                                <label className={styles.demoLabel}>
                                    Practice Size
                                </label>
                                <div className={styles.sizeOptions}>
                                    {[
                                        "1–2 chairs",
                                        "3–5 chairs",
                                        "6–10 chairs",
                                        "10+",
                                    ].map((size) => (
                                        <button
                                            key={size}
                                            className={cn(
                                                styles.sizeBtn,
                                                {
                                                    [styles.sizeBtnActive]:
                                                        practiceSize === size,
                                                }
                                            )}
                                            onClick={() =>
                                                setPracticeSize(size)
                                            }
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            // ── AI Assistant Name ──
            case 2:
                return (
                    <div className={styles.stepContent}>
                        <div className={styles.stepIcon}>
                            <User size={28} variant="Bulk" color="#D2FE17" />
                        </div>
                        <h3 className={styles.stepTitle}>
                            Name your AI assistant
                        </h3>
                        <p className={styles.stepDesc}>
                            Your AI will handle calls, schedule appointments, and
                            manage operations for {displayName}.
                        </p>
                        <div className={styles.aiNameSection}>
                            <div className={styles.demoField}>
                                <label className={styles.demoLabel}>
                                    Assistant Name
                                </label>
                                <input
                                    className={cn(
                                        styles.demoInput,
                                        styles.demoInputLarge
                                    )}
                                    type="text"
                                    value={aiName}
                                    onChange={(e) => setAiName(e.target.value)}
                                    placeholder="Nova"
                                />
                            </div>
                            <div className={styles.aiPreview}>
                                <div className={styles.aiAvatar}>
                                    <div className={styles.aiAvatarPulse}></div>
                                    <span className={styles.aiAvatarLetter}>
                                        {(aiName || "N").charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className={styles.aiBubble}>
                                    <span className={styles.aiBubbleText}>
                                        &ldquo;Hi, I&apos;m{" "}
                                        <strong>{displayAI}</strong>. I&apos;ll
                                        be managing {displayName}&apos;s
                                        operations 24/7. Nice to meet you!&rdquo;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            // ── Data Import ──
            case 3:
                return (
                    <div className={styles.stepContent}>
                        <div className={styles.stepIcon}>
                            <Import size={28} variant="Bulk" color="#D2FE17" />
                        </div>
                        <h3 className={styles.stepTitle}>
                            Importing your data
                        </h3>
                        <p className={styles.stepDesc}>
                            {displayAI} is securely migrating your practice data.
                        </p>
                        <div className={styles.importSection}>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{
                                        width: `${importProgress}%`,
                                    }}
                                ></div>
                            </div>
                            <div className={styles.progressLabel}>
                                {importComplete
                                    ? "Import complete!"
                                    : `${Math.round(importProgress)}% complete`}
                            </div>
                            <div className={styles.importItems}>
                                {IMPORT_ITEMS.map((item, i) => {
                                    const itemDone =
                                        importProgress >=
                                        ((i + 1) / IMPORT_ITEMS.length) * 100;
                                    return (
                                        <div
                                            className={cn(
                                                styles.importItem,
                                                {
                                                    [styles.importItemDone]:
                                                        itemDone,
                                                }
                                            )}
                                            key={i}
                                        >
                                            <div
                                                className={
                                                    styles.importItemIcon
                                                }
                                            >
                                                {itemDone ? (
                                                    <TickCircle
                                                        size={18}
                                                        variant="Bulk"
                                                        color="#D2FE17"
                                                    />
                                                ) : (
                                                    <Clock
                                                        size={18}
                                                        variant="Bulk"
                                                        color="rgba(248,248,248,0.3)"
                                                    />
                                                )}
                                            </div>
                                            <span className={styles.importItemName}>
                                                {item.name}
                                            </span>
                                            <span className={styles.importItemCount}>
                                                {itemDone ? item.count : "—"}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );

            // ── Security Setup ──
            case 4:
                return (
                    <div className={styles.stepContent}>
                        <div className={styles.stepIcon}>
                            <ShieldSecurity
                                size={28}
                                variant="Bulk"
                                color="#D2FE17"
                            />
                        </div>
                        <h3 className={styles.stepTitle}>
                            Security &amp; Compliance
                        </h3>
                        <p className={styles.stepDesc}>
                            HIPAA-grade protection for {displayName}, enabled by
                            default.
                        </p>
                        <div className={styles.securityToggles}>
                            {[
                                {
                                    label: "HIPAA Compliance",
                                    desc: "Full BAA, audit logging, access controls",
                                    icon: <ShieldSecurity size={20} variant="Bulk" color="#D2FE17" />,
                                    enabled: hipaaEnabled,
                                    toggle: () =>
                                        setHipaaEnabled(!hipaaEnabled),
                                },
                                {
                                    label: "End-to-End Encryption",
                                    desc: "AES-256 encryption at rest and in transit",
                                    icon: <Lock1 size={20} variant="Bulk" color="#D2FE17" />,
                                    enabled: encryptionEnabled,
                                    toggle: () =>
                                        setEncryptionEnabled(
                                            !encryptionEnabled
                                        ),
                                },
                                {
                                    label: "Audit Trail",
                                    desc: "Complete log of every action and access",
                                    icon: <Setting2 size={20} variant="Bulk" color="#D2FE17" />,
                                    enabled: auditEnabled,
                                    toggle: () =>
                                        setAuditEnabled(!auditEnabled),
                                },
                                {
                                    label: "On-Premise Backup",
                                    desc: "Keep sensitive data on your local servers",
                                    icon: <Import size={20} variant="Bulk" color="#D2FE17" />,
                                    enabled: backupEnabled,
                                    toggle: () =>
                                        setBackupEnabled(!backupEnabled),
                                },
                            ].map((item, i) => (
                                <div className={styles.toggleRow} key={i}>
                                    <div className={styles.toggleIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.toggleInfo}>
                                        <div className={styles.toggleLabel}>
                                            {item.label}
                                        </div>
                                        <div className={styles.toggleDesc}>
                                            {item.desc}
                                        </div>
                                    </div>
                                    <button
                                        className={cn(styles.toggle, {
                                            [styles.toggleOn]: item.enabled,
                                        })}
                                        onClick={item.toggle}
                                    >
                                        <span
                                            className={styles.toggleKnob}
                                        ></span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            // ── Agents ──
            case 5:
                return (
                    <div className={styles.stepContent}>
                        <div className={styles.stepIcon}>
                            <People size={28} variant="Bulk" color="#D2FE17" />
                        </div>
                        <h3 className={styles.stepTitle}>
                            Activate your AI agents
                        </h3>
                        <p className={styles.stepDesc}>
                            {displayAI} coordinates{" "}
                            {enabledAgents.length} agents for {displayName}.
                        </p>
                        <div className={styles.agentGrid}>
                            {AGENT_LIST.map((agent) => {
                                const active = enabledAgents.includes(agent.id);
                                return (
                                    <button
                                        className={cn(styles.agentCard, {
                                            [styles.agentCardActive]: active,
                                        })}
                                        key={agent.id}
                                        onClick={() => toggleAgent(agent.id)}
                                    >
                                        <div
                                            className={styles.agentCardIcon}
                                            style={
                                                active
                                                    ? {
                                                          borderColor: `${agent.color}33`,
                                                          background: `${agent.color}0d`,
                                                      }
                                                    : {}
                                            }
                                        >
                                            {agent.icon(22)}
                                        </div>
                                        <div className={styles.agentCardName}>
                                            {agent.name}
                                        </div>
                                        <div className={styles.agentCardDesc}>
                                            {agent.desc}
                                        </div>
                                        <div
                                            className={cn(
                                                styles.agentCardToggle,
                                                {
                                                    [styles.agentCardToggleOn]:
                                                        active,
                                                }
                                            )}
                                        >
                                            {active ? "Active" : "Enable"}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                );

            // ── Dashboard ──
            case 6:
                return (
                    <div className={styles.stepContent}>
                        <div
                            className={cn(styles.dashboard, {
                                [styles.dashboardLoaded]: dashboardLoaded,
                            })}
                        >
                            {/* Dashboard header */}
                            <div className={styles.dashHeader}>
                                <div className={styles.dashLogo}>
                                    <div className={styles.dashLogoIcon}>
                                        <Hospital
                                            size={18}
                                            variant="Bulk"
                                            color="#D2FE17"
                                        />
                                    </div>
                                    <span>{displayName}</span>
                                </div>
                                <div className={styles.dashGreeting}>
                                    Good morning, Dr. Chen
                                </div>
                                <div className={styles.dashNotif}>
                                    <Notification
                                        size={18}
                                        variant="Bulk"
                                        color="rgba(248,248,248,0.5)"
                                    />
                                    <span className={styles.dashNotifBadge}>
                                        3
                                    </span>
                                </div>
                            </div>

                            {/* Dashboard stats */}
                            <div className={styles.dashStats}>
                                {[
                                    {
                                        label: "Today's Patients",
                                        value: "24",
                                        change: "+3",
                                    },
                                    {
                                        label: "Revenue Today",
                                        value: "$8,420",
                                        change: "+12%",
                                    },
                                    {
                                        label: "Claims Pending",
                                        value: "7",
                                        change: "-4",
                                    },
                                    {
                                        label: "Agent Actions",
                                        value: "142",
                                        change: "today",
                                    },
                                ].map((stat, i) => (
                                    <div className={styles.dashStat} key={i}>
                                        <div className={styles.dashStatLabel}>
                                            {stat.label}
                                        </div>
                                        <div className={styles.dashStatValue}>
                                            {stat.value}
                                        </div>
                                        <div className={styles.dashStatChange}>
                                            {stat.change}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Agent activity feed */}
                            <div className={styles.dashFeed}>
                                <div className={styles.dashFeedTitle}>
                                    {displayAI}&apos;s Activity — Live
                                    <span className={styles.liveDot}></span>
                                </div>
                                {[
                                    {
                                        agent: "Scheduling",
                                        action: "Filled cancelled 2pm slot with waitlist patient Maria G.",
                                        time: "2 min ago",
                                        color: "#D2FE17",
                                    },
                                    {
                                        agent: "Billing",
                                        action: "Verified insurance for 3 afternoon patients. All cleared.",
                                        time: "5 min ago",
                                        color: "#60a5fa",
                                    },
                                    {
                                        agent: "Communication",
                                        action: "Sent appointment reminders to 18 patients for tomorrow.",
                                        time: "12 min ago",
                                        color: "#f59e0b",
                                    },
                                    {
                                        agent: "Operations",
                                        action: "Morning huddle report ready. 2 supply items flagged.",
                                        time: "28 min ago",
                                        color: "#a78bfa",
                                    },
                                ].map((item, i) => (
                                    <div className={styles.dashFeedItem} key={i}>
                                        <div
                                            className={styles.dashFeedDot}
                                            style={{
                                                background: item.color,
                                                boxShadow: `0 0 8px ${item.color}66`,
                                            }}
                                        ></div>
                                        <div className={styles.dashFeedContent}>
                                            <span
                                                className={
                                                    styles.dashFeedAgent
                                                }
                                                style={{ color: item.color }}
                                            >
                                                {item.agent}
                                            </span>{" "}
                                            {item.action}
                                        </div>
                                        <div className={styles.dashFeedTime}>
                                            {item.time}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className={styles.dashCta}>
                                <div className={styles.dashCtaText}>
                                    This is your practice on Omnira.
                                    <br />
                                    <strong>Ready to make it real?</strong>
                                </div>
                                <a
                                    className={styles.dashCtaBtn}
                                    href="#waitlist"
                                >
                                    Join the Waitlist
                                </a>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className={cn("section", styles.section)} id="demo">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <FadeIn direction="up" delay={0} duration={0.6}>
                        <Label title="Interactive Demo" />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.1} scale={0.95}>
                        <h2 className={cn("h2", styles.title)}>
                            See Omnira in action
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <p className={styles.subtitle}>
                            Walk through the setup experience. Click through each
                            step to see how your practice comes alive with AI.
                        </p>
                    </FadeIn>
                </div>

                <div className={styles.demoContainer}>
                    {/* Window chrome */}
                    <div className={styles.windowBar}>
                        <div className={styles.windowDots}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={styles.windowTitle}>
                            omnira.space — Setup
                        </div>
                    </div>

                    {/* Progress bar */}
                    {started && (
                        <div className={styles.progressNav}>
                            {STEPS.map((s, i) => (
                                <button
                                    key={i}
                                    className={cn(styles.progressStep, {
                                        [styles.progressStepActive]: i === step,
                                        [styles.progressStepDone]: i < step,
                                    })}
                                    onClick={() => setStep(i)}
                                >
                                    <span className={styles.progressDot}>
                                        {i < step ? (
                                            <TickCircle
                                                size={14}
                                                variant="Bulk"
                                                color="#D2FE17"
                                            />
                                        ) : (
                                            <span>{s.num}</span>
                                        )}
                                    </span>
                                    <span className={styles.progressLabel}>
                                        {s.label}
                                    </span>
                                </button>
                            ))}
                            <div
                                className={styles.progressTrack}
                                style={{
                                    width: `${(step / (STEPS.length - 1)) * 100}%`,
                                }}
                            ></div>
                        </div>
                    )}

                    {/* Step body */}
                    <div className={styles.stepBody}>
                        {!started ? (
                            <div className={styles.startScreen}>
                                <div className={styles.startIcon}>
                                    <Hospital
                                        size={56}
                                        variant="Bulk"
                                        color="#D2FE17"
                                    />
                                </div>
                                <h3 className={styles.startTitle}>
                                    Try the Omnira experience
                                </h3>
                                <p className={styles.startDesc}>
                                    See how easy it is to set up your practice
                                    with AI-powered management. Interactive,
                                    no sign-up required.
                                </p>
                                <button
                                    className={styles.startBtn}
                                    onClick={handleStart}
                                >
                                    Start Demo
                                    <ArrowRight2 size={18} />
                                </button>
                            </div>
                        ) : (
                            <div
                                className={styles.stepInner}
                                key={step}
                            >
                                {renderStep()}
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    {started && (
                        <div className={styles.navBar}>
                            <button
                                className={cn(styles.navBtn, styles.navBtnPrev)}
                                onClick={prev}
                                disabled={step === 0}
                            >
                                <ArrowLeft2 size={16} />
                                Back
                            </button>
                            <div className={styles.navStep}>
                                Step {step + 1} of {STEPS.length}
                            </div>
                            {step < 6 ? (
                                <button
                                    className={cn(
                                        styles.navBtn,
                                        styles.navBtnNext
                                    )}
                                    onClick={next}
                                >
                                    Next
                                    <ArrowRight2 size={16} />
                                </button>
                            ) : (
                                <a
                                    className={cn(
                                        styles.navBtn,
                                        styles.navBtnCta
                                    )}
                                    href="#waitlist"
                                >
                                    Join Waitlist
                                    <ArrowRight2 size={16} />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InteractiveDemo;
