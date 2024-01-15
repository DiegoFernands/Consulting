import styles from '../../app/page.module.css'

export default function Header() {
    return (
        <header className={styles.tagHeader}>
            <a className={styles.logo} href="/">TechGamer Consulting</a>
        </header>
    )
}