import styles from "../../../app/snippets/[snippets_tech]/[snippetSlug]/snippet_chosen.module.scss";

type WrapperInfoProps<T> = {
  data: T;
	children: React.ReactNode;
}

export function WrapperInfoDetails<T>({ data, children }: WrapperInfoProps<T>) {
	return (
		<main className={styles.containerFluid}>
			<div className={styles.container}>{children}</div>
		</main>
	);
}