"use client";
import { useFetchTechnologies } from "@/hooks/useFetchTechnologies";
import styles from "./_snippetPage.module.scss";
import SnippetCategoryLinks from "./SnippetCategoryLinks";
import SnippetTechCard from "./snippetTechCard";
import MainTitleSection from "../../components/stateless/titles/MainTitleSection";

const data = {
	title: "Explora por",
	span: "Temas",
	description:
		"Esta sección está organizada por temas, al seleccionar uno en particular, podrás explorar una gran cantidad de snippets de código relacionados con ese tema en específico.",

	subTitle: "¡Imagina todo lo que puedes aprender y descubrir en esta sección!",
};

export default function Snippet() {

	const {
		technologies,
		setSelectedCategory,
		filteredTechnologies,
		setFilteredTechnologies,
	} = useFetchTechnologies("http://localhost:3001/technologies");

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		if (category === null) {
			setFilteredTechnologies(technologies);
		} else {
			const filtered = technologies.filter(
				(technology) => technology.category === category
			);
			setFilteredTechnologies(filtered);
		}
	};

	return (
		<>
			<main className={styles.main_snippet}>
				<MainTitleSection
					title={data.title}
					span={data.span}
					description={data.description}
					subTitle={data.subTitle}
				/>
				<SnippetCategoryLinks
					technologies={technologies}
					handleCategoryClick={handleCategoryClick}
				/>
				<div className={styles.divider}></div>
				<div className={styles.tech_cards_wrapper}>
					<SnippetTechCard technologies={filteredTechnologies} />
				</div>
			</main>
		</>
	);
}
