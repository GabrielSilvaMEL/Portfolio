import React, { useState } from 'react';
import foto from "../../img/foto.jpeg";
import "./Hero.css";
import corvo from "../../img/corvo.png";
const Hero=()=>{
    return(
        <div className='d-flex flex-row justify-content-around align-items-center vh100' id='home'>
            <div className="d-flex flex-column col-md-8 col-sm-12">
                <h2><span className='span-dev mt-0 poppins-700'>GABRIEL SILVA ALVES</span></h2>
                <p className='poppins-500 mt-0 mb-0'>Desenvolvedor Full-Stack</p>
                <p className='color-gray fw-500 mb-2'>Formado em <span className='color-text fw-700 mb-2'>Análise e Desenvolvimento de Sistemas</span></p>
                <div className="d-flex flex-row col-auto gap-16 align-items-center text-center justify-content-left contato-div mb-2">
                    <a href="https://www.linkedin.com/in/gabrielsilvalves331/" title="LinkedIn"
                        className="fab fa-linkedin-in" target="_blank"></a>
                    <a href="https://github.com/gabrielsilvamel" title="Github" className="fab fa-github"
                        target="_blank"></a>
                    
                </div>
                <br />
                <div className='d-flex flex-row align-items-center gap-16  mb-0 '>
                    <div className="icone-disponivel mb-3"></div>
                    <p className='fw-500'>Disponível para oportunidades.</p>
                </div>
            </div>
            <div className='corvo-container'>
                <div className="corvo-image">
                    <img src={corvo} alt="Corvo" className='corvo'/>
                </div>
            </div>
        </div>
    )
}
export default Hero;