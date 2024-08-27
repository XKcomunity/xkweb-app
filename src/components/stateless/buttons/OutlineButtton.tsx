"use client";
import styles from "./button.module.scss";

type Props = {
	buttonText: string;
};

const OutlineButton = ({ buttonText }: Props) => {
	const ShowMessage = () => {
		alert("Welcome to Xk Web School");
	};
	return (
		<>
			<button className={styles.outline_button} onClick={ShowMessage}>
				{buttonText}
			</button>
		</>
	);
};

export default OutlineButton;
