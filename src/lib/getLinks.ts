export default async function getLinks() {
	const response = await fetch("http://localhost:3001/docs", {
		cache: "no-cache",
	});
	if (!response.ok) new Error("No data fetched");
	return response.json();
}
