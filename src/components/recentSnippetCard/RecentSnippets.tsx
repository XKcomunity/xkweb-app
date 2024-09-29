"use client";
import { Snippet } from "type";
import { RecentSnippetCard } from "./RecentSnipetCard";
import styles from "./recent_snippet.module.scss";

type Props = {
	snippets: Snippet[];
};

export const RecentSnippets = ({ snippets }: Props) => {
	return (
		<section className={styles.recent_snippets__wrapper}>
			{snippets.slice(-3).map((snippet: Snippet) => (
				<RecentSnippetCard
					key={snippet.id}
					title={snippet.title}
					img={snippet.img}
				/>
			))}
		</section>
	);
};
