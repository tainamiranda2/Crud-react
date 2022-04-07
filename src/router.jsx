import React from 'react';
//import {Container} from './Layout/Container'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
//pagina de home
import {Entrar} from './pages/Home';

import {Edit} from './pages/Edit';
//pagina de criacao
import {Create} from './pages/Create';

import {Delete} from './pages/Delete';

export const Router=()=>{
  return(
  
    <BrowserRouter>
      
    <Routes>
      
      <Route path="/" element={<Entrar/>}/>
      
      <Route path="/step2" element={<Create/>}/>
      
      <Route path="/step3" element={<Edit/>}/>

      <Route path="/step4" element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
     
  )
}