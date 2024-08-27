import styles from "./titles.module.scss";

type Props = {
	title: string;
};

export const TitleComponent = ({ title }: Props) => {
	return (
		<section className={styles.titleWrapper}>
			<h2 className={styles.title}>{title}</h2>
			<span className={styles.divider}>
			</span>
		</section>
	);
};
