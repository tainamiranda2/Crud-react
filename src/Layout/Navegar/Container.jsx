import React from 'react';
import * as C from './Styles';
//import Entrar from '../../pages/Home';

function Container(props) {
  return (
    
    <C.Container>
      <ul>
        <li href="#"> Home</li>
        <li href="#"> Projetos</li>
        <li href="#">Criar </li>
      </ul>
      {props.children}
    </C.Container>
  )
}

export default Container;