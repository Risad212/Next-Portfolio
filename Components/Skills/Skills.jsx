import React from 'react';
import skills from './skills.module.css';

const Skills = ({done}) => {
    return (
        <div>
           <div className="skillsContainer">
               <h3>Html</h3>
               <div className={skills.progress}>
                 <div className={skills.progressDone}>
                    {done}$
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Skills;