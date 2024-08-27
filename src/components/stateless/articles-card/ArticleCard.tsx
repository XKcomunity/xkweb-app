"use client";
import styles from "./article-card.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
	imageArticle?: string;
	imageAuthor?: string;
	title: string;
	shortDescription: string;
	level: string;
	author: string;
};

export const ArticleCard = ({
	imageArticle,
	imageAuthor,
	title,
	shortDescription,
	level,
	author,
}: Props) => {
	const truncatedShortDescription =
		shortDescription.length > 130
			? shortDescription.slice(0, 130) + "..."
			: shortDescription;
	const truncatedArticleTitle =
		title.length > 35 ? title.slice(0, 35) + "..." : title;
	return (
		<>
			<motion.div whileHover={{ scale: 1.02 }}>
				<div className={styles.card_wrapper}>
					<div className={styles.image_wrapper}>
						<Image
							className={styles.card_image}
							src={imageArticle}
							alt={title}
							width={200}
							height={200}
						/>{" "}
					</div>
					<div className={styles.card_content}>
						<div className={styles.content_wrapper}>
							<h2 className={styles.card_title}>{truncatedArticleTitle}</h2>
							<p className={styles.card_description}>
								{truncatedShortDescription}
							</p>
						</div>
						<footer className={styles.footer_wrapper}>
							<div className={styles.section_avatar}>
								<div className={styles.card_avatar}>
									<Image
										className={styles.card_avatar_img}
										src={imageAuthor}
										alt={title}
										width={60}
										height={60}
									/>
								</div>
								<h6 className={styles.section_avatar_name}>{author}</h6>
							</div>
							<div className={styles.footer}>
								<span className={styles.bold_footer}>Nivel:</span>
								<p className={styles.level_text}>{level}</p>
							</div>
						</footer>
					</div>
				</div>
			</motion.div>
		</>
	);
};
