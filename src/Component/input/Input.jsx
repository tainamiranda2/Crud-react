import React from 'react';

//criando compoent de input
function Input({type,
                text,
                name, 
                placeholder,     
                handleOnChange,
                value}) {
  return (
    <>
    <label
      htmlFor={name}>
      {text}:
    </label>
      
    <input 
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
      />
    </>
  )
}

export default Input;