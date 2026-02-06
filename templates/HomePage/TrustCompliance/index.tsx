"use client";

import cn from "classnames";
import styles from "./TrustCompliance.module.sass";
import Label from "@/components/Label";
import {
    ShieldSecurity,
    Lock1,
    Wifi,
    Task,
} from "iconsax-react";

type TrustComplianceProps = {};

const pillars = [
    {
        id: "hipaa",
        icon: (s: number) => <ShieldSecurity size={s} variant="Bulk" color="#D2FE17" />,
        title: "HIPAA Compliant",
        items: [
            "End-to-end encryption for all patient data",
            "Audit logs for every access to PHI",
            "BAA (Business Associate Agreement) provided",
            "Role-based access controls",
            "Staff HIPAA training tracking built in",
        ],
    },
    {
        id: "privacy",
        icon: (s: number) => <Lock1 size={s} variant="Bulk" color="#D2FE17" />,
        title: "Data Privacy",
        items: [
            "Hybrid architecture: sensitive data can stay on-premises",
            "You own your data — always exportable, never locked in",
            "No data shared with third parties",
            "SOC 2 compliance (in progress)",
        ],
    },
    {
        id: "reliability",
        icon: (s: number) => <Wifi size={s} variant="Bulk" color="#D2FE17" />,
        title: "Reliability",
        items: [
            "99.9% uptime SLA",
            "Automated backups",
            "Offline-capable — agents pause and resume automatically",
            "Multi-workstation support across your practice",
        ],
    },
    {
        id: "compliance",
        icon: (s: number) => <Task size={s} variant="Bulk" color="#D2FE17" />,
        title: "Compliance Built In",
        items: [
            "OSHA tracking and reminders",
            "State regulatory deadline monitoring",
            "License and certification renewal alerts",
            "CE requirement tracking",
            "Consent form management",
        ],
    },
];

const TrustCompliance = ({}: TrustComplianceProps) => {
    return (
        <div className={cn("section", styles.section)} id="compliance">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <Label title="Trust & Security" />
                    <h2 className={cn("h2", styles.title)}>
                        Built for healthcare.
                        <br />
                        Secured for healthcare.
                    </h2>
                    <div className={styles.subtitle}>
                        HIPAA compliance isn&apos;t an add-on — it&apos;s
                        foundational to everything we build. Your patients&apos;
                        data is protected at every layer.
                    </div>
                </div>

                <div className={styles.grid}>
                    {pillars.map((pillar) => (
                        <div className={styles.card} key={pillar.id}>
                            <div className={styles.cardIcon}>
                                {pillar.icon(24)}
                            </div>
                            <h3 className={styles.cardTitle}>{pillar.title}</h3>
                            <div className={styles.cardItems}>
                                {pillar.items.map((item, i) => (
                                    <div className={styles.cardItem} key={i}>
                                        <div className={styles.itemDot}></div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustCompliance;
