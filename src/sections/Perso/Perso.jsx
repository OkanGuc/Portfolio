import style from './PersoStyles.module.css';
import OkanImg from '../../assets/okanimage.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import gitHubLight from '../../assets/github-light.svg';
import gitHubDark from '../../assets/github-dark.svg';
import {UseTheme} from '../../common/ThemeContext';
function Perso() {
        const {theme} = UseTheme();
        const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
        const gitHubIcon = theme === 'light' ? gitHubLight : gitHubDark;
  return (
    <section id="perso" className={`wrapper ${style.container}`}>
        <div className={style.avatar}>
            <img
             src={OkanImg}
             alt="Portrait illustré d’Okan Gucuko"
             />
        </div>
        <div className={style.info}>
            <p className="eyebrow">Bonjour, je suis</p>
            <h1 className={style.name}>Okan Gucuko</h1>
            <h2 className={style.role}>Développeur <span>Full-Stack</span></h2>
            <p className={style.description}>
                Je suis développeur d’applications web et mobiles,
                spécialisé dans la création de solutions performantes et intuitives,
                adaptées aux besoins des entreprises.</p>
            <div className={style.actions}>
                <a
                  className="btn btnPrimary"
                  href={`${import.meta.env.BASE_URL}CV_OKANGUCUKO.pdf`}
                  download="CV_OKANGUCUKO.pdf"
                >
                    Télécharger CV
                </a>
                <a className="btn btnSecondary" href="#contact">
                    Me contacter
                </a>
            </div>
            <div className={style.socials}>
                <a href="https://www.linkedin.com/in/okan-gucuko/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt=""/>
                </a>
                <a href="https://github.com/okanGuc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <img src={gitHubIcon} alt=""/>
                </a>
            </div>
        </div>
    </section>
  )
}
export default Perso;
