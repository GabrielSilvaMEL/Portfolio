import React, { useState } from 'react';
import "./Navbar.css";
const Navbar = () =>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);

      // Alternar entre as classes no elemento root (document.documentElement)
      if (isDarkMode) {
          document.documentElement.classList.remove('dark-theme');
      } else {
          document.documentElement.classList.add('dark-theme');
      }
  };
    return(
    <div className="d-flex  align-items-center text-center justify-content-around mt-4">
        <p className="poppins-400">Gabriel</p>
        <div className="row gap-0 poppins-400">
        <a className="col-auto" href="#projects">Projetos</a>
        <a className="col-auto" href="#certificados">Certificados</a>
        <a className="col-auto" href="#exp">Experiências</a>

      

        {/* <a className="col-auto" onClick={toggleTheme}>
          <i className={isDarkMode ? 'far fa-sun' : 'far fa-moon'}></i>
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </a> */}
        

        {/* Dropdown de Currículo */}
        <div className="dropdown col-auto poppins-400">
          <a className="hire-me dropdown-toggle poppins-400" onClick={toggleDropdown} title="Baixar Currículo">
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
export default Navbar;