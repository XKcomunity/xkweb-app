import styles from './author-info.module.scss';
import Image from 'next/image';
import { AuthorSotialNetwork } from './SotialNetwork';
import { Article } from 'type';

type AuthorInfoProps = {
	data: Article;
}

export function AuthorInfo({data}: AuthorInfoProps){

  return(
			<section className={styles.author_wrapper}>
				<Image
					src={data.author.photo.url}
					alt={data.author.name}
					className={styles.author__image}
					width={130}
					height={110}
					style={{ borderRadius: '10%' }} />
				<div>
					<h2 className={styles.author_name}>{data.author.name}</h2>
					<p>{data.author.bio}</p>
					<AuthorSotialNetwork data={data} />
				</div>
			</section>
  );
}