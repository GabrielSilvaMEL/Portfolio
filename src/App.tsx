import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Exp from './components/Exp/Exp';
import Certified from './components/Certified/Certified';
import Projects from './components/Projects/Projects';
const certifications = [
  {
      title: 'TOEIC - Listening and Reading Test',
      items: [
          { text: 'Listening and Reading Test - 860/990 points', link: 'https://www.linkedin.com/posts/gabrielsilvalves331_gostaria-de-compartilhar-minha-pontua%C3%A7%C3%A3o-activity-7099858525459230720-9U1H?utm_source=share&utm_medium=member_desktop' }
      ]
  },
  {
      title: 'TOTVS FLUIG',
      items: [
          { text: 'Fluig Express', link: 'https://www.linkedin.com/posts/gabrielsilvalves331_eu-recebi-um-novo-certificado-fluig-express-activity-7117273800534061056-DpGa?utm_source=share&utm_medium=member_desktop' },
          { text: 'WCM - Gestão de portais', link: 'https://www.linkedin.com/posts/gabrielsilvalves331_eu-recebi-um-novo-certificado-wcm-gest%C3%A3o-activity-7117274801831866368-EwUB?utm_source=share&utm_medium=member_desktop' },
          { text: 'BPM/ECM Intermediate', link: 'https://www.linkedin.com/posts/gabrielsilvalves331_eu-recebi-um-novo-certificado-fluig-bpm-activity-7117273526251761664--DKA?utm_source=share&utm_medium=member_desktop' },
          { text: 'Desenvolvimento de processos BPM/ECM Advanced', link: 'https://www.linkedin.com/posts/gabrielsilvalves331_eu-recebi-um-novo-certificado-fluig-desenvolvimento-activity-7117274448159739904-QdHJ?utm_source=share&utm_medium=member_desktop' },
          { text: 'Desenvolvimento de Portais com WCM', link: 'https://www.linkedin.com/posts/gabrielsilvalves331_eu-recebi-um-novo-certificado-fluig-desenvolvimento-activity-7117274000367468544-ih4W?utm_source=share&utm_medium=member_desktop' },
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
      'Responsável por todo o desenvolvimento de novas tecnologias e atualização de funcionalidades antigas.']
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
      <Projects/>
      <Certified certifications={certifications} />
      <Exp experiences={experiences}/>

    </div>
    
  </div>
  );
}

export default App;
