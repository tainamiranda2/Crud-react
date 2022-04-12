import styled from 'styled-components';

export const Container=styled.div`

color:white;
background:red;
padding:20px;


ul li{
  background: white;
  color: black;
  margin: 5px; 
  padding: 10px;
  display: inline;
  justify-content:center;
}
li: hover{
  background: black;
  color: white;
}
  @media(width: 600px){
    justify-content:space-between;
    flex-direction:rows;
  }
  `;