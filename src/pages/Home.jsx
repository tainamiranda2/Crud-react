import React from 'react';
import {useSate} from 'react';
import {Create} from './Create';
import { useNavigate } from "react-router-dom";
//impotanodo o componente
import Button from "../Component/button/Button"

export const Entrar=()=>{
 
  return (
    <>
     <h1>Bem - vindo</h1>
    
      <span>Clicando aqui voce pode ir criar um dstino</span>
      
      <Button 
      to="/step2" 
      text="Criar projeto"
        />
    </>
  )
}

