import React, { useState } from 'react';
import foto from "../../img/foto.jpeg";
import "./Hero.css";
import corvo from "../../img/corvo.png";
const Hero=()=>{
    return(
        <div className='d-flex flex-row justify-content-around align-items-center vh100' id='home'>
            <div className="d-flex flex-column col-md-6 col-sm-12">
                <h2 className='mb-0 fw-600'>Olá, sou o Gabriel e sou</h2>
                <h2><span className='span-dev mt-0'>Desenvolvedor de Software</span></h2>
                <p className='color-gray mb-0'>Trabalhei na <span className='color-text'>Vigilância Sanitária de Presidente Prudente</span></p>
                <p className='color-gray'>Formado em <span className='color-text'>Análise e Desenvolvimento de Sistemas</span></p>
                <br />
                <div className='d-flex flex-row align-items-center gap-16  mb-0 '>
                    <div className="icone-disponivel mb-3"></div>
                    <p>Disponível para novas oportunidades</p>
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