"use client";

import styles from "./titles.module.scss";

type Props = {
	title: string;
};

export const SecondaryTitle = ({ title }: Props) => {
	return (
		<>
			<div className={styles.secondary_title_container}>
				<h1 className={styles.secondary_title}>{title}</h1>
			</div>
		</>
	);
};
