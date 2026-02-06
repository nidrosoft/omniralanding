import cn from "classnames";
import styles from "./SocialProof.module.sass";

type SocialProofProps = {};

const stats = [
    { value: "200K+", label: "Dental practices in the US" },
    { value: "$3K+", label: "Wasted monthly on fragmented tools" },
    { value: "60-70%", label: "Of front desk time on repetitive tasks" },
    { value: "5-10", label: "Software tools per practice" },
];

const SocialProof = ({}: SocialProofProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.lines}>
                <span></span>
                <span></span>
            </div>
            <div className={styles.head}>
                <div className={styles.label}>
                    <span>The Industry Today</span>
                </div>
                <h2 className={cn("h2", styles.title)}>
                    The numbers don&apos;t lie
                </h2>
                <div className={styles.subtitle}>
                    Dental practices are drowning in software, admin work, and
                    lost revenue. Here&apos;s what the average practice looks
                    like today.
                </div>
            </div>
            <div className={styles.grid}>
                {stats.map((stat, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.cardInner}>
                            <div className={styles.value}>{stat.value}</div>
                            <div className={styles.cardLabel}>{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.logos}>
                <div className={styles.logosLabel}>Replacing tools like</div>
                <div className={styles.logosRow}>
                    {[
                        "Dentrix",
                        "Eaglesoft",
                        "Open Dental",
                        "Weave",
                        "RevenueWell",
                        "Dental Intelligence",
                    ].map((name, index) => (
                        <div className={styles.logoItem} key={index}>
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default SocialProof;
