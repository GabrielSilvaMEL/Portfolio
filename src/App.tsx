import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Exp from './components/Exp/Exp';
import Certified from './components/Certified/Certified';
import Projects from './components/Projects/Projects';
const certifications = [
  {
      title: 'TOEIC - Listening and Reading Test',
      items: [
          { text: 'Listening and Reading Test - 860/990 points', link: 'https://www.linkedin.com/in/gabriel331/' }
      ]
  },
  {
      title: 'TOTVS FLUIG',
      items: [
          { text: 'Fluig Express', link: 'https://www.linkedin.com/in/gabriel331/' },
          { text: 'WCM - Gestão de portais', link: 'https://www.linkedin.com/in/gabriel331/' },
          { text: 'BPM/ECM Intermediate', link: 'https://www.linkedin.com/in/gabriel331/' },
          { text: 'Desenvolvimento de processos BPM/ECM Advanced', link: 'https://www.linkedin.com/in/gabriel331/' },
          { text: 'Desenvolvimento de Portais com WCM', link: 'https://www.linkedin.com/in/gabriel331/' },
      ]
  },
  
];
const experiences = [
  {
      title: 'ANALISTA DE TI',
      description: 'LABMED - CENTRO DE SAÚDE INTEGRADO | +4 meses',
      responsibilities: ['Gerenciei a rede interna, configurando e monitorando atividade',
        'Prestei suporte técnico aos usuários e manutenção preventiva', "Participei do planejamento estratégico de TI, oferecendo consultoria sobre a adoção de novas tecnologias, inovação e otimização de processos"]
  },
  {
      title: 'DESENVOLVEDOR',
      description: 'Secretaria Municipal de Presidente Prudente | +1 Ano',
      responsibilities: ['Desenvolvi e implementei soluções para o sistema utilizado por mais de 50 unidades de saúde pública na cidade de Presidente Prudente, Brasil',
      'Participei ativamente das atualizações do sistema, suporte técnico e treinamento de usuários',
      'Responsável pelo desenvolvimento de novas tecnologias e atualização de funcionalidades antigas.']
  },
  {
      title: 'PROFESSOR',
      description: 'Escola HAPPY | 3 meses',
      responsibilities: ['Ministrei aulas para um público jovem na escola de programação HAPPY','Ensinei lógica de programação, desenvolvimento de jogos e programação em blocos.']
  },
  {
      title: 'ARDUINO',
      description: 'Empresa Junior - Fatec',
      responsibilities: ['Forneci suporte técnico e resolvi problemas relacionados à programação e operação de dispositivos Arduino.',
        'Atualizei materiais de estudo utilizados pela empresa CREATOR4ALL e desenvolvi novas lições para suas aulas']
  },
  
];

const App=()=> {
  return (
  <div className='App'> 
    <Navbar/>
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Certified certifications={certifications} />
      <Exp experiences={experiences}/>

    </div>
    
  </div>
  );
}

export default App;
