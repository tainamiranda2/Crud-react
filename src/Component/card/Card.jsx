import React from 'react';
import {BsPencil,BsFillTrashFill } from 'react-icons/bs'
import * as C from './styles';
import {Link} from 'react-router-dom'
function Card({id, name, dinheiro, category, handleRemove}){
    //metodo para remover
    const remove=(e)=>{
        e.preventDefault()
        handleRemove(id)
    }

return(
    <C.Container>
    <h3>Nome do Projeto:{name}</h3>
    
    <span> <strong>Orçamento:</strong>  R${dinheiro}</span>
    <span>Categoria:{category}</span>
    <div className='icons'>
<Link to={`/step3/${id}`}>
    <BsPencil>Editar</BsPencil>
</Link>
<button onClick={remove}>
    <BsFillTrashFill >Excluir</BsFillTrashFill>
</button>

</div>
    </C.Container>
)
}

export default Card;