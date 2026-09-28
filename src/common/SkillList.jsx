import React from 'react'
import styles from './SkillList.module.css'

function SkillList({title, skills}) {
  return (
    <div className={styles.group}>
        <h3>{title}</h3>
        <ul>
            {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    </div>
  )
}

export default SkillList
