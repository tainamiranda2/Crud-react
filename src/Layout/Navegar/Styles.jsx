import styled from 'styled-components';

export const Container=styled.div`
font-size:20px;

background-image: linear-gradient(160deg, #de9fff 0, #c58cf2 50%, #ab79e6 100%);;
padding:20px;
cursor: pointer;

ul li a{
  text-decoration:none;
}
ul li {
  background: white;
  margin: 5px; 
  padding: 10px;
  display: inline;
  justify-content:center;
 
}
ul li a:hover{
  background: black;
  color: white;
  padding:10px;

}
  @media(width: 600px){
    justify-content:space-between;
    flex-direction:rows;
  }
  `;