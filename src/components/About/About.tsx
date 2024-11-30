import React, { useState } from 'react';
import "./About.css";
const About=()=>{
    
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    return(
        <div className='back-first' id='about'>
            <div className="container d-flex flex-column justify-content-center align-items-center p-3">
                <h2 className='zain-bold mb-0 mt-3'>Sobre mim</h2>
                <h4 className="zain-bold color-gray mb-3">Coding & Helping</h4>
                <p className='zain-regular text-center sobre-mim'>Olá, sou o Gabriel, formado em ADS e com experiência em desenvolvimento full-stack na área da saúde, gosto de ajudar os outros a passar por problemas com maior facilidade, fazendo com que meu trabalho seja útil para os usuários.</p>
                <br />
                <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-16">
                    <div className="linguagem-badge">
                        <i className="fab fa-php"></i> PHP
                    </div>
                    <div className="linguagem-badge">
                        <i className="fab fa-laravel"></i> Laravel
                    </div>
                    <div className="linguagem-badge">
                        <i className="fas fa-code"></i> C#
                    </div>
                    <div className="linguagem-badge">
                        <i className="fas fa-code"></i> ASP.NET
                    </div>
                    <div className="linguagem-badge">
                        <i className="fas fa-code"></i> FLUIG
                    </div>
                    <div className="linguagem-badge">
                    <i className="fas fa-code-branch"></i> GIT
                    </div>
                    <div className="linguagem-badge">
                        <i className="fab fa-js-square"></i> JavaScript
                    </div>
                    <div className="linguagem-badge">
                        <i className="fas fa-database"></i> MySQLServer
                    </div>
                    <div className="linguagem-badge">
                        <i className="fas fa-database"></i> MySQLWorkbench
                    </div>
                    
                </div>
                <div className="dropdown d-flex flex-row justify-content-center align-content-center col-auto poppins-400 mt-5 gap-16">
                    <div className="flex-row d-flex gap-16 ">
                        <a href="https://www.linkedin.com/in/gabriel331/" target='_blank' className="fab fa-linkedin line-10"></a>
                        <a href="https://github.com/gabrielsilvamel" target='_blank' className="fab fa-github line-10"></a>
                    </div>
                    <a className="botao-principal dropdown-toggle poppins-400" onClick={toggleDropdown} title="Baixar Currículo">
                        <i className="fas fa-download"></i> Currículo
                    </a>
                    {isDropdownOpen && (
                        <div className="dropdown-menu show">
                        <a href="/curriculoGabriel.pdf" download="curriculoGabriel.pdf" className="dropdown-item">
                            <img src="/Flag_BR.png" alt="Portuguese Flag" className="flag-icon" /> Português
                        </a>
                        <a href="/resumeGabriel.pdf" download="resumeGabriel.pdf" className="dropdown-item">
                            <img src="Flag_USA.png" alt="English Flag" className="flag-icon" /> English
                        </a>
                        </div>
                    )}
                </div>
            </div>
           
        </div>
    )
}
export default About;