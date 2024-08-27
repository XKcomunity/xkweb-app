import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { RecentSnippets } from "@/components/stateless/recent-snippets/RecentSnippets";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { WrapperInfoDetails } from "@/components/stateless/wrapper-info-details/WrapperInfoDetails";
import { SecondaryTitle } from "@/components/stateless/titles/SecondaryTitle";
import SnippetArticle from "./SnippetArticle";
import { getSnippet } from "../../../../../hygraph/snippets";
import { Snippet } from "type";


type Params = {
	params: {
		snippetSlug: string;
	};
};

export default async function SnippetChosen({
	params: { snippetSlug },
}: Params) {

	const subTitle = "Snippets Recientes";
	const dataSnippetId: Promise<Snippet> = getSnippet(snippetSlug);
	const snippet: Snippet = await dataSnippetId;

	return (
		<>
			<ReusableBanner title={snippet.tech} />
			<WrapperInfoDetails data={snippet}>
        <SecondaryTitle title={snippet.title} />
				<SnippetArticle description={snippet.description} />
			</WrapperInfoDetails>

			<TitleComponent title={subTitle} />
			<RecentSnippets />
		</>
	);
}
