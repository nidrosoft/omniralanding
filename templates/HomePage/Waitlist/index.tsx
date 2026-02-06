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
} from "iconsax-react";

type WaitlistProps = {};

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
        yourName: "",
        email: "",
        phone: "",
        practiceSize: "",
        currentSoftware: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Waitlist submission:", form);
    };

    return (
        <div className={cn("section", styles.section)} id="waitlist">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <Label title="Join the Waitlist" />
                    <h2 className={cn("h2", styles.title)}>
                        Be the first to run your
                        <br />
                        practice on Omnira.
                    </h2>
                    <div className={styles.subtitle}>
                        Join 500+ dental professionals already on the waitlist.
                        Get early access, founding member pricing, and help
                        shape the future of practice management.
                    </div>
                </div>

                <div className={styles.layout}>
                    {/* Left — Incentives */}
                    <div className={styles.incentives}>
                        {incentives.map((item, index) => (
                            <div className={styles.incentive} key={index}>
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
                        ))}
                    </div>

                    {/* Right — Form */}
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
                                    name="yourName"
                                    value={form.yourName}
                                    onChange={handleChange}
                                    placeholder="Dr. Sarah Chen"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.field}>
                                <label className={styles.label}>Email *</label>
                                <input
                                    className={styles.input}
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="sarah@brightsmile.com"
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
                                    placeholder="(555) 123-4567"
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
                                    <option value="1-2">1–2 chairs</option>
                                    <option value="3-5">3–5 chairs</option>
                                    <option value="6-10">6–10 chairs</option>
                                    <option value="10+">10+ chairs</option>
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
                                    <option value="">Select software</option>
                                    <option value="dentrix">Dentrix</option>
                                    <option value="eaglesoft">Eaglesoft</option>
                                    <option value="opendental">
                                        Open Dental
                                    </option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Join the Waitlist
                        </button>
                        <div className={styles.formNote}>
                            No credit card required. We&apos;ll notify you when
                            Omnira is ready for your practice.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Waitlist;
