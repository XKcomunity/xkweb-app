"use client";

import styles from "@/components/complex/about-section/about-section.module.scss";
import { AboutText } from "./AboutText";

export const AboutSection = () => {
	return (
		<>
			<main className={styles.main_container}>
				<div className={styles.main_about_glass}></div>
			    <AboutText />
			</main>
		</>
	);
};
