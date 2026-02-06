import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Image from "@/components/Image";
import Button from "@/components/Button";
import styles from "./Header.module.sass";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Agents", href: "#agents" },
    { label: "Pricing", href: "#pricing" },
    { label: "Compliance", href: "#compliance" },
    { label: "FAQ", href: "#faq" },
];

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const isScrolled = window.scrollY > 0;
        setHeaderStyle(isScrolled);
    }, []);

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -1);
    });

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={cn(styles.header, {
                [styles.fixed]: headerStyle,
                [styles.menuOpen]: mobileMenuOpen,
            })}
        >
            <div className={cn("container", styles.container)}>
                <div className={styles.inner}>
                    <Link className={styles.logo} href="/">
                        <Image
                            className={styles.image}
                            src="/images/omnira-logo.svg"
                            priority={true}
                            width={185}
                            height={56}
                            alt=""
                        />
                    </Link>

                    <nav
                        className={cn(styles.nav, {
                            [styles.navOpen]: mobileMenuOpen,
                        })}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                className={styles.navLink}
                                href={link.href}
                                onClick={(e) =>
                                    handleNavClick(e, link.href)
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <Button
                        className={styles.button}
                        title="Join the Waitlist"
                        href="#waitlist"
                    />

                    <button
                        className={cn(styles.burger, {
                            [styles.burgerOpen]: mobileMenuOpen,
                        })}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                    </button>

                    <div
                        className={cn(styles.overlay, {
                            [styles.visible]: headerStyle || mobileMenuOpen,
                        })}
                    ></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
