"use client";
import styles from "./recent_snippet.module.scss";
import Image from "next/image";

type Props = {
	title: string;
	img: { url: string };
};

export const RecentSnippetCard = ({ title, img }: Props) => {
	return (
		<>
			<div className={styles.recent_snippet__card}>
				<Image
					src={img.url} // Access the url property
					width={60}
					height={50}
					alt={title}
					className={styles.recent_snippet_img}
				/>
				<div className={styles.recent_snippet_content}>
					<h4 className={styles.recent_snippet_text}>{title}</h4>
				</div>
			</div>
		</>
	);
};
