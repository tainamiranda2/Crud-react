import React from 'react';
import * as C from './styles';
//criando compoent de input
function Input({type,
                text,
                name, 
                placeholder,     
                handleOnChange,
                value}) {
  return (
    <C.Container>
    <label
      htmlFor={name}>
      {text}:
    </label>
      <br/>
    <input 
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
      />
    </C.Container>
  )
}

export default Input;