import style from './PersoStyles.module.css';
import OkanImg from '../../assets/okanimage.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import gitHubLight from '../../assets/github-light.svg';
import gitHubDark from '../../assets/github-dark.svg';
import CValt from '../../assets/CV_Okan_Gucukoalt.pdf';
import {UseTheme} from '../../common/ThemeContext';
 {/* import CV from '../../assets/CV_OKANGUCUKO.pdf'; */}
function Perso() {
        const {theme,toggleTheme} = UseTheme();
        const themeIcon = theme === 'light' ? sun : moon;
        const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
        const gitHubIcon = theme === 'light' ? gitHubLight : gitHubDark;
  return (
    <section id="perso" className={style.container}>
        <div className={style.colorModeContainer}>
            <img 
            className={style.Perso}
             src={OkanImg} 
             alt="image de profil de okan"
             />
            <img 
            className={style.colorMode} 
            src={themeIcon} 
            alt="couleur de thème" 
            onClick={toggleTheme}
            />
            <div className={style.info}>
                <h1>Okan
                    <br/>
                    Gucuko</h1>
                    <h2>Développeur d'applications</h2>
                    <span>
                        <a href="https://www.linkedin.com/in/okan-gucuko/" target="_blank">
                        <img src={linkedinIcon} alt="linkedin"/>
                        </a>
                        <a href="https://github.com/okanGuc" target="_blank">
                        <img src={gitHubIcon} alt="Github"/>
                        </a>
                    </span>
                    <p className={'style.description'}>
                        Je suis développeur d'applications web et mobiles, 
                        spécialisé dans la création de solutions performantes et intuitives, 
                        adaptées aux besoins des entreprises.</p>
                        <a href={CValt} download>
                            <button className="hover">
                                Télécharger CV
                            </button>
                        </a>
                        {/*
                        <a href={CV} download>
                            <button className="hover">
                               test
                            </button>
                        </a>
                        */}
                </div>
            </div>
    </section>
  )
}
export default Perso;