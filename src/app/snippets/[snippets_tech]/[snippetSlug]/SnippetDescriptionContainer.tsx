import { SecondaryTitle } from "@/components/stateless/titles/SecondaryTitle";
import SnippetArticle from "./SnippetArticle";
import SnippetAuthor from "./SnippetAuthor";
import styles from "./snippet_chosen.module.scss";

type Props = {
	snippet: Snippet;
};

export default function SnippetDescriptionContainer({ snippet }: Props) {
	return (
		<>
			<main className={styles.containerFluid}>
				<div className={styles.container}>
					<SecondaryTitle title={snippet.title} />
					<SnippetAuthor author={snippet.author} date={snippet.date} />
					<SnippetArticle
						description={snippet.description}
						// code={{
						// 	title: "",
						// 	code: "",
						// }}
					/>
				</div>
			</main>
		</>
	);
}
