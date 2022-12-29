import React from 'react';
import Skills from '../Skills/Skills';
import progressBar from './progress.module.css';

const Progress = () => {
    // skills information 
    const skillInfo = [
        {
          title: 'HTML',
          parent: '90',
        },
        {
            title: 'CSS',
            parent: '80',
        },
        {
            title: 'JavaScript',
            parent: '60'
        },
        {
            title: 'Bootstrap',
            parent: '75'
        },
        {
            title: 'React',
            parent: '78'
        },
        {
            title: 'WordPress',
            parent: '45'
        }
    ]
    return (
        <>
            <div className={progressBar.progressBar}>
                <div className="container">
                    <div className={progressBar.title}>
                        <span>SKILLS</span>
                        <h1>My Skills</h1>
                    </div>
                    <div className="skillContainer">
                        <div className="row">
                            {
                                skillInfo.map((elem) =>{
                                    return (
                                        <>
                                         <div className="col-4 mb-3">
                                            <Skills skillData={elem}/>
                                         </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Progress;