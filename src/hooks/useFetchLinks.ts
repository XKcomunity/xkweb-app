
import { useState, useEffect } from "react";
import { Docs } from "type";

export const useFetchLinks = (url: string) => {
	const [docs, setDocs] = useState<Docs[]>([]);

	useEffect(() => {
		async function fetchSnippetCards() {
			const linksResponse = await fetch(url, {
				cache: "no-store",
			});
			const linksJson = await linksResponse.json();
			setDocs(linksJson);
		}

		fetchSnippetCards();
	}, [url]);

	return {
		docs,
	};
};
