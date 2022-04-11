import React from 'react';
import './App.css';
import Container from './Layout/Navegar/Container';
import  Footer  from './Layout/footer/Footer';

import {Router} from './router';
//"@vitejs/plugin-react-refresh": "^1.3.0",
function App() {
  return (
    <>
    <Container/> 
    <Router/>

    <Footer/>
    </>
  );
}

export default App;