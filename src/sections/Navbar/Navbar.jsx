import styles from './NavbarStyles.module.css'
import {UseTheme} from '../../common/ThemeContext';

function Navbar() {
  const {theme,toggleTheme} = UseTheme();
  return (
    <header className={styles.header}>
      <nav className={`wrapper ${styles.nav}`}>
        <a href="#perso" className={styles.logo}>OG<span>.</span></a>
        <div className={styles.right}>
          <ul className={styles.links}>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
          >
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
