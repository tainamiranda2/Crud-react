import React from 'react';

function Select({ options, text, name, handleOnChange,value}){
  return(
    <div>
       <label
      htmlFor={name}>
      {text}:
    </label>
  
      <select 
        name={name}     
        id={name}
       >
      <option>Selecione uma opção</option>
      </select>
     
    </div>
  )

}
export default Select;