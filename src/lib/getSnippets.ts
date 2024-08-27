export default async function getSnippets() {
	const response = await fetch("http://localhost:3001/snippets", {
		cache: "no-cache",
	});
	if (!response.ok) new Error("No data fetched");
	return response.json();
}
