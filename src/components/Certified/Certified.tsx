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
        <div className='row g-4'>
            {/* Certificado TOTVS Fluig */}
            <div className='col-md-6'>
                <div className='d-flex flex-column align-items-center back-certificate p-3 h-100'>
                    <div className='text-center'>
                        <img src={fluig} alt="Fluig Logo" className='img-fluid' style={{ maxWidth: '150px' }} />
                    </div>
                    <div className='mt-3 text-center'>
                        <h5 className='fw-800 mb-2'>Certificados TOTVS Fluig</h5>
                        <ul className='list-unstyled'>
                            {certifications
                                .find((cert: Certification) => cert.title === 'TOTVS FLUIG')?.items.map((item, index: number) => (
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

            {/* Certificado de Idioma */}
            <div className='col-md-6'>
                <div className='d-flex flex-column align-items-center back-certificate p-3 h-100'>
                    <div className='text-center'>
                        <img src="Flag_USA.png" alt="TOEIC Logo" className='img-fluid' style={{ maxWidth: '150px' }} />
                    </div>
                    <div className='mt-3 text-center'>
                        <h5 className='fw-800 mb-2'>Certificado de Idioma</h5>
                        <ul className='list-unstyled'>
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
