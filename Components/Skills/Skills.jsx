import React, { useState } from 'react';
import skills from './skills.module.css';

const Skills = ({skillData}) => {
    const [skill, setSkill] = useState()
    const {title,parent} = skillData
    setTimeout(() =>{
        const newStyle = {
			opacity: 1,
			width: `${parent}%`
		}
		setSkill(newStyle);
    },200)
    return (
        <div>
           <div className={skills.skillsContainer}>
               <h3>{title}</h3>
               <div className={skills.progress}>
                 <div className={skills.progressDone} style={skill}>
                    {parent}%
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Skills;