import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className="wrapper">
        <div className="sectionHeader">
            <p className="eyebrow">Compétences</p>
            <h2 className="sectionTitle">Skills</h2>
        </div>
        <div className={styles.grid}>
            <SkillList title="Web" skills={['HTML', 'CSS', 'PHP', 'Laravel', 'JavaScript', 'React']} />
            <SkillList title="Mobile & langages" skills={['React Native', 'Android', 'Java', 'Python', 'SQL']} />
            <SkillList title="IA & automatisation" skills={['API LLM', 'Prompt engineering', 'n8n', 'Claude Code']} />
            <SkillList title="Outils" skills={['Redux', 'Git', 'Bootstrap']} />
        </div>
    </section>
  );
}

export default Skills;
