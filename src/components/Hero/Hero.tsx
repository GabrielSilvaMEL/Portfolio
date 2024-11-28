import React, { useState } from 'react';
import foto from "../../img/foto.jpeg";
import "./Hero.css";
import corvo from "../../img/corvo.png";
const Hero=()=>{
    return(
        <div className='d-flex flex-row justify-content-around align-items-center vh80 container' id='home'>
            <div className="d-flex flex-column col-md-8 col-sm-12">
                {/* <div className="d-flex flex-row col-auto gap-16 align-items-center text-center justify-content-left contato-div">
                    <p className='mb-0'>Entre em contato!</p>
                    <a href="https://www.linkedin.com/in/gabrielsilvalves331/" title="LinkedIn"
                        className="fab fa-linkedin-in" target="_blank"></a>
                    <a href="https://github.com/gabrielsilvamel" title="Github" className="fab fa-github"
                        target="_blank"></a>
                    
                </div> */}
                <h2><span className='span-dev zain-bold  mt-0'>Gabriel Silva</span></h2>
                <h4 className='poppins-500 mt-0 mb-0 color-gray'>Desenvolvedor Full-Stack</h4>
                <p className='color-gray fw-500 mb-2'>Formado em <span className='color-text fw-700 mb-2'>Análise e Desenvolvimento de Sistemas</span></p>
                
                <br />
                
                <div className='d-flex flex-row align-items-center gap-16  mb-0 '>
                    <a className='botao-branco fw-500'>Entrar em contato <i className="fas fa-long-arrow-alt-right"></i></a>
                    <a className='botao-principal fw-500'>Ver meu trabalho <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
            <div className='corvo-container'>
                <div className="corvo-image">
                    <img src={foto} alt="Foto-pessoal" className='foto'/>
                </div>
            </div>
        </div>
    )
}
export default Hero;