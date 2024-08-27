
import { Snippet } from "type";
import styles from "./snippet-tech.module.scss";

type Props = {
	snippetCardList: Snippet[];
	handleTopicClick: Function;
};

export default function SnippetTechPils({
	snippetCardList,
	handleTopicClick,
}: Props) {
	const uniquePils = [
		...new Set(snippetCardList.map((item: Snippet) => item.topic)),
	];

	return (
		<>
			<section className={styles.snippet_tech_wrapper}>
				<article className={styles.snippet_tech_content}>
					<button
						className={styles.pils_button}
						onClick={() => handleTopicClick("")}
					>
						Todas
					</button>
					{uniquePils.map((topic: string, index) => (
						<button
							className={styles.pils_button}
							key={index}
							onClick={() => handleTopicClick(topic)}
						>
							{topic}
						</button>
					))}
				</article>
			</section>
		</>
	);
}
