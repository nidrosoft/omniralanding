"use client";

import cn from "classnames";
import Label from "@/components/Label";
import CompletedTasks from "@/components/CompletedTasks";
import Bento from "./Bento";
import Bento13 from "./Bento13";
import Bento11 from "./Bento11";
import styles from "./Work.module.sass";
import { FadeIn } from "@/components/Animations";

type WorkProps = {};

const Work = ({}: WorkProps) => (
    <div className={styles.work} id="how-it-works">
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <FadeIn direction="up" delay={0} duration={0.6}>
                    <Label title="how it works" />
                </FadeIn>
                <FadeIn direction="up" delay={0.1} scale={0.95}>
                    <h2 className={cn("h2", styles.title)}>
                        Get started in three simple steps
                    </h2>
                </FadeIn>
            </div>
            <div className={styles.body}>
                <div className={styles.boxes}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
                <div className={styles.list}>
                    <FadeIn direction="up" delay={0.15} duration={0.7}>
                        <Bento
                            title="Connect & Configure"
                            content="Omnira onboards your practice in days, not months. Import your patient data, configure your preferences, and set agent permissions."
                            number={1}
                        >
                            <Bento13 />
                        </Bento>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.3} duration={0.7}>
                        <Bento
                            title="Agents Go to Work"
                            content="5 specialized agents begin operating across scheduling, billing, communication, clinical support, and operations — 24/7."
                            number={2}
                        >
                            <Bento11 />
                        </Bento>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.45} duration={0.7}>
                        <Bento
                            title="You Stay in Control"
                            content="Every action is logged. Every decision is reviewable. You configure what agents do autonomously vs. what needs your approval."
                            number={3}
                            variant="full"
                        >
                            <CompletedTasks />
                        </Bento>
                    </FadeIn>
                </div>
            </div>
        </div>
    </div>
);

export default Work;
