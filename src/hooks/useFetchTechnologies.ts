import { useState, useEffect } from "react";
import { Technology } from "type";

export const useFetchTechnologies = (url: string) => {
	const [technologies, setTechnologies] = useState<Technology[]>([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [filteredTechnologies, setFilteredTechnologies] = useState<Technology[]>([]);

	useEffect(() => {
		async function fetchSnippetCards() {
			const cardsResponse = await fetch(url, {
				cache: 'no-store',
			});
			const cardsJson = await cardsResponse.json();
			setTechnologies(cardsJson);
			setFilteredTechnologies(cardsJson);
		}

		fetchSnippetCards();
	}, [url]);

	return {
		technologies,
		selectedCategory,
		filteredTechnologies,
		setSelectedCategory,
		setFilteredTechnologies,
	};
};
