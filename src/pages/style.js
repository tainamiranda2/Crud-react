import styled from 'styled-components';

export const Container=styled.div`

display:flex;
margin:10px;

form{
margin:25px;
justify-content:center; 
margin-top:15px;
text-align:center;
  font-weight:bold;
  width:600px;
  background-image: linear-gradient(160deg, #de9fff 0, #c58cf2 50%, #ab79e6 100%);;
}
fieldset{
  background:#ab79e6;
 display:flex;
  justify-content:space-between;
  align-items:center;
 
}
button{
border-radius:10px;
background:#ab79e6;
color:#fff;
padding:20px;
margin:20px;
}
fieldset p {
  color: #fff;
  margin: 5px;
}
fieldset span{
  color:#fff;
  margin: 5px;
}
h3 {
font-weight: bold;
 justify-content:center; 
 margin:10px;
 text-align:center;
color: #fff;
}

h2{
  margin:10px;
  font-weight: bold;
  justify-content:center; 
  text-align:center;
padding:10px;
background:#fff;
color:#c58cf2;
}
img{
  width: 600px;
  float:right;
}

@media screen and (max-width: 600px) {
  
  img{
    display:none;
  }
}
`

;