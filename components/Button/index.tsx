import cn from "classnames";
import styles from "./Button.module.sass";

type ButtonProps = {
    className?: string;
    title: string;
    href?: any;
    props?: any;
};

const Button = ({ className, title, href, ...props }: ButtonProps) => {
    const CreatedTag = href ? "a" : "button";

    const handleClick = (e: React.MouseEvent) => {
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <CreatedTag
            className={cn(className, styles.button)}
            href={href}
            onClick={handleClick}
            rel={href ? "noopener noreferrer" : undefined}
            {...props}
        >
            <span className={styles.title}>{title}</span>
            <span className={styles.circle}></span>
        </CreatedTag>
    );
};

export default Button;
