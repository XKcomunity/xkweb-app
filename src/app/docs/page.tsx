"use client"
import { useFetchLinks } from "@/hooks/useFetchLinks";
import { TitleComponent } from "@/components/stateless/titles/TitleComponent";
import { Docs } from "type";
import PdfCard from "@/components/stateless/pdf/PdfCard";
import styles from "./links.module.scss";
import robot from "../../../public/images/robots/apolo-removebg-preview.png";
import Image from "next/image";

const data = {
	titleComponet: "Links - Recursos"
};

export default function Docs() {
	let titleComponentProps = data.titleComponet;
	const {
		docs,
	} = useFetchLinks("http://localhost:3001/docs");

	return (
		<>
			<main className={styles.banner_wrapper}>
				<h1 className={styles.title}>Catalogo de Recursos</h1>
				<h3 className={styles.subtitle}>¡Has abordado la nave correcta! Considera esto como tu centro de control de misión personal, listo para guiarte a través del cosmos digital. ¡Así que abróchate el cinturón, prepara tu casco y prepárate para el despegue en tu viaje interestelar de aprendizaje! Y recuerda, en este espacio, el único límite es tu curiosidad."</h3>
			</main>

			<article className={styles.flex}>
				 <TitleComponent title={"Cheat Sheets PDFs"} />
				 <section className={styles.pdf__wrapper}>
					  <PdfCard />
				 </section>
			</article>

	
				<TitleComponent title={titleComponentProps} />

			<article className={styles.link_slogan_content}>
				<Image className={styles.link_slogan_img} src={robot} width={450} height={450} alt="xk-web space ship" />
				<h3 className={styles.link_slogan}>¡Has abordado la nave correcta! Considera esto como tu centro de control de misión personal, listo para guiarte a través del cosmos digital. ¡Así que abróchate el cinturón, prepara tu casco y prepárate para el despegue en tu viaje interestelar de aprendizaje! Y recuerda, en este espacio, el único límite es tu curiosidad."</h3>
			</article>

			<section className={styles.wrapper__links}>
			{docs.map((doc) => (
				<select
						className={styles.link__select}
						key={doc.id}
						defaultValue={'DEFAULT'}
						onChange={(e) => window.open(e.target.value, '_blank')}
				>
						<option value='DEFAULT' disabled>{doc.title}</option>
						{doc.links.map((link: Docs) => (
								<option key={link.id} value={link.url}>
										{link.name}
								</option>
						))}
				</select>
			))}
			</section>
		</>
	);
}
