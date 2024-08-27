"use client";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import logo from "../../../../public/logo/logo-x.png";

export function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footer_wrapper}>
					<div className={styles.footer_section_1}>
						<div className={styles.footer_logo}>
							<Image src={logo} width={90} height={90} alt="Xk-web logo" />
							<span className={styles.logo_text}>XK Community</span>
						</div>
						<div>
							<p className={styles.footer_description}>
								Somos una comunidad apasionada por la programación que se dedica
								a compartir snippet de código, componentes y animaciones, así
								como artículos sobre lenguajes de programación, frameworks y
								ejercicios para puedas crecer en tu emprendimiento.
							</p>
						</div>
						<div className={styles.footer_social_media}>
							<div className={styles.social_icons_wrapper}>
								<motion.div whileHover={{ scale: 1.1 }}>
									<Link href="https://www.instagram.com/xkweb/" target="_blank">
										<FaInstagram color="white" size={35} />
									</Link>
								</motion.div>
								<motion.div whileHover={{ scale: 1.1 }}>
									<Link href="#">
										<FaDiscord color="white" size={35} />
									</Link>
								</motion.div>
								<motion.div whileHover={{ scale: 1.1 }}>
									<Link
										href="https://www.youtube.com/c/XkWeb/videos"
										target="_blank"
									>
										<FaYoutube color="white" size={35} />
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
					<div className={styles.footer_section_2}>
						<div className={styles.links_heading}>
							<span className={styles.heading}>Enlaces Rapidos</span>
						</div>
						<div className={styles.footer_links}>
							<Link href="/" className={styles.link}>
								<li className={styles.navbar_item}>
									<a>Inicio</a>
								</li>
							</Link>
							<Link href="/articles" className={styles.link}>
								<li className={styles.navbar_item}>
									<a>Articulos</a>
								</li>
							</Link>
							<Link href="/snippets" className={styles.link}>
								<li className={styles.navbar_item}>
									<a>Snippets</a>
								</li>
							</Link>
							<Link href="/docs" className={styles.link}>
								<li className={styles.navbar_item}>
									<a>Docs</a>
								</li>
							</Link>
						</div>
					</div>
					
				</div>
			</footer>
		</>
	);
}
