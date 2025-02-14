import Image from "next/image";
import styles from "./snippet-tech.module.scss";
import Link from "next/link";
import { Snippet } from "type";

type Props = {
	snippetsType: Snippet[];
};

export default function SnippetCard({ snippetsType }: Props) {
	const snippet = snippetsType[0]; // Access the first item directly

	return (
		<section className={styles.snippet_card_container}>
			{snippetsType.map((snippet) => (
				<article key={snippet.id} className={styles.snippet_card}>
					<Link href={`/snippets/${snippet.tech}/${snippet.id}`}>
						<div className={styles.snippet_card_heading}>
							<Image
								src={snippet.img.url}
								className={styles.snippet_card_img}
								alt="Snippet card image"
								width={100}
								height={100}
							/>
							<div className={styles.snippet_card_heading_text}>
								<h3>{snippet.title}</h3>
								<p className={styles.snippet_card_paragraph}>
									{snippet.description.slice(0, 300)}...
								</p>
							</div>
						</div>
					</Link>
				</article>
			))}
		</section>
	);
}
