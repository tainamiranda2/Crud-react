import React from 'react';
import {Link} from 'react-router-dom';

//criando o compoenet de botão 
function Button({to, text}) {
  return (
    <>
    <Link to={to}>
    {text}
    </Link>
      </>
  )
}
export default Button;
