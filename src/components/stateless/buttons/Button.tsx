"use client";
import styles from "./button.module.scss";

type Props = {
	buttonText: string;
};

const Button = ({ buttonText }: Props) => {
	const ShowMessage = () => {
		alert("Welcome to Xk Web School");
	};
	return (
		<>
			<button className={styles.button} onClick={ShowMessage}>
				{buttonText}
			</button>
		</>
	);
};

export default Button;
