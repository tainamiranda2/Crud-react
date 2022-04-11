import React from 'react';
import {useState,useEffect} from 'react'
import {useNavigate} from  'react-router-dom'

import Input from "../Component/input/Input"

import Select from "../Component/select/Select"

import Submit from "../Component/button/Submit";
//import {Projeto} from './Projetos';

export const Create=({btxText,handleSubmit,createData})=>{
//criando os states
const [categories, setCategorias]= useState([])
const [create,setCriar]=useState(createData || {})
//só chamar quando precisar
  useEffect(()=>{
    fetch('http://localhost:5000/categories',{
      //metodo de get
      method: "GET",
      headers:{ 
  'Content-Type': 'application/json',
      },
    })
      .then((resp)=> resp.json())
      .then((data)=>{
        //passando daod para json
        setCategorias(data)
        console.log(setCategorias)
      })
      .catch((err)=> console.log(err));
  }, [])
//criando minha função para o metodo não da reload
const submit=(e)=>{
  e.preventDefault()
  //console.log(create)
  handleSubmit(create)
}
//mudando o state e pegando do input
function handleChange(e){
  setCriar({...create, [e.target.name]: e.target.value})
  //console.log("vendo aqui",criar)
}
//funçao para pegar do select
function handleCategory(e){
  setCriar({
    ...create, 
    category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
  },
 }) 
 //npx browserslist@latest --update-db
}
return(
  
<form onSubmit={submit}>
 <h1>Criar o projeto</h1>
  <p>Criar o projeto e depois adicionar quanto vai guar para realizar seu sonho</p>
  <Input 
    type="text"
    text="Nome do lugar"
    name="name"
    placeholder="Insira o nome do lugar"
    handleOnChange={handleChange}
    value={create.name ? create.name: ''}
    />
  
  <Input 
    type="number"
    text="Valor"
    name="dinheiro"
    placeholder="Insira o valor para guarda"
    handleOnChange={handleChange}
    value={create.dinheiro ? create.dinheiro: ''}
    />

<Select 
  name="category_id"
  text="Selecione a categoria"
  options={categories}
  handleOnChange={handleCategory}
  value={create.category ? create.category.id: ''}
  />

 <Submit 
   text={btxText}
   />
</form>

 
 ) 
  }

