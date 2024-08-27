"use client";

import styles from "./titles.module.scss";

type Props = {
	SecondaryTitle: string;
};

export const CategoryTitle = ({ SecondaryTitle }: Props) => {
	return (
		<>
			<div className={styles.main_title_wrapper}>
				<h2 className={styles.category_title}>{SecondaryTitle}</h2>
			</div>
		</>
	);
};
