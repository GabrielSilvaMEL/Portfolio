import React, { useState } from 'react';
import "./Exp.css";

type ExpProps = {
    experiences: {
        title: string;
        description: string;
        responsibilities: string[];
    }[];
};
const Exp: React.FC<ExpProps> = ({ experiences }) => {
    return (
        <div className='container mb-5'>
                <h2 className='zain-bold mb-0 mt-3 text-center' id='exp'>Experiências</h2>
                <h4 className="zain-bold color-gray mb-3 text-center">Onde já trabalhei</h4>            
                <div className='row'>
                {experiences.map((exp, index) => (
                    <div className='col-md-6 mb-4' key={index}>
                        <div className='card h-100'>
                            <div className='card-body'>
                                <h5 className='fw-800 mb-0'>{exp.title}</h5>
                                <p className='mb-2 fw-600'>{exp.description}</p>
                                <ul>
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Exp;