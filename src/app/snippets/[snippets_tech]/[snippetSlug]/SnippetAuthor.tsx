import { Author } from "type";
import styles from "./snippet_chosen.module.scss";
import Link from "next/link";

type Props = {
	author: Author;
	date: string;
};

export default function SnippetAuthor({ author, date }: Props) {
	return (
		<>
			<div className={styles.snippet_author}>
				<div className={styles.snippet_avatar}>{author.name.charAt(0)}</div>
				<Link href="#">
					<h4>{author.name}</h4> {/* Use author.name instead of author */}
				</Link>
				<span>{date}</span>
			</div>
		</>
	);
}
