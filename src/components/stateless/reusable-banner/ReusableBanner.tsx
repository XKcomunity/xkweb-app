import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import styles from "./reusable-banner.module.scss";

type Props = {
	title: string;
};

export const ReusableBanner = ({ title }: Props) => {
	return (
		<>
			<main className={styles.reusable_banner_wrapper}>
				<TitleComponent title={title} />
			</main>
		</>
	);
};
