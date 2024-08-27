"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { scrollToTop } from "@/utils/scrollToTop";
import styles from "../../stateless/buttons/button.module.scss";
import { BsArrowDownSquareFill, BsArrowUpShort, BsDisplay } from "react-icons/bs";

const ScrollTopButton = () => {
	const { isVisible } = useScrollTop();
	return (
		<button
			className={styles.scroll_btn}
			style={{ display: isVisible ? "block" : "none" }}
			onClick={scrollToTop}
			title="icon"
		>
			<BsArrowUpShort />
		</button>
	);
};

export default ScrollTopButton;
