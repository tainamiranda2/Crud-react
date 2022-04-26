import React from 'react';
import Container from './Layout/Navegar/Container';

//import Container from './Layout/Container'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
//pagina de home
import {Entrar} from './pages/Home';

import {Edit} from './pages/Edit';
//pagina de criacao
import {Create} from './pages/Create';

import {Projeto} from './pages/Projetos';

export const Router=()=>{
  return(
  
    <BrowserRouter>
      <Container/>
    <Routes>
    
      <Route path="/" element={<Entrar/>}/>


      <Route path="/step2" element={<Create/>}/>
      
      <Route path="/step3/:id" element={<Edit/>}/>

      <Route path="/step5" element={<Projeto/>}/>

      </Routes>
    </BrowserRouter>
     
  )
}