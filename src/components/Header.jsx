import logoCode from "../assets/logo_code.svg"
import styles from "./Header.module.css"

export function Header() {
	return (
		<div className={styles.header}>
			<img src={logoCode} alt="logotipo da comunidade code" />
		</div>
	)
}
