import { Article } from "type";
import { AuthorInfo } from "../author-info/AuthorInfo";
import styles from "./banner-header-info.module.scss";

type Props = {
	data: Article;
};


export const BannerHeaderInfo = ({data}: Props) => {
	const { date, level } = data;

	return (
		<>
			<section className={styles.banner_header_wrapper}>
        <div className={styles.banner_content}>
					<AuthorInfo data={data} />
					<section className={styles.article_reference}>
						<div className={styles.author_date}>
							<h4>Fecha:</h4>
							<p>{date}</p>
						</div>
						<div className={styles.author_level}>
							<h4 className="">Nivel:</h4>
							<p>{level}</p>
						</div>
					</section>
        </div>
			</section>
		</>
	);
};