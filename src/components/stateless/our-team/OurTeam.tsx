import styles from "./our_team.module.scss";
import { OurTeamCard } from "./OurTeamCard";

export const OurTeam = () => {
	return (
		<>
            <article className={styles.our_team_container}>
                <OurTeamCard />
                <OurTeamCard />
            </article>
        </>
    );
};
