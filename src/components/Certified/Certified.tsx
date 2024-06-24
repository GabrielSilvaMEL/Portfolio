import React, { useState } from 'react';
import "./Certified.css";
type CertifiedProps = {
    certifications: {
        title: string;
        items: { text: string; link: string }[];
    }[];
};

const Certified: React.FC<CertifiedProps> = ({ certifications }) => {
    return (
        <div className='container mb-5'>
        <h3 className='title fw-800 mb-3 text-center'>CERTIFICADOS</h3>
        <div className='row'>
            {certifications.map((cert, index) => (
                <div className='col-md-6 mb-4' key={index}>
                    <div className='card h-100'>
                        <div className='card-body'>
                            <h5 className='fw-800 mb-0'>{cert.title}</h5>
                            <ul>
                                {cert.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.text}
                                        </a>
                                    </li>
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
export default Certified;