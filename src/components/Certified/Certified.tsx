import React from 'react';
import fluig from "../../img/fluig_logo.png";
import "./Certified.css";
interface Certification {
    title: string;
    items: { text: string; link: string }[];
}

interface CertifiedProps {
    certifications: Certification[];
}

const Certified: React.FC<CertifiedProps> = ({ certifications }) => (
    <div className='container mb-5' id='certificados'>
        <div className='row align-items-center mb-4'>
            <div className='col-md-6 text-center'>
                <img src={fluig} alt="Fluig Logo" className='img-fluid' style={{ maxWidth: '150px' }} />
            </div>
            <div className='col-md-6'>
                <div className='card h-100'>
                    <div className='card-body'>
                        <h5 className='fw-800 mb-0'>Certificados TOTVS Fluig</h5>
                        <ul>
                            {certifications
                                .find((cert: Certification) => cert.title === 'TOTVS FLUIG')?.items.map((item, index: number) => (
                                    <li key={index}>
                                        <a className='fw-500' href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        
        <div className='row'>
            <div className='col-md-12'>
                <div className='card h-100'>
                    <div className='card-body'>
                        <h5 className='fw-800 mb-0'>Certificado de Idioma</h5>
                        <ul>
                            {certifications
                                .find((cert: Certification) => cert.title === 'TOEIC - Listening and Reading Test')?.items.map((item, index: number) => (
                                    <li key={index}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Certified;
