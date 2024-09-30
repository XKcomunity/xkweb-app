"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../components/stateless/slider/slider.module.scss";
import { RecentSnippetCard } from "@/components/stateless/recentSnippetCard/RecentSnipetCard";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { Snippet } from "type";
import Link from "next/link";

type SliderProps = {
	snippets: Snippet[];
};

export const SnippetSlider = ({ snippets }: SliderProps) => {
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
					{snippets.map((snippet: Snippet) => (
						<Link href={`/snippets/${snippet.slug}`} key={snippet.id}>
							<RecentSnippetCard title={snippet.title} img={snippet.img} />
						</Link>
					))}
				</Carousel>
			</div>
		</>
	);
};
