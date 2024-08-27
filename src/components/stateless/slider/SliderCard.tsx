"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./slider.module.scss";
import { ArticleCard } from "../articles-card/ArticleCard";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { Article } from "type";
import Link from "next/link";

type SliderProps = {
	articles: Article[];
};

export const SliderCard = ({ articles }: SliderProps) => {
	//customs icons for the slider
	const RightArrow = (
		<div className={styles.right_arrow_container}>
			<HiArrowRight size={50} color="white" />
		</div>
	);

	const LeftArrow = (
		<div className={styles.left_arrow_container}>
			<HiArrowLeft size={50} color="white" />
		</div>
	);
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
		},
	};
	return (
		<>
			<div className={styles.slider}>
				<Carousel
					responsive={responsive}
					shouldResetAutoplay
					ssr={true}
					infinite={true}
					customLeftArrow={LeftArrow}
					customRightArrow={RightArrow}
				>
					{articles.map((article: Article) => (
						<Link href={`/articles/${article.slug}`} key={article.id}>
							<ArticleCard
								imageArticle={article.image.url}
								imageAuthor={article.author.photo.url}
								title={article.title}
								shortDescription={article.shortDescription}
								author={article.author.name}
								level={article.level}
							/>
						</Link>
					))}
				</Carousel>
			</div>
		</>
	);
};
