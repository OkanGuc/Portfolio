import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillsList from '../../common/SkillList'
import {UseTheme} from '../../common/ThemeContext';
function Skills() {
  const { theme } = UseTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="HTML" />
            <SkillsList src={checkMarkIcon} skill="CSS" />
            <SkillsList src={checkMarkIcon} skill="PHP" />
            <SkillsList src={checkMarkIcon} skill="Laravel" />
            <SkillsList src={checkMarkIcon} skill="JavaScript"/>
            <SkillsList src={checkMarkIcon} skill="React" />
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="React-native" />
            <SkillsList src={checkMarkIcon} skill="Android" />
            <SkillsList src={checkMarkIcon} skill="JAVA" />
            <SkillsList src={checkMarkIcon} skill="Python" />
            <SkillsList src={checkMarkIcon} skill="SQL"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="Redux" />
            <SkillsList src={checkMarkIcon} skill="Git" />
            <SkillsList src={checkMarkIcon} skill="Bootstrap" />
        </div>
    </section>
  );
}

export default Skills;