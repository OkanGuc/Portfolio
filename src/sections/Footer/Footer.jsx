import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`wrapper ${styles.inner}`}>
            <p>&copy; 2026 Gucuko Okan. Tous droits réservés.</p>
            <a href="#perso">Retour en haut ↑</a>
        </div>
    </footer>
  )
}

export default Footer
