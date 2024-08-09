import React, { useState } from 'react';
import "./Projects.css";
import astroshows from "../../img/projetos/astroshows.png";

type Project = {
    title: string;
    thumb: string;
    images: string[];
    languages: string[];
    description: string;
    projectLink: string;
};

const projects: Project[] = [
    {
        title: 'Astroshows',
        thumb: '/projetos/astroshowsthumb.jpg', // Adicione a URL da miniatura
        images: [
            "/projetos/astroshows1.png", // Adicione URLs das imagens do projeto
            "/projetos/astroshows2.png", // Adicione URLs das imagens do projeto
            "/projetos/astroshows3.png" // Adicione URLs das imagens do projeto
            
        ],
        languages: ['PHP', 'Laravel', 'Blade','Vite','BD'],
        description: 'Plataforma de venda de ingressos',
        projectLink: 'https://www.linkedin.com/posts/gabrielsilvalves331_javascript-css-php-activity-7017916449834868736-elb4?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'KalderBlog',
        thumb: '/projetos/kalderblogthumb.jpg',
        images: [
            '/projetos/kalderblog1.png',
            '/projetos/kalderblog2.png',
            '/projetos/kalderblog4.png',
            '/projetos/kalderblog5.png',
        ],
        languages: ['PHP', 'Laravel', 'Blade','Vite','BD'],
        description: 'Blog sobre a indústria musical',
        projectLink: 'https://www.linkedin.com/posts/gabrielsilvalves331_vite-laravel-frontend-activity-7111082136538918912-oiDO?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Darkwood',
        thumb: '/projetos/darkwood1.png',
        images: [
            '/projetos/darkwood1.png',
            '/projetos/darkwood2.png'
        ],
        languages: ['HTML', 'CSS', 'JavaScript'],
        description: 'View do meu jogo favorito',
        projectLink: 'https://darkwood.vercel.app'
    },
    // Adicione mais projetos conforme necessário
];

const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const currentProject = projects[currentProjectIndex];
    const currentImage = currentProject.images[currentImageIndex];

    const handleProjectChange = (index: number) => {
        setCurrentProjectIndex(index);
        setCurrentImageIndex(0); // Resetar a imagem para a primeira do novo projeto
    };

    const handleImageChange = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="container mt-4" id='projects'>
            <h3 className='title fw-800 mb-3 text-center'>PROJETOS</h3>
            <div className="row">
                <div className="col-md-3">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className={`project-thumb ${index === currentProjectIndex ? 'selected' : ''}`}
                            onClick={() => handleProjectChange(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={project.thumb} className="img-fluid" alt={project.title} />
                            <div className="project-title-overlay">
                                <h5>{project.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-9">
                    <div className="project-image-container position-relative">
                        <img src={currentImage} className="img-fluid" alt={currentProject.title} />
                        <div className="project-languages-overlay">
                            {currentProject.languages.map((lang, index) => (
                                <span key={index} className="badge me-2">{lang}</span>
                            ))}
                             <p className="project-description mb-0">{currentProject.description}</p>
                             <div className="project-link">
                            <a href={currentProject.projectLink} className="btn btn-projeto fw-700" target="_blank" rel="noopener noreferrer">
                                Ver Projeto <i className="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                        </div>
                        
                    </div>
                    <div className="mt-3 d-flex flex-wrap">
                        {currentProject.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className={`img-thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
                                alt={`Imagem ${index + 1}`}
                                onClick={() => handleImageChange(index)}
                                style={{ cursor: 'pointer' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
