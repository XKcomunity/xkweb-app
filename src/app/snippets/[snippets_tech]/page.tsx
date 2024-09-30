import { ReusableBanner } from "@/components/stateless/reusable-banner/ReusableBanner";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import SnippetsByTech from "./SnippetsByTech";

type Params = {
	params: {
		snippetsTech: string;
	};
};

export default async function SnippetTech({
	params: { snippetsTech },
}: Params) {
	return (
		<>
			<ReusableBanner title={snippetsTech} />
			<SnippetsByTech />
			<div style={{ marginBottom: 100 }}></div>
		</>
	);
}
