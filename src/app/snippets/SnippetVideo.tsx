import { RichText } from "@graphcms/rich-text-react-renderer";

const SnippetContent = ({ content }) => {
	return (
		<RichText
			content={content.json}
			renderers={{
				embed: {
					YouTube: ({ node }) => (
						<iframe
							width="560"
							height="315"
							src={`https://www.youtube.com/embed/${node.url}`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					),
				},
			}}
		/>
	);
};

export default SnippetContent;
