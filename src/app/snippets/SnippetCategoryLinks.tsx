import styles from "./_snippetPage.module.scss";
import { Technology } from "type"; // Assuming "type" is the correct path

// Define the props for SnippetCategoryLinks
type SnippetCategoryLinksProps = {
	technologies: Technology[]; // technologies should be an array of Technology objects
	handleCategoryClick: Function; // handleCategoryClick expects a string or null
};

export default function SnippetCategoryLinks({
	technologies,
	handleCategoryClick,
}: SnippetCategoryLinksProps) {
	const uniqueCategories = [
		...new Set(technologies.map((item) => item.category)),
	];

	return (
		<>
			<div className={styles.headings_links_container}>
				<button
					className={styles.snippetHeadingLinks}
					onClick={() => handleCategoryClick(null)}
				>
					Todas
				</button>
				{uniqueCategories.map((category, index) => (
					<button
						className={styles.snippetHeadingLinks}
						key={index}
						onClick={() => handleCategoryClick(category)}
					>
						{category}
					</button>
				))}
			</div>
		</>
	);
}
