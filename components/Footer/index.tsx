import Link from "next/link";
import cn from "classnames";
import Image from "@/components/Image";
import styles from "./Footer.module.sass";
import {
    Hospital,
    Pet,
    Eye,
    Lovely,
    Magicpen,
} from "iconsax-react";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Agents", href: "#agents" },
    { label: "Pricing", href: "#pricing" },
    { label: "Compliance", href: "#compliance" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "mailto:hello@omnira.space" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "HIPAA Notice", href: "#" },
];

const verticals = [
    { icon: <Hospital size={18} variant="Bulk" />, label: "Dental", active: true },
    { icon: <Pet size={18} variant="Bulk" />, label: "Veterinary", active: false },
    { icon: <Eye size={18} variant="Bulk" />, label: "Optometry", active: false },
    { icon: <Lovely size={18} variant="Bulk" />, label: "Med Spa", active: false },
    { icon: <Magicpen size={18} variant="Bulk" />, label: "Chiropractic", active: false },
];

type FooterProps = {};

const Footer = ({}: FooterProps) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                <Image
                    src="/images/omnira-footer.svg"
                    width={1920}
                    height={370}
                    alt=""
                    style={{ width: "100%", height: "auto", maxWidth: "none" }}
                />
            </div>
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                {/* Top row */}
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link className={styles.logo} href="/">
                            <Image
                                className={styles.logoImage}
                                src="/images/omnira-logo.svg"
                                priority={true}
                                width={192}
                                height={48}
                                alt="Omnira"
                            />
                        </Link>
                        <div className={styles.tagline}>
                            The AI operating system for
                            <br />
                            practice-based businesses.
                        </div>
                    </div>

                    <nav className={styles.nav}>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                className={styles.navLink}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Verticals teaser */}
                <div className={styles.teaser}>
                    <div className={styles.teaserLabel}>
                        Omnira for Dental is just the beginning.
                    </div>
                    <div className={styles.verticals}>
                        {verticals.map((v) => (
                            <div
                                className={cn(styles.vertical, {
                                    [styles.verticalActive]: v.active,
                                })}
                                key={v.label}
                            >
                                <span className={styles.verticalIcon}>
                                    {v.icon}
                                </span>
                                {v.label}
                                {!v.active && (
                                    <span className={styles.tooltip}>
                                        Coming soon
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom row */}
                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        &copy; 2026 Omnira. All rights reserved.
                    </div>
                    <div className={styles.madeBy}>
                        Designed &amp; Built with{" "}
                        <span className={styles.heart}>&#10084;&#65039;</span>{" "}
                        by{" "}
                        <a
                            href="https://nidrosoft.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.nidrosoft}
                        >
                            Nidrosoft LLC
                        </a>
                    </div>
                    <div className={styles.legal}>
                        {legalLinks.map((link) => (
                            <a
                                key={link.label}
                                className={styles.legalLink}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
