import styles from "./our_team.module.scss";
import Image from "next/image";
import mike from "../../../../public/images/our_team/mike_avatar.png";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export const OurTeamCard = () => {
	return (
		<>
			<div className={styles.our_team_card}>
				<div className={styles.our_team_card_dashed}>
					<Image alt="" src={mike} className={styles.our_team_img} />
					<span className={styles.our_team_icon}>
						<BsInstagram />
					</span>
				</div>
				<div className={styles.our_team_card_info}>
					<h3 className="full-name">Michael Linares</h3>
					<span className="speciality">Frontend Developer</span>
					<section className={styles.our_team_icon_content}>
						<BsInstagram className={styles.ourTeam_sotial_network} />
						<BsLinkedin className={styles.ourTeam_sotial_network} />
					</section>
				</div>
			</div>
		</>
	);
};
