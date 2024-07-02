import React, { useState } from 'react';
import "./Navbar.css";
const Navbar = () =>{
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        <div className="d-flex position-sticky align-items-center text-center justify-content-around mt-4">
            <span className=''>Gabriel</span>
            <div className="row gap-0 ">
                <a className="col-auto" href="#projects">Projetos</a>
                <a className="col-auto" href="#certificados">Certificados</a>
                <a className="col-auto" href="#exp">Experiences</a>
                
                <div className='d-flex flex-row col-auto gap-16 align-items-center text-center justify-content-center contato-div'>
                <a href="https://www.linkedin.com/in/gabrielsilvalves331/" title="LinkedIn"
                    className="fab fa-linkedin-in" target="_blank"></a>
                <a href="https://github.com/gabrielsilvamel" title="Github" className="fab fa-github"
                    target="_blank"></a>
                <a href="mailto: gabrielsilvaalves3000@outlook.com" title="Enviar Email" className="far fa-envelope"
                    target="_blank"></a>
                </div>
                <a className="col-auto " onClick={toggleTheme}><i className={isDarkMode ? 'far fa-sun' : 'far fa-moon'}></i>{isDarkMode ? 'Light' : 'Dark'} Mode</a>
                <a href="/curriculo.pdf"  // Download Curriculo
                download="Curriculo.pdf"  
                className="hire-me col-auto"
                title="Baixar Currículo">
                <i className='fas fa-download'></i> Currículo
            </a>
            </div>
        </div>
    )
}
export default Navbar;