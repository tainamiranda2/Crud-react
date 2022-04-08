import React from 'react';
import {Link} from 'react-router-dom';
import  * as C from  './style';
//criando o compoenet de botão 
function Button({to, text}) {
  return (
    <C.Container>
    <Link to={to}>
    {text}
    </Link>
      </C.Container>
  )
}
export default Button;
