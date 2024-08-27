import Link from "next/link";
import styles from "./author-info.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Article } from "type";

type AuthorSotialNetwork = {
	data: Article;
};

export function AuthorSotialNetwork({ data }: AuthorSotialNetwork) {
	return (
		<section className={styles.author_sotialnetworks}>
			{data.author.linkedIn === "#" ? null : (
				<Link href={data.author.linkedIn} target="_blank">
					<FaLinkedin size={30} />
				</Link>
			)}

			{data.author.twitter === "#" ? null : (
				<Link href={data.author.twitter} target="_blank">
					<FaTwitter size={30} />
				</Link>
			)}

			{data.author.github === "#" ? null : (
				<Link href={data.author.github} target="_blank">
					<FaGithub size={30} />
				</Link>
			)}

			{data.author.discord === "#" ? null : (
				<Link href={data.author.discord} target="_blank">
					<FaDiscord size={30} />
				</Link>
			)}

			{data.author.youtube === "#" ? null : (
				<Link href={data.author.youtube} target="_blank">
					<FaYoutube size={30} />
				</Link>
			)}

			{data.author.instagram === "#" ? null : (
				<Link href={data.author.instagram} target="_blank">
					<FaInstagram size={30} />
				</Link>
			)}
		</section>
	);
}
