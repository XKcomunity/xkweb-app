import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getSnippets } from "hygraph/snippets";
import { Snippet } from "type";

export const useFetchSnippets = () => {
	const params = useParams();
	const [snippets, setSnippets] = useState<Snippet[]>([]);
	const [selectedTech, setSelectedTech] = useState<string>("");
	const [filteredSnippets, setFilteredSnippets] = useState<Snippet[]>([]);

	useEffect(() => {
		async function fetchSnippetCards() {
			const cardsResponse = await getSnippets();
			const cardsJson = await cardsResponse;

			console.log("Loaded snippets:", cardsJson);

			const snippets_type: Snippet[] = params?.snippets_tech
				? cardsJson.filter(
						(item: Snippet) => item.tech === params.snippets_tech
				  )
				: cardsJson;

			setSnippets(snippets_type);
			setFilteredSnippets(snippets_type);
		}

		fetchSnippetCards();
	}, [params?.snippets_tech]);

	useEffect(() => {
		if (selectedTech === "") {
			setFilteredSnippets(snippets);
		} else {
			const filtered = snippets.filter(
				(item: Snippet) => item.topic === selectedTech
			);
			setFilteredSnippets(filtered);
		}
	}, [selectedTech, snippets]);
	return {
		snippets,
		selectedTech,
		filteredSnippets,
		setSelectedTech,
		setFilteredSnippets,
	};
};
