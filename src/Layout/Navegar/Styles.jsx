import styled from 'styled-components';

export const Container=styled.div`

color:white;
background-image: linear-gradient(160deg, #de9fff 0, #c58cf2 50%, #ab79e6 100%);;
padding:20px;
cursor: pointer;
ul li a{
  text-decoration:none;
}
ul li{
  background: white;
  color: #ab79e6;
  margin: 5px; 
  padding: 10px;
  display: inline;
  justify-content:center;
 
}
li:hover{
  background: black;
  color: white;
}
  @media(width: 600px){
    justify-content:space-between;
    flex-direction:rows;
  }
  `;