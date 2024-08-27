"use client";
import styles from "./snippet_chosen.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { splitDescriptionIntoBlocks } from "@/utils/snippetUtils";

type LibraryCode = {
	url: string | undefined;
	type: string;
	title: string;
	code: string;
};

type Props = {
	description: string;
};

export default function SnippetArticle({ description }: Props) {
	const blocks: (LibraryCode | string)[] =
		splitDescriptionIntoBlocks(description);

	// Renderiza los bloques de texto y los bloques de código en el orden correcto
	return (
		<section className={styles.snippet_article_content}>
			{blocks.map((block, index) => {
				if (typeof block === "string") {
					return (
						<p key={index} className={styles.article_text}>
							{block}
						</p>
					);
				} else if (block.type === "video") {
					return (
						<div key={index} className={styles.video_container}>
							<iframe
								width="560"
								height="315"
								src={block.url}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					);
				} else {
					return (
						<div key={index}>
							<h3>{block.title}</h3>
							<SyntaxHighlighter language="typescript" style={atomDark}>
								{block.code}
							</SyntaxHighlighter>
						</div>
					);
				}
			})}
		</section>
	);
}
