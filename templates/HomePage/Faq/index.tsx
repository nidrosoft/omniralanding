"use client";

import cn from "classnames";
import Label from "@/components/Label";
import Item from "./Item";
import styles from "./Faq.module.sass";

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
                    <Label title="FAQ" />
                    <h2 className={cn("h2", styles.title)}>
                        Frequently asked questions
                    </h2>
                    <div className={styles.subtitle}>
                        Everything you need to know about Omnira. Can&apos;t
                        find what you&apos;re looking for?{" "}
                        <a href="mailto:hello@omnira.space" className={styles.contactLink}>
                            Contact us
                        </a>
                    </div>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        {leftColumn.map((item) => (
                            <Item item={item} key={item.id} />
                        ))}
                    </div>
                    <div className={styles.column}>
                        {rightColumn.map((item) => (
                            <Item item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
