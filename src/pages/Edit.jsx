import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import { Projeto } from './Projetos';
import * as C from './style';

export const Edit=()=> {
  //resgatndo projetos
  const {id} = useParams()
const [edit, setEdit]=useState([])
const [showForm, setShowForm]=useState(false)
useEffect(()=>{

fetch(`http://localhost:5000/create/${id}`,{
method: 'GET',
headers: {
  'Content-Type':'application/json',
},
})
.then((resp)=>resp.json())
.then((data)=>{
  setEdit(data)
})
.catch((err)=> console.log)

}, [id])
//
function toggleForm(){
  setShowForm(!showForm)
}
  return (
    <C.Container>
  <fieldset>
    <h2>Projeto:{edit.name}</h2>
  
{!showForm? (
  <>
  <p>Formulario do projeto</p>
  
<span>Total de orçamento: RS$ {edit.dinheiro}</span>

  </>

):(
  <>
  <p>Detalhes do projeto</p>
  </>
)}
</fieldset>
<button onClick={toggleForm}>{!showForm? 'Editar': 'Fechar'}</button>
      </C.Container>
  )
}
