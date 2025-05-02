import styles from "@/app/page.module.css";

export default function Button({
	backgroundColor = "#fff",
	label = "",
	primary = false,
}) {
	return (
		<div className={styles.page}>
			<button
				name="bob"
				primary={primary}
				style={{ backgroundColor }}
				type="button"
			>
				{label}
			</button>
		</div>
	);
}
