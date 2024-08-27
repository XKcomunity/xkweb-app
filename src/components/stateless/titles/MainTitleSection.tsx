import styles from "../../../app/snippets/_snippetPage.module.scss";

type Props = {
	title: string;
	span: string;
	description: string;
	subTitle: string;
};

const MainTitleSection = ({ title, span, description, subTitle }: Props) => {
	return (
		<main className={styles.main_snippet}>
			<h1 className={styles.h1}>
				{title} <span className={styles.h1_span}>{span}</span>
			</h1>
			<p className={styles.headings_snippets_text}>{description}</p>
			<h3 className={styles.h3}>{subTitle}</h3>
		</main>
	);
};

export default MainTitleSection;
