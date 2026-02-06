"use client";

import cn from "classnames";
import styles from "./Pricing.module.sass";
import Label from "@/components/Label";
import { TickCircle } from "iconsax-react";

type PricingProps = {};

const currentTools = [
    { tool: "Practice management (Dentrix/Eaglesoft)", cost: "$300–500" },
    { tool: "Patient communications (Weave/RevenueWell)", cost: "$300–400" },
    { tool: "Analytics (Dental Intelligence)", cost: "$300–500" },
    { tool: "Clearinghouse for claims", cost: "$100–200" },
    { tool: "Marketing tools", cost: "$100–300" },
    { tool: "Other tools (inventory, forms, etc.)", cost: "$100–300" },
];

const features = [
    "All 5 AI agents included",
    "Unlimited patients",
    "Unlimited users/seats",
    "Same-day claim submission",
    "AI phone system",
    "Full analytics & reporting",
    "HIPAA compliant",
    "Dedicated onboarding support",
    "Data migration included",
];

const Pricing = ({}: PricingProps) => {
    return (
        <div className={cn("section", styles.section)} id="pricing">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <Label title="Pricing" />
                    <h2 className={cn("h2", styles.title)}>
                        Replace $3,000/month in&nbsp;software
                    </h2>
                    <h2 className={cn("h2", styles.title2)}>
                        for a fraction of the&nbsp;cost.
                    </h2>
                    <div className={styles.subtitle}>
                        One platform. One price. Every agent, every feature,
                        every patient — included.
                    </div>
                </div>

                <div className={styles.layout}>
                    {/* Left — What you currently spend */}
                    <div className={styles.currentSpend}>
                        <div className={styles.currentHead}>
                            <div className={styles.currentDot}></div>
                            <span>What you currently spend</span>
                        </div>
                        <div className={styles.toolList}>
                            {currentTools.map((item, index) => (
                                <div className={styles.toolRow} key={index}>
                                    <span className={styles.toolName}>
                                        {item.tool}
                                    </span>
                                    <span className={styles.toolCost}>
                                        {item.cost}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.totalRow}>
                            <span>Total software</span>
                            <span className={styles.totalValue}>
                                $1,200–2,200/mo
                            </span>
                        </div>
                        <div className={styles.adminRow}>
                            <span>Admin staff time on automated tasks</span>
                            <span className={styles.adminValue}>
                                $2,000–4,000/mo
                            </span>
                        </div>
                        <div className={styles.grandTotal}>
                            <span>Total cost of current approach</span>
                            <span className={styles.grandTotalValue}>
                                $3,200–6,200/mo
                            </span>
                        </div>
                    </div>

                    {/* Right — Omnira Pricing */}
                    <div className={styles.omniraPlan}>
                        <div className={styles.planBadge}>
                            <span>Omnira for Dental</span>
                        </div>
                        <div className={styles.planPrice}>
                            <span className={styles.priceValue}>
                                $1,500–$2,000
                            </span>
                            <span className={styles.pricePeriod}>/month</span>
                        </div>
                        <div className={styles.planCommitment}>
                            Annual commitment — paid monthly or upfront with
                            discount
                        </div>

                        <div className={styles.featureList}>
                            {features.map((feature, index) => (
                                <div className={styles.featureRow} key={index}>
                                    <div className={styles.featureCheck}>
                                        <TickCircle
                                            size={18}
                                            variant="Bold"
                                            color="#D2FE17"
                                        />
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            className={styles.planCta}
                            href="#waitlist"
                        >
                            Join Waitlist for Early Pricing
                        </a>

                        <div className={styles.planFootnote}>
                            Waitlist members receive founding member pricing
                            locked in for the life of their account.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
