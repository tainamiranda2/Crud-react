import React from 'react';
import Button from '../Component/button/Button';
import Card from '../Component/card/Card';
import { useState, useEffect } from 'react';

//import Message from '../Layout/message/Message';

export const Projeto=()=>{

const [projetos,setProjetos]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/create',{
 //exibindo
 method: 'GET',
 headers: {
     'Content-Type':'application/json',
 },
    })
    .then((resp)=>resp.json())
    .then((data)=>{
        setProjetos(data)
    })
.catch((err)=> console.log(err))
}, [])

    return (
        <>
        <h1>Meus projetos</h1>
    
        <Button to="/step5" text="Criar"/>

        {projetos.length> 0 && 
        projetos.map((projeto)=>
         <Card 
         id={projeto.id}
         name={projeto.name} 
        dinheiro={projeto.dinheiro}
        key={projeto.id}
         />

        )}
        </>
    )
}