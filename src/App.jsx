import React from 'react';
import './App.css';
import { Container } from './Layout/Navegar/Styles';
import {Router} from './router';
//"@vitejs/plugin-react-refresh": "^1.3.0",
function App() {
  return (
    <Container>
    
    <Router/>
    </Container>
  );
}

export default App;