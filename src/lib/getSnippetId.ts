export default async function getSnippetId(snippetId: string) {
	const response = await fetch(`http://localhost:3001/snippets/${snippetId}`, {
		cache: "no-cache",
	});

	if (!response.ok) new Error("No fetched data");

	return response.json();
}
