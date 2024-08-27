import { ReusableBanner } from '@/components/stateless/reusable-banner/ReusableBanner';
import { RecentSnippets } from '@/components/stateless/recent-snippets/RecentSnippets';
import { TitleComponent } from '@/components/stateless/titles/TitleComponent';
import SnippetsByTech from './SnippetsByTech';

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
			<TitleComponent title="Snippets Recientes" />
			<RecentSnippets />
		</>
	);
}
