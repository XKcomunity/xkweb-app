import Image from "next/image";
import styles from "./_snippetPage.module.scss";
import Link from "next/link";
import { Technology } from "type"; // Assuming "type" is the correct path

type SnippetCategoryLinksProps = {
	technologies: Technology[]; // technologies should be an array of Technology objects
};

export default function SnippetTechCard({
	technologies,
}: SnippetCategoryLinksProps) {
	return (
		<>
			{technologies.map((tech) => (
				<div key={tech.id} className={styles.techcard_container}>
					<Link href={`/snippets/${tech.tech}`}>
						<div className={styles.tech_card}>
							<div className={styles.tech_card_img_content}>
								<Image
									src={tech.img}
									alt=""
									width={40}
									height={40}
									className={styles.tech_card_img}
								/>
							</div>
							<div className={styles.tech_card_title_content}>
								<h4 className={styles.tech_card_title}>{tech.tech}</h4>
							</div>
						</div>
					</Link>
				</div>
			))}
		</>
	);
}
