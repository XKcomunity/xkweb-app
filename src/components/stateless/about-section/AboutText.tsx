import styles from "./about-section.module.scss";
import OutlineButton from "@/components/stateless/buttons/OutlineButtton";

export const AboutText = () => {
	return (
		<>
			<div className={styles.about_text_section}>
				<p className={styles.main_text}>
					Somos mucho más que una plataforma para compartir snippet de código,
					somos la oportunidad para <span>mejorar tus habilidades</span> y ser
					parte de una comunidad apasionada que comparte <span>tu interés</span>{" "}
					por la programación.
				</p>
				<p className={styles.main_subtitle_text}>
					Xk-Community es de código abierto, lo que significa que tú también
					puedes contribuir al desarrollo de la plataforma y ser parte de esta
					comunidad.
				</p>
				<OutlineButton buttonText="Leer mas" />
			</div>
		</>
	);
};
