
import React from 'react';
import * as C from './Styles';
import {Link,Outlet} from 'react-router-dom';

import {BrowserRouter as Router} from 'react-router-dom';
function Container() {
  return (
    <>
  
<Router>
<C.Container>
  <nav>
  <ul>
<li>
           <Link to="/">Home</Link>
        
           </li>
           <li>
          <Link to="/step5">Projetos</Link> 
          </li>
         
          </ul> 
          </nav>
          
          </C.Container>
          <Outlet/>
      </Router>
      </>
  )
}

export default Container;