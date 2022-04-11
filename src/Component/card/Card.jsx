import React from 'react';
import {BsPencil,BsFillTrashFill } from 'react-icons/bs'

function Card({id, name, dinheiro, category, handleRemove}){
return(
    <>
    <p>{name}</p>
    
    <span>Orçamento:</span> R${dinheiro}
    <span>Categoria:{category}</span>
<p>Editar</p>
<p>Remover</p>
    </>
)
}

export default Card;