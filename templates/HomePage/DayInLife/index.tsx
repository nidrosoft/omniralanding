"use client";

import cn from "classnames";
import styles from "./DayInLife.module.sass";
import Label from "@/components/Label";
import {
    Moon,
    Coffee,
    People,
    UserTick,
    CalendarRemove,
    DocumentText,
    Call,
    Hospital,
    MoneyRecive,
    Sun1,
} from "iconsax-react";

type DayInLifeProps = {};

const timeline = [
    {
        time: "12:00 AM",
        period: "Overnight",
        icon: (s: number) => <Moon size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "Nothing happening",
            detail: "Systems idle. No work being done. Claims from today sit unsubmitted. Tomorrow's insurance unverified. Inactive patients forgotten.",
            mood: "idle",
        },
        omnira: {
            headline: "Agents working while you sleep",
            detail: "Processing outstanding claims, running reactivation campaigns, generating the morning briefing, checking lab case tracking, and verifying insurance for every patient on tomorrow's schedule.",
            mood: "active",
        },
    },
    {
        time: "7:00 AM",
        period: "Pre-Office",
        icon: (s: number) => <Coffee size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "Office manager arrives early",
            detail: "Reviews the schedule manually, checks voicemails, prints route slips, figures out what's happening today. 30+ minutes of prep before the team even arrives.",
            mood: "stressed",
        },
        omnira: {
            headline: "Morning briefing ready",
            detail: "Office manager reviews the AI-generated briefing on her phone over coffee. Today's schedule, patient notes, insurance flags, lab arrivals, outstanding tasks — all organized and prioritized.",
            mood: "active",
        },
    },
    {
        time: "7:30 AM",
        period: "Morning Huddle",
        icon: (s: number) => <People size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "20–30 minute huddle",
            detail: "Staff arrives. Long morning huddle reviewing paper schedules, discussing patients, sorting out logistics. Time wasted on information that should have been pre-organized.",
            mood: "stressed",
        },
        omnira: {
            headline: "5–10 minute huddle",
            detail: "Everyone already reviewed the briefing. Discussion focuses on clinical cases and patient care priorities — not logistics. Team starts the day aligned and energized.",
            mood: "active",
        },
    },
    {
        time: "8:00 AM",
        period: "First Patients",
        icon: (s: number) => <UserTick size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "Slow check-in process",
            detail: "5–10 minutes per patient for paperwork, insurance verification, copay calculation. Patients wait in the lobby. Clinical team waits for the go-ahead.",
            mood: "stressed",
        },
        omnira: {
            headline: "30-second check-in",
            detail: "Patient checks in via mobile or kiosk in 30 seconds. Insurance already verified. Copay auto-calculated. Clinical team alerted instantly. Patient seated on time.",
            mood: "active",
        },
    },
    {
        time: "9:00 AM",
        period: "Mid-Morning",
        icon: (s: number) => <CalendarRemove size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "Cancellation chaos",
            detail: "Patient cancels. Front desk scrambles to fill — calling through the waitlist one by one between handling other patients. By mid-morning, the slot is still empty. $400–800 lost.",
            mood: "stressed",
        },
        omnira: {
            headline: "Slot filled in 15 minutes",
            detail: "Scheduling Agent texted 5 waitlist patients simultaneously. First to confirm gets the slot. Front desk was never interrupted. Chair time preserved automatically.",
            mood: "active",
        },
    },
    {
        time: "10:30 AM",
        period: "Treatment Planning",
        icon: (s: number) => <DocumentText size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "Paper treatment plan",
            detail: "Treatment plan presented on paper. Patient walks out saying 'I'll think about it.' No automated follow-up. Treatment acceptance drops. Revenue sits on the table.",
            mood: "stressed",
        },
        omnira: {
            headline: "Digital plan with smart follow-up",
            detail: "Plan sent digitally with full cost breakdown, insurance coverage, and financing options. Agent follows up automatically at 3 days, 2 weeks, and monthly until scheduled.",
            mood: "active",
        },
    },
    {
        time: "12:00 PM",
        period: "Lunch",
        icon: (s: number) => <Call size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "No real lunch break",
            detail: "Front desk eats in shifts while answering phones. Morning claims still not submitted. Staff is already tired and the afternoon rush hasn't even started.",
            mood: "stressed",
        },
        omnira: {
            headline: "Staff takes a real lunch",
            detail: "AI phone system handles incoming calls. All morning claims already submitted same-day. Staff takes an actual break. Afternoon starts fresh and focused.",
            mood: "active",
        },
    },
    {
        time: "2:00 PM",
        period: "Emergency Walk-In",
        icon: (s: number) => <Hospital size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "Walk-in emergency — chaos",
            detail: "Walk-in emergency patient. No insurance info, no records, schedule is full. Front desk scrambles. Other patients delayed. Workflow disrupted for the rest of the day.",
            mood: "stressed",
        },
        omnira: {
            headline: "Walk-in processed in 15 minutes",
            detail: "Digital intake completed on tablet. Insurance verified in 2 minutes. Agent found the held emergency slot. Patient seated in 15 minutes. Zero disruption to the schedule.",
            mood: "active",
        },
    },
    {
        time: "4:30 PM",
        period: "End of Day",
        icon: (s: number) => <MoneyRecive size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "Rush to close out",
            detail: "Staff rushes to check out last patients, collect payments, reconcile the day. Unsubmitted claims pile up. Tomorrow's schedule not reviewed. No one confirmed next-day patients.",
            mood: "stressed",
        },
        omnira: {
            headline: "Smooth, automated wrap-up",
            detail: "Fast check-out with auto-generated statements. End-of-day report produced automatically. Tomorrow's prep is already done. Everything reconciled before 5 PM.",
            mood: "active",
        },
    },
    {
        time: "5:00 PM",
        period: "After Close",
        icon: (s: number) => <Sun1 size={s} variant="Bulk" color="#D2FE17" />,
        traditional: {
            headline: "Staff leaves, work doesn't",
            detail: "Staff leaves exhausted. Claims wait until tomorrow. Messages pile up overnight. No confirmations sent. The cycle repeats tomorrow — same stress, same chaos.",
            mood: "idle",
        },
        omnira: {
            headline: "Agents keep working",
            detail: "Agents continue overnight: submit remaining claims, send confirmations for tomorrow, process EOBs, update AR, prepare the next morning briefing. Staff left on time — and on top.",
            mood: "active",
        },
    },
];

