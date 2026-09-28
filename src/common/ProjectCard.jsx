import React from 'react'
import styles from './ProjectCard.module.css'

function ProjectCard({src,link,h3, p, cta = 'Voir le projet', download = false}) {
  return (
    <a
      className={styles.card}
      href={link}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noopener noreferrer'}
      download={download || undefined}
    >
      <div className={styles.media}>
        <img src={src} alt={`Aperçu du projet ${h3}`} loading="lazy"/>
      </div>
      <div className={styles.body}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <span className={styles.cta}>{cta} <span aria-hidden="true">→</span></span>
      </div>
    </a>
  )
}

export default ProjectCard
