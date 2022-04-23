import React from 'react';
import { Create } from './Create';
import { useNavigate } from "react-router-dom";
import * as C from './style';

//impotanodo o componente
//import Button from "../Component/button/Button";

export const Entrar=()=>{
 //directionar para outra pagina
const history=useNavigate();

  function creatPost(create){
    //iniciando cos e serviços
   
  // useEffect(()=>{
    fetch('http://localhost:5000/create',  {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body:JSON.stringify(create),
    })
 // })
    .then((resp)=> resp.json())
    .then((data)=>{
        console.log(data)
        //redirecionando
        history.push('/step5',
        {message: `Projeto criado com sucesso`})
      })
      .catch(err=> console.log(err))
  }

  return (
    <>
 
   <C.Container>
     <h1>Bem - vindo</h1>
    
      </C.Container>

      <Create 
      handleSubmit={creatPost}
      btxText="Criando um projeto"/>
      
</>
    
  )
}

