import React, { useState } from 'react';
import "./Navbar.css";
const Navbar = () =>{
    return(
    <div className="d-flex  align-items-center text-center justify-content-around mt-4">
        <a className="poppins-500 color-gray gabriel">Gabriel</a>
        <div className="row gap-0 poppins-400 navbar">
          <a className="col-auto" href="#about">Sobre</a>
          <a className="col-auto" href="#projects">Projetos</a>
          <a className="col-auto" href="#exp">Experiência</a>
        </div>
      </div>

    )
}
export default Navbar;