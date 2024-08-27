"use client";
import { useFetchSnippets } from "@/hooks/useFetchSnippets";
import SnippetTechPils from "./SnippetTechPils";
import SnippetCard from "./SnippetCard";
import { Snippet } from "type";


type Props = {};

export default function SnippetsByTech() {

	const {
		snippets,
		filteredSnippets,
		setSelectedTech,
		setFilteredSnippets,
	} = useFetchSnippets();

	const handleSnippetsTopic = (topic: string): void => {
		setSelectedTech(topic);
		if (topic === "") {
			setFilteredSnippets(snippets);
		} else {
			const filtered = snippets.filter((item: Snippet) => item.topic === topic);
			setFilteredSnippets(filtered);
		}
	};

	return (
		<>
			<SnippetTechPils
				snippetCardList={snippets}
				handleTopicClick={handleSnippetsTopic}
			/>
			<SnippetCard snippetsType={filteredSnippets} />
		</>
	);
}
