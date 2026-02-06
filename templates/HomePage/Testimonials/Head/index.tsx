"use client";

import cn from "classnames";
import Label from "@/components/Label";
import Image from "@/components/Image";
import styles from "./Head.module.sass";
import { FadeIn } from "@/components/Animations";

type HeadProps = {};

const Head = ({}: HeadProps) => (
    <div className={styles.head}>
        <div className={styles.illustrations}>
            <div className={styles.illustration}>
                <Image
                    className={styles.image}
                    src="/images/testimonials-illustration.svg"
                    width={368}
                    height={368}
                    alt=""
                />
                <div className={styles.keyboards}>
                    <Image
                        className={styles.image}
                        src="/images/testimonials-keyboard.svg"
                        width={148}
                        height={17}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.illustration}>
                <Image
                    className={styles.image}
                    src="/images/testimonials-dots.svg"
                    width={368}
                    height={368}
                    alt=""
                />
            </div>
        </div>
        <FadeIn direction="up" delay={0} duration={0.6}>
            <Label title="Testimonials" />
        </FadeIn>
        <FadeIn direction="up" delay={0.1} scale={0.95}>
            <div className={cn("h2", styles.title)}>
                What dentists are saying
            </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
            <div className={styles.info}>
                Real feedback from doctors who tried the Omnira demo.
            </div>
        </FadeIn>
    </div>
);

export default Head;
