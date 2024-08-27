import styles from "./snippet_chosen.module.scss";
import Link from "next/link";

type Props = {
	author: string;
	date: string;
};

export default function SnippetAuthor({ author, date }: Props) {
	return (
		<>
			<div className={styles.snippet_author}>
				<div className={styles.snippet_avatar}> {author.charAt(0)} </div>
				<Link href="#">
					<h4>{author}</h4>
				</Link>
				<span>{date}</span>
			</div>
		</>
	);
}