const DayInLife = ({}: DayInLifeProps) => {
    return (
        <div className={cn("section", styles.section)} id="day-in-life">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <Label title="Day in the Life" />
                    <h2 className={cn("h2", styles.title)}>
                        A day in the life —
                        <br />
                        your practice on Omnira.
                    </h2>
                    <div className={styles.subtitle}>
                        See how a typical practice day transforms when 5 AI
                        agents handle the operations, and your team focuses on
                        patients.
                    </div>
                </div>

                {/* Column Headers */}
                <div className={styles.columnHeaders}>
                    <div className={styles.colTime}></div>
                    <div className={styles.colTraditional}>
                        <div className={styles.colHeaderBadge}>
                            <span className={styles.colDot + " " + styles.dotRed}></span>
                            <span>Traditional Practice</span>
                        </div>
                    </div>
                    <div className={styles.colOmnira}>
                        <div className={styles.colHeaderBadge}>
                            <span className={styles.colDot + " " + styles.dotGreen}></span>
                            <span>Omnira-Powered Practice</span>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className={styles.timeline}>
                    {timeline.map((entry, index) => (
                        <div
                            className={cn(styles.row, {
                                [styles.rowFirst]: index === 0,
                                [styles.rowLast]: index === timeline.length - 1,
                            })}
                            key={index}
                        >
                            {/* Time Column */}
                            <div className={styles.timeCol}>
                                <div className={styles.timeNode}>
                                    <div className={styles.timeIcon}>
                                        {entry.icon(20)}
                                    </div>
                                </div>
                                <div className={styles.timeInfo}>
                                    <div className={styles.timeValue}>
                                        {entry.time}
                                    </div>
                                    <div className={styles.timePeriod}>
                                        {entry.period}
                                    </div>
                                </div>
                                {index < timeline.length - 1 && (
                                    <div className={styles.connector}></div>
                                )}
                            </div>

                            {/* Traditional Column */}
                            <div className={cn(styles.entryCard, styles.entryTraditional)}>
                                <h4 className={styles.entryHeadline}>
                                    {entry.traditional.headline}
                                </h4>
                                <p className={styles.entryDetail}>
                                    {entry.traditional.detail}
                                </p>
                                <div className={cn(styles.moodTag, styles[`mood_${entry.traditional.mood}`])}>
                                    {entry.traditional.mood === "idle" ? "Systems idle" : 
                                     entry.traditional.mood === "stressed" ? "Staff stressed" : "Neutral"}
                                </div>
                            </div>

                            {/* Omnira Column */}
                            <div className={cn(styles.entryCard, styles.entryOmnira)}>
                                <h4 className={styles.entryHeadline}>
                                    {entry.omnira.headline}
                                </h4>
                                <p className={styles.entryDetail}>
                                    {entry.omnira.detail}
                                </p>
                                <div className={cn(styles.moodTag, styles.mood_active)}>
                                    {entry.omnira.mood === "active" ? "Agents active" : "Ready"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Summary — same grid as timeline rows */}
                <div className={styles.summaryRow}>
                    {/* Time column — final node */}
                    <div className={styles.summaryTimeCol}>
                        <div className={styles.summaryConnector}></div>
                        <div className={styles.summaryIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div className={styles.summaryTimeLabel}>24h Summary</div>
                    </div>

                    {/* Traditional summary */}
                    <div className={cn(styles.summaryCard, styles.summaryTraditional)}>
                        <div className={styles.summaryDot + " " + styles.dotRed}></div>
                        <div className={styles.summaryContent}>
                            <div className={styles.summaryLabel}>Traditional Practice</div>
                            <div className={styles.summaryValue}>10+ hours of admin work</div>
                            <div className={styles.summaryNote}>Staff burned out. Claims delayed. Revenue leaking.</div>
                        </div>
                    </div>

                    {/* Omnira summary */}
                    <div className={cn(styles.summaryCard, styles.summaryOmnira)}>
                        <div className={styles.summaryDot + " " + styles.dotGreen}></div>
                        <div className={styles.summaryContent}>
                            <div className={styles.summaryLabel}>Omnira-Powered Practice</div>
                            <div className={styles.summaryValue}>90% automated operations</div>
                            <div className={styles.summaryNote}>Staff focused on patients. Agents handle the rest — 24/7.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DayInLife;
