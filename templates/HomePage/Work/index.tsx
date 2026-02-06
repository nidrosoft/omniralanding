import cn from "classnames";
import Label from "@/components/Label";
import CompletedTasks from "@/components/CompletedTasks";
import Bento from "./Bento";
import Bento13 from "./Bento13";
import Bento11 from "./Bento11";
import styles from "./Work.module.sass";

type WorkProps = {};

const Work = ({}: WorkProps) => (
    <div className={styles.work} id="how-it-works">
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <Label title="how it works" />
                <h2 className={cn("h2", styles.title)}>
                    Get started in three simple steps
                </h2>
            </div>
            <div className={styles.body}>
                <div className={styles.boxes}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
                <div className={styles.list}>
                    <Bento
                        title="Connect & Configure"
                        content="Omnira onboards your practice in days, not months. Import your patient data, configure your preferences, and set agent permissions."
                        number={1}
                    >
                        <Bento13 />
                    </Bento>
                    <Bento
                        title="Agents Go to Work"
                        content="5 specialized agents begin operating across scheduling, billing, communication, clinical support, and operations — 24/7."
                        number={2}
                    >
                        <Bento11 />
                    </Bento>
                    <Bento
                        title="You Stay in Control"
                        content="Every action is logged. Every decision is reviewable. You configure what agents do autonomously vs. what needs your approval."
                        number={3}
                    >
                        <CompletedTasks />
                    </Bento>
                </div>
            </div>
        </div>
    </div>
);

export default Work;
