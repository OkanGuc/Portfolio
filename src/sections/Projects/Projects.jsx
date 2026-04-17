import React from 'react'
import styles from './ProjectsStyles.module.css'
import excursion from '../../assets/excursion.png'
import ProjectCard from '../../common/ProjectCard'
import DiamondBallZ from '../../assets/DiamondBallZ.jpg'
import DiamondApk from '../../assets/DiamondBallsZ.apk'
import FasCars from '../../assets/FasCars.jpg'
import FasCarsApk from '../../assets/FasCars.apk'
import serpentarium from '../../assets/serpentarium.jpg'
import jeudetir from '../../assets/jeudetir.jpg'
import OGSite from '../../assets/OGSite.png'
import chezmire from '../../assets/chezmire.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="SectionTitle">Projets</h1>
        <div className={styles.projectsContainer}>

            <ProjectCard
              src={chezmire}
              link='https://chez-mire-bischwiller.fr/'
              h3='Chez MIRE'
              p="Site vitrine WordPress pour une épicerie locale · SEO local, responsive, formation client · Site actif et utilisé aujourd'hui"
            />
            <ProjectCard
              src={OGSite}
              link='https://okan-deneyim.site'
              h3='OG Site'
              p="Site personnel développé avec WordPress"
            />
            <ProjectCard 
            src={excursion} 
            link='https://sites.freeboxos.fr/Excursion/' 
            h3="Excursion"
            p="Site web de gestion d'excursions réservé aux membres de l'UHA · HTML / CSS / JavaScript"
            />
            <ProjectCard 
            src={DiamondBallZ} 
            link={DiamondApk}
            h3="Diamond Ball Z"
            p="Jeu mobile Android inspiré de Bejeweled avec un univers Dragon Ball Z · Développé en React Native"
            />
            <ProjectCard 
            src={FasCars} 
            link={FasCarsApk}
            h3="FasCars"
            p="Application mobile de gestion de parc automobile · Développée en React Native avec API REST et base de données · Livrée en 4 mois, déployée en production"
            />
            <ProjectCard 
            src={serpentarium} 
            link="https://serpentarium.okan-g.fr/index.php?page=accueil"
            h3="Serpentarium"
            p="Site web vitrine pour un élevage de serpents · HTML / CSS / PHP"
            />
            <ProjectCard
            src={jeudetir}
            link="https://jeu-de-tir-okan-guc.netlify.app/"
            h3="Jeu de tir"
            p="Mini-jeu JavaScript avec cible mobile · Développé en vanilla JS"
            />
        </div>
    </section>
  )
}

export default Projects