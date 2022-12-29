import React from 'react';
import Skills from '../Skills/Skills';
import progressBar from './progress.module.css';

const Progress = () => {
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
                          <div className="col-4">
                             <Skills done="70"/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Progress;