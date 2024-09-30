import { MainHomeTitle } from "@/components/stateless/titles/MainHomeTitle";
import { HomePageBanner } from "@/components/stateless/HomeBanner/HomePageBanner";
import { AboutSection } from "@/components/stateless/about-section/AboutSection";
import { HintSection } from "@/components/stateless/hint-section/HintSection";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { SliderCard } from "@/components/stateless/slider/SliderCard";
import { CategoryTitle } from "@/components/stateless/titles/CategoryTitle";
import ContainerButton from "@/components/stateless/container-button/ContainerButton";
import { OurTeam } from "@/components/stateless/our-team/OurTeam";
import { getArticles } from "../../hygraph/articles";
import { getSnippets } from "../../hygraph/snippets";
import { Article } from "type";
import { Snippet } from "type";
import { RecentSnippets } from "../components/stateless/recentSnippetCard/RecentSnippet";

export default async function Home() {
	const articlesData: Promise<Article[]> = await getArticles();
	const articles = await articlesData;

	const snippetData: Promise<Snippet[]> = await getSnippets();
	const snippets = await snippetData;
	return (
		<>
			<HomePageBanner />
			{/* <div className={styles.main_wrapper}> */}
			<MainHomeTitle />
			<AboutSection />
			<HintSection />
			<TitleComponent title="Articulos Recientes" />
			<CategoryTitle SecondaryTitle="Frontend - Backend - Arquitectura" />
			<SliderCard articles={articles} />
			<ContainerButton buttonText="Explorar Articulos" route="/articles" />
			<TitleComponent title="Snippets Recientes" />
			<RecentSnippets snippets={snippets} />
			<ContainerButton buttonText="Explorar Snippets" route="/snippets" />
			<TitleComponent title="Our Team" />
			<OurTeam />
			{/* </div> */}
		</>
	);
}
