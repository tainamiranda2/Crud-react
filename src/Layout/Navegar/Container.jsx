import React from 'react';
import * as C from './Styles';
//import Entrar from '../../pages/Home';
import {Link} from 'react-router-dom';
//import Criate from '../../pages/Projetos'
function Container(props) {
  return (
    
    <C.Container>
    
      <ul>
        <li>
           <a href="/">Home</a>
            </li>
        <li>
          <a href="/step5">Projetos</a> 
          </li>
        <li>
          <a href="/step2">Criar</a> 
           </li>
      </ul>

    
      {props.children}
    </C.Container>
  )
}

export default Container;