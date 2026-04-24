import { NAV_LINKS } from '../../data/portfolioData'
import styles from '../../styles/portfolio.module.css'

function Navbar() {
  return (
    <nav className={styles.nav} data-nav>
      <a href="#hero" className={styles.navLogo}>
        SPS_
      </a>
      <ul className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
