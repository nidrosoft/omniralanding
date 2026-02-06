"use client";

import { useState } from "react";
import cn from "classnames";
import styles from "./Waitlist.module.sass";
import Label from "@/components/Label";
import {
    MoneyRecive,
    Ranking,
    MessageEdit,
    Personalcard,
    TickCircle,
} from "iconsax-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

type WaitlistProps = {};

const FORMSPARK_ACTION_URL = "https://submit-form.com/AjzOONX43";

const incentives = [
    {
        icon: (s: number) => <MoneyRecive size={s} variant="Bulk" color="#D2FE17" />,
        title: "Founding member pricing",
        detail: "Locked in for the life of your account",
    },
    {
        icon: (s: number) => <Ranking size={s} variant="Bulk" color="#D2FE17" />,
        title: "Priority onboarding",
        detail: "First in line when we launch",
    },
    {
        icon: (s: number) => <MessageEdit size={s} variant="Bulk" color="#D2FE17" />,
        title: "Input on features",
        detail: "Help shape the product for your workflow",
    },
    {
        icon: (s: number) => <Personalcard size={s} variant="Bulk" color="#D2FE17" />,
        title: "Dedicated support",
        detail: "Personal onboarding specialist assigned to you",
    },
];

const Waitlist = ({}: WaitlistProps) => {
    const [form, setForm] = useState({
        practiceName: "",
        name: "",
        email: "",
        phone: "",
        practiceSize: "",
        currentSoftware: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch(FORMSPARK_ACTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    practiceName: form.practiceName,
                    name: form.name,
                    email: form.email,
                    phone: form.phone || "Not provided",
                    practiceSize: form.practiceSize,
                    currentSoftware: form.currentSoftware || "Not specified",
                    _email: {
                        subject: `New Omnira Waitlist Signup — ${form.practiceName}`,
                    },
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                setError(
                    "Something went wrong. Please try again or email us at hello@omnira.space."
                );
            }
        } catch {
            setError(
                "Network error. Please check your connection and try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={cn("section", styles.section)} id="waitlist">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <FadeIn direction="up" delay={0} duration={0.6}>
                        <Label title="Join the Waitlist" />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.1} scale={0.95}>
                        <h2 className={cn("h2", styles.title)}>
                            Be the first to run your
                            <br />
                            practice on Omnira.
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <div className={styles.subtitle}>
                            Join 500+ dental professionals already on the waitlist.
                            Get early access, founding member pricing, and help
                            shape the future of practice management.
                        </div>
                    </FadeIn>
                </div>

                <div className={styles.layout}>
                    {/* Left — Incentives */}
                    <StaggerChildren className={styles.incentives} staggerDelay={0.1}>
                        {incentives.map((item, index) => (
                            <StaggerItem key={index}>
                                <div className={styles.incentive}>
                                    <div className={styles.incentiveIcon}>
                                        {item.icon(24)}
                                    </div>
                                    <div className={styles.incentiveContent}>
                                        <div className={styles.incentiveTitle}>
                                            {item.title}
                                        </div>
                                        <div className={styles.incentiveDetail}>
                                            {item.detail}
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>

                    {/* Right — Form or Success */}
                    {isSubmitted ? (
                        <div className={styles.successCard}>
                            <div className={styles.successIcon}>
                                <TickCircle
                                    size={64}
                                    variant="Bold"
                                    color="#D2FE17"
                                />
                            </div>
                            <h3 className={styles.successTitle}>
                                You&apos;re on the list!
                            </h3>
                            <p className={styles.successMessage}>
                                Welcome to the Omnira waitlist,{" "}
                                <strong>{form.name.split(" ")[0]}</strong>. 
                                We&apos;ll reach out soon with early access
                                details for{" "}
                                <strong>{form.practiceName}</strong>.
                            </p>
                            <div className={styles.successPerks}>
                                <div className={styles.successPerk}>
                                    <TickCircle
                                        size={18}
                                        variant="Bold"
                                        color="#D2FE17"
                                    />
                                    <span>Founding member pricing locked in</span>
                                </div>
                                <div className={styles.successPerk}>
                                    <TickCircle
                                        size={18}
                                        variant="Bold"
                                        color="#D2FE17"
                                    />
                                    <span>Priority onboarding reserved</span>
                                </div>
                                <div className={styles.successPerk}>
                                    <TickCircle
                                        size={18}
                                        variant="Bold"
                                        color="#D2FE17"
                                    />
                                    <span>Confirmation sent to {form.email}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.formRow}>
                                <div className={styles.field}>
                                    <label className={styles.label}>
                                        Practice Name *
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="practiceName"
                                        value={form.practiceName}
                                        onChange={handleChange}
                                        placeholder="Bright Smile Dental"
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label className={styles.label}>
                                        Your Name *
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Dr. Cecilia Rey"
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.field}>
                                    <label className={styles.label}>
                                        Email *
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="cecilia@brightsmile.com"
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label className={styles.label}>
                                        Phone (optional)
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="(305) 555-0142"
                                    />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.field}>
                                    <label className={styles.label}>
                                        Practice Size *
                                    </label>
                                    <select
                                        className={styles.select}
                                        name="practiceSize"
                                        value={form.practiceSize}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select size</option>
                                        <option value="1-2 chairs">
                                            1–2 chairs
                                        </option>
                                        <option value="3-5 chairs">
                                            3–5 chairs
                                        </option>
                                        <option value="6-10 chairs">
                                            6–10 chairs
                                        </option>
                                        <option value="10+ chairs">
                                            10+ chairs
                                        </option>
                                    </select>
                                </div>
                                <div className={styles.field}>
                                    <label className={styles.label}>
                                        Current Software (optional)
                                    </label>
                                    <select
                                        className={styles.select}
                                        name="currentSoftware"
                                        value={form.currentSoftware}
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Select software
                                        </option>
                                        <option value="Dentrix">
                                            Dentrix
                                        </option>
                                        <option value="Eaglesoft">
                                            Eaglesoft
                                        </option>
                                        <option value="Open Dental">
                                            Open Dental
                                        </option>
                                        <option value="Curve Dental">
                                            Curve Dental
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {error && (
                                <div className={styles.errorMsg}>{error}</div>
                            )}

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Join the Waitlist"}
                            </button>
                            <div className={styles.formNote}>
                                No credit card required. We&apos;ll notify you
                                when Omnira is ready for your practice.
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Waitlist;
