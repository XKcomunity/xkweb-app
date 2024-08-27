import { GraphQLClient, gql } from "graphql-request";

const url: any = process.env.NEXT_PUBLIC_HYGRAPH_API;
const graphContent = new GraphQLClient(url, {
	cache: "no-store",
});

export const getSnippets = async () => {
	const query = gql`
		query {
			snippets {
				id
				title
				author {
					name
					photo {
						url
					}
					bio
					description
				}
				date
				category {
					name
				}
				topic
				tech
				description
				img {
					url
				}
				subTitle
				code {
					json
				}
			}
		}
	`;

	const results: any = await graphContent.request(query);
	const snippets = results.snippets;

	return snippets;
};

export const getSnippet = async (id: string) => {
	const query = gql`
		query ($id: ID!) {
			snippet(where: { id: $id }) {
				id
				title
				author {
					name
					photo {
						url
					}
					bio
					description
				}
				date
				category {
					name
				}
				topic
				tech
				description
				img {
					url
				}
				subTitle
				code {
					json
				}
			}
		}
	`;

	const results: any = await graphContent.request(query, { id });
	const snippet = results.snippet;

	return snippet;
};
