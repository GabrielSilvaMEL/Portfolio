import React from "react";
import "./Projects.css";

type Project = {
  title: string;
  thumb: string;
  languages: string[];
  description: string;
  projectLink: string;
};

const projects: Project[] = [
  {
    title: "Astroshows",
    thumb: "/projetos/astroshowsthumb.jpg",
    languages: ["PHP", "Laravel", "Blade", "Vite", "BD"],
    description:
      "Plataforma de venda de ingressos. Painel administrativo e funcional. Login de administrador e usuários, cada um com acessos diferentes.",
    projectLink:
      "https://www.linkedin.com/posts/gabriel331_javascript-css-php-activity-7017916449834868736-AaZ_?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "KalderBlog",
    thumb: "/projetos/kalderblogthumb.jpg",
    languages: ["PHP", "Laravel", "Blade", "Vite", "BD"],
    description: "Blog sobre a indústria musical. Painel administrativo e funcional.",
    projectLink:
      "https://www.linkedin.com/posts/gabriel331_vite-laravel-frontend-activity-7111082136538918912-5w3U?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Darkwood",
    thumb: "/projetos/darkwood3.png",
    languages: ["HTML", "CSS", "JavaScript"],
    description: "View demonstrativa de um famoso jogo de terror.",
    projectLink: "https://darkwood.vercel.app",
  },
];

const Projects = () => {
  return (
    <div className="container mt-5" id="projects">
      <h3 className="title text-center mb-0 zain-bold ">Meus Projetos</h3>
      <h4 className="title text-center color-gray zain-bold mb-4 ">No que trabalhei recentemente</h4>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card project-card">
              <img
                src={project.thumb}
                alt={project.title}
                className="card-img-top project-thumb-img"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">{project.title}</h5>
                <p className="card-text mb-0">{project.description}</p>
                <div className="project-languages">
                  {project.languages.map((lang, index) => (
                    <span key={index} className="badge me-2">
                      {lang}
                    </span>
                  ))}
                </div>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao-principal"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
