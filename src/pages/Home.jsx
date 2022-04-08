import React from 'react';
import {useState, useEffect} from 'react';
import { Create } from './Create';

import { useNavigate } from "react-router-dom";
//impotanodo o componente
//import Button from "../Component/button/Button"
export const Entrar=()=>{
 //directionar para outra pagina
const history=useNavigate()
  function criarPost(create){
    //iniciando cos e serviços
    create.cost=0;
    create.services=[];
  
  // useEffect(()=>{

    fetch('http://localhost:5000/',  {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body:JSON.stringify(create),
    })
 // })
    .then((resp=> resp.json())
    .then((data)=>{
        console.log(data)
        //redirecionando
        history.push('/step5', 
        {message: `Projeto criado com sucesso`})
      })
      ).catch(err=> console.log(err))
  }

  return (
    <>
     <h1>Bem - vindo</h1>
    
      <span>Clicando aqui voce pode ir criar um destino</span>
     
      <Create btxText="Criando um projeto"/>

  {/*
  
   <Button 
      to="/step2" 
      handleSubmit={criarPost}
      text="Criar projeto">
      </Button>
    
      */}
    </>
  )
}

