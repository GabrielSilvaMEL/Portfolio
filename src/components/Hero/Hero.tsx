import React, { useState } from 'react';
import foto from "../../img/foto.jpeg";
import "./Hero.css";
import corvo from "../../img/corvo.png";
const Hero=()=>{
    return(
        <div className='d-flex flex-row justify-content-around align-items-center vh100 container p-3' id='home'>
            <div className="d-flex flex-column col-md-8 col-sm-12 orientacao">
                <h2><span className='span-dev zain-bold  mt-0'>Gabriel Silva</span></h2>
                <h4 className='poppins-500 mt-0 mb-0 color-gray'>Desenvolvedor Full-Stack</h4>
                <p className='color-gray fw-500 mb-2'>Formado em <span className='color-text fw-700 mb-2'>Análise e Desenvolvimento de Sistemas</span></p>
                
                <br />
                
                <div className='d-flex flex-row align-items-center gap-16  mb-0 '>
                    <a href='#about' className='botao-branco fw-500'>Entrar em contato <i className="fas fa-long-arrow-alt-right"></i></a>
                    <a href='#projects' className='botao-principal fw-500'>Ver meu trabalho <i className="fas fa-long-arrow-alt-right"></i></a>
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