import React from 'react';
import {useState,useEffect} from 'react'
import {useNavigate} from  'react-router-dom'

import Input from "../Component/input/Input"

import Select from "../Component/select/Select"

import Submit from "../Component/button/Submit";
//{text}
export const Create=({text})=>{
//criando os states
  
return(
  
<form>
 <h1>Criar o projeto</h1>
  <p>Criar o projeto e depois adicionar quanto vai guar para realizar seu sonho</p>
  <Input 
    type="text"
    text="Nome do lugar"
    name="name"
    placeholder="Insira o nome do lugar"
    />
  
  <Input 
    type="number"
    text="Valor"
    name="dinheiro"
    placeholder="Insira o valor para guarda"
    />
<Select 
  name="category_id"
  text="Selecione a categoria"
  />
 <Submit 
   text={text}
   />
</form>

 
 ) 
  }

