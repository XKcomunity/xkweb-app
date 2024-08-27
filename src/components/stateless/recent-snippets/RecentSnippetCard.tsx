"use client";
import styles from "./recent_snippets.module.scss";
import react from "../../../../public/images/tech-logos/react.png";
import Image from "next/image";

export const RecentSnippetCard = () => {
	return (
		<>
            <div className={styles.recent_snippet__card}>
                <Image src={react}
                    width={60}
                    height={50}
                    alt=""
                    className={styles.recent_snippet_img}
                />
                <div className={styles.recent_snippet_content}>
                    <h4 className={styles.recent_snippet_text}>Css grid responsive sin media queries.</h4>
                </div>
            </div>
        </>
    );
};



