import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillsList from '../../common/SkillList'
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1>Skills</h1>
        <div className="styles.skillList">
            <SkillsList src={checkMarkIcon} skill="HTML" />
            <SkillsList src={checkMarkIcon} skill="CSS" />
            <SkillsList src={checkMarkIcon} skill="PHP" />
            <SkillsList src={checkMarkIcon} skill="Laravel" />
            <SkillsList src={checkMarkIcon} skill="JavaScript"/>
            <SkillsList src={checkMarkIcon} skill="React" />
        </div>
        <hr/>
        <div className="styles.skillList">
            <SkillsList src={checkMarkIcon} skill="React-native" />
            <SkillsList src={checkMarkIcon} skill="Android" />
            <SkillsList src={checkMarkIcon} skill="JAVA" />
            <SkillsList src={checkMarkIcon} skill="Python" />
            <SkillsList src={checkMarkIcon} skill="SQL"/>
            
        </div>
    </section>
  );
}

export default Skills;