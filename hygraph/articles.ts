import { GraphQLClient, gql } from "graphql-request";

const url: any = process.env.NEXT_PUBLIC_HYGRAPH_API;
const graphContent = new GraphQLClient(url);

export const getArticles = async () => {
	const query = gql`
		query {
			articles {
				createdAt
				id
				level
				publishedAt
				shortDescription
				slug
				title
				image {
					url
				}
				author {
					name
					photo {
						url
					}
				}
				category {
					name
				}
				updatedAt
				url
			}
		}
	`;

	const results: any = await graphContent.request(query);
	const articles = results.articles;

	return articles;
};

export const getArticle = async (slug: string) => {
	const query = gql`
		query ($slug: String!) {
			article(where: { slug: $slug }) {
				createdAt
				author {
					photo {
						url
					}
					name
					bio
					linkedIn
					github
					discord
					youtube
					twitter
					instagram
				}
				title
				content {
					json
				}
				date
				shortDescription
				level
				image {
					url
				}
			}
		}
	`;

	const results: any = await graphContent.request(query, { slug });
	const article = results.article;

	return article;
};
