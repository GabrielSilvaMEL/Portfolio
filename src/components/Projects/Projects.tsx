import React, { useState } from 'react';
import "./Projects.css";
import fluig from "../../img/fluig_logo.png";
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
        thumb: '/projetos/astroshowsthumb.jpg',
        images: [
            "/projetos/astroshows1.png",
            "/projetos/astroshows2.png",
            "/projetos/astroshows3.png"
        ],
        languages: ['PHP', 'Laravel', 'Blade', 'Vite', 'BD'],
        description: 'Plataforma de venda de ingressos. Painel administrativo e funcional. Login de administrador e usuários, cada um com acessos diferentes.',
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
        languages: ['PHP', 'Laravel', 'Blade', 'Vite', 'BD'],
        description: 'Blog sobre a indústria musical. Painel administrativo e funcional.',
        projectLink: 'https://www.linkedin.com/posts/gabrielsilvalves331_vite-laravel-frontend-activity-7111082136538918912-oiDO?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Darkwood',
        thumb: '/projetos/darkwood3.png',
        images: [
            '/projetos/darkwood1.png',
            '/projetos/darkwood2.png'
        ],
        languages: ['HTML', 'CSS', 'JavaScript'],
        description: 'View demonstrativa de um jogo de terror.',
        projectLink: 'https://darkwood.vercel.app'
    },
];

const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const currentProject = currentProjectIndex !== null ? projects[currentProjectIndex] : null;

    const handleProjectChange = (index: number) => {
        setCurrentProjectIndex(index);
        setCurrentImageIndex(0); // Reseta para a primeira imagem do novo projeto
    };

    const handleNextImage = () => {
        if (currentProject) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const handlePreviousImage = () => {
        if (currentProject) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className="container mt-4 mb-5" id="projects">
            <h3 className="title fw-800 mb-3 text-center">Clique em um projeto</h3>

            {/* Miniaturas dos projetos */}
            <div className="project-thumbnails">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-thumb ${index === currentProjectIndex ? 'selected' : ''}`}
                        onClick={() => handleProjectChange(index)}
                    >
                        <img src={project.thumb} alt={project.title} />
                        <div className="project-title-overlay">
                            <h5>{project.title}</h5>
                        </div>
                    </div>
                ))}
            </div>

            {/* Se um projeto foi selecionado, mostra os detalhes e a imagem grande */}
            {currentProject && (
                <div className="project-main-content mt-3 d-flex">
                    <div className="project-image-container position-relative me-3">
                        <button onClick={handlePreviousImage} className="navigation-arrow left-arrow">{"<"}</button>
                        <img
                            src={currentProject.images[currentImageIndex]}
                            alt={currentProject.title}
                            className="main-image"
                        />
                        <button onClick={handleNextImage} className="navigation-arrow right-arrow">{">"}</button>
                    </div>

                    <div className="project-info">
                        <h4 className='fw-600'>{currentProject.title}</h4>
                        <div className="project-languages-overlay">
                            {currentProject.languages.map((lang, index) => (
                                <span key={index} className="badge me-2">{lang}</span>
                            ))}
                        </div>
                        <p className="project-description fw-500">{currentProject.description}</p>
                        <div className="project-link mt-3">
                            <a href={currentProject.projectLink} className="btn btn-projeto fw-700" target="_blank" rel="noopener noreferrer">
                                Ver Projeto <i className="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
