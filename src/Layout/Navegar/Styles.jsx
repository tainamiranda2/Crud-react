import styled from 'styled-components';

export const Container=styled.div`

color:white;
background:red;
padding:20px;
justify-content:center;
li{
  background: white;
  color: black;
  margin: 5px; 
  padding: 10px;
  width:100%;
}
  @media(width: 600px){
    justify-content:space-between;
    flex-direction:rows;

  }
  `;