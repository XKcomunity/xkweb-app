import { getArticles } from "../../../hygraph/articles";
import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { ArticleCard } from "@/components/stateless/articles-card/ArticleCard";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import ContainerButton from "@/components/stateless/container-button/ContainerButton";
import styles from "./_articles.module.scss";
import Link from "next/link";
import { Article } from "type";

export default async function Articles() {
	const articlesData: Promise<Article[]> = await getArticles();
	const articles = await articlesData;

	return (
		<>
			<ReusableBanner title={"Lista De Articulos"} />

			<main className={styles.container}>
				{articles.map((article: Article) => (
					<Link href={`/articles/${article.slug}`} key={article.id}>
						<div className={styles.articleCardWrapper}>
							<ArticleCard
								imageArticle={article.image.url}
								imageAuthor={article.author.photo.url}
								title={article.title}
								shortDescription={article.shortDescription}
								author={article.author.name}
								level={article.level}
							/>
						</div>
					</Link>
				))}
			</main>
			<TitleComponent title="Snippets Recientes" />
			<RecentSnippets />
			<ContainerButton buttonText="Explorar Snippets" route="/snippets" />
		</>
	);
}
