import React, { useState } from 'react';
import skills from './skills.module.css';

const Skills = ({ skillData }) => {
    const [skill, setSkill] = useState()
    const { title, parent } = skillData
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${parent}%`
        }
        setSkill(newStyle);
    }, 200)
    return (
        <div>
            <div className={skills.skillsContainer}>
                <div className="d-flex justify-content-between">
                    <h3>{title}</h3>
                    <h3>{parent}%</h3>
                </div>
                <div className={skills.progress}>
                    <div className={skills.progressDone} style={skill}></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;