"use client";

import styles from "./titles.module.scss";

type Props = {
	title: string;
};

export const SecondaryTitleBlack = ({ title }: Props) => {
	return (
		<>
			<div className={styles.secondary_title_container}>
				<h1 className={styles.secondary_title_black}>{title}</h1>
			</div>
		</>
	);
};
