import styles from '../../app/page.module.css'
import Navbar from '../Header/Navbar/navbar'

export default function Header() {
    return (
        <header className={styles.tagHeader}>
            <a className={styles.logo} href="/">TechGamer Consulting</a>
            <Navbar/>
        </header>
    )
}