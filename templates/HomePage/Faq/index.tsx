"use client";

import cn from "classnames";
import Label from "@/components/Label";
import Item from "./Item";
import styles from "./Faq.module.sass";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

import { faq } from "@/mocks/faq";

type FaqProps = {};

const Faq = ({}: FaqProps) => {
    const midpoint = Math.ceil(faq.length / 2);
    const leftColumn = faq.slice(0, midpoint);
    const rightColumn = faq.slice(midpoint);

    return (
        <div className={cn("section", styles.section)} id="faq">
            <div className={cn("container", styles.container)}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.head}>
                    <FadeIn direction="up" delay={0} duration={0.6}>
                        <Label title="FAQ" />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.1} scale={0.95}>
                        <h2 className={cn("h2", styles.title)}>
                            Frequently asked questions
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <div className={styles.subtitle}>
                            Everything you need to know about Omnira. Can&apos;t
                            find what you&apos;re looking for?{" "}
                            <a href="mailto:hello@omnira.space" className={styles.contactLink}>
                                Contact us
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <div className={styles.columns}>
                    <StaggerChildren className={styles.column} staggerDelay={0.08}>
                        {leftColumn.map((item) => (
                            <StaggerItem key={item.id}>
                                <Item item={item} />
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                    <StaggerChildren className={styles.column} staggerDelay={0.08} delay={0.15}>
                        {rightColumn.map((item) => (
                            <StaggerItem key={item.id}>
                                <Item item={item} />
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                </div>
            </div>
        </div>
    );
};

export default Faq;
