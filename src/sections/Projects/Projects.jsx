import React from 'react'
import styles from './ProjectsStyles.module.css'
import excursion from '../../assets/excursion.png'
import ProjectCard from '../../common/ProjectCard'
import DiamondBallZ from '../../assets/DiamondBallZ.jpg'
import DiamondApk from '../../assets/DiamondBallsZ.apk'
import FasCars from '../../assets/FasCars.jpg'
import FasCarsApk from '../../assets/FasCars.apk'
import serpentarium from '../../assets/serpentarium.jpg'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="SectionTitle">Projets</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={excursion} 
            link='https://sites.freeboxos.fr/Excursion/' 
            h3="Excursion"
            p="Site web d'excursion réservé aux membres de l'UHA"
            />
            <ProjectCard 
            src={DiamondBallZ} 
            link={DiamondApk}
            h3="Diamond Ball Z"
            p="Application mobile de jeu pour Android basé sur le jeu Bejeweled avec des éléments de Dragon Ball Z"
            />
            <ProjectCard 
            src={FasCars} 
            link={FasCarsApk}
            h3="FasCars"
            p="Application de gestion de location de voitures pour l'entreprise FasCars pour android (version personnel)"
            />
            <ProjectCard 
            src={serpentarium} 
            link="https://serpentarium.okan-g.fr/index.php?page=accueil"
            h3="Serpentarium"
            p="Site web d'élevage de serpents"
            />
        </div>
    </section>
  )
}

export default Projects