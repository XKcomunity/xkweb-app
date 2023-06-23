import { MainHomeTitle } from "@/components/stateless/titles/MainHomeTitle";
import { HomePageBanner } from "@/components/stateless/HomeBanner/HomePageBanner";
import { AboutSection } from "@/components/stateless/about-section/AboutSection";
import { HintSection } from "@/components/stateless/hint-section/HintSection";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { SliderCard } from "@/components/stateless/slider/SliderCard";
import { CategoryTitle } from "@/components/stateless/titles/CategoryTitle";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import ContainerButton from "@/components/stateless/container-button/ContainerButton";
import { OurTeam } from "@/components/stateless/our-team/OurTeam";
// import styles from "./page.module.scss";

export default function Home() {
	return (
		<>
			<HomePageBanner />
			{/* <div className={styles.main_wrapper}> */}
			<MainHomeTitle />
			<AboutSection />
			<HintSection />
			<TitleComponent title="Articulos Recientes" />
			<CategoryTitle SecondaryTitle="Frontend - Backend - Arquitectura" />
			<SliderCard />
			<ContainerButton buttonText="Explorar Articulos" route="/articles" />
			<TitleComponent title="Snippets Recientes" />
			<RecentSnippets />
			<ContainerButton buttonText="Explorar Snippets" route="/snippets" />
			<TitleComponent title="Our Team" />
			<OurTeam />
			{/* </div> */}
		</>
	);
}
