import styles from "./_snippetPage.module.scss";

export default function SnippetCategoryLinks({
	technologies,
	handleCategoryClick,
}) {
	const uniqueCategories = [
		...new Set(technologies.map((item: { category: string; }) => item.category)),
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
