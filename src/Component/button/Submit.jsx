import React from 'react';
import  * as C from  './style';
//import {Link} from 'react-router-dom';

//criando o compoenet de botão 
function Submit({text}) {
  return (
    <C.Container>
    
    <button>
    {text}
    </button>
   
      </C.Container>
  )
}
export default Submit;
