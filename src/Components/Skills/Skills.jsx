import React from 'react';
import './Skills.css';
const skillsSet = [
    { id: 1, subject: "HTML" },
    { id: 2, subject: "CSS" },
    { id: 3, subject: "JAVASCRIPT" },
    { id: 4, subject: "REACTJS" },
    { id: 5, subject: "SQL" },
    { id: 6, subject: "PYTHON" },
    { id: 7, subject: "DJANGO" },
    { id: 8, subject: "REST API'S" },
];

function Skills() {
    return (
        <div className='skillsPage'>
            <div className='skillsGrid'>
                {skillsSet.map((skill) => (
                    <div key={skill.id} className='skillBox'>
                        {skill.subject}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;


