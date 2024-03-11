import React, { useState } from 'react';
import styled from 'styled-components'
import Nav from './containers/Nav';
import Sidebar from './containers/Sidebar';
import Login from './Pages/Login'

import {Routes, Route} from 'react-router-dom'

// import { Provider } from 'react-redux';
// import store from './store'
// import axios from 'axios';

function App() {
  const [sideBarCollapse, setSideBarCollapse] = useState(false);
  return (
    <AppContainer>
      <Nav setSideBarCollapse={setSideBarCollapse} sideBarCollapse={sideBarCollapse} />
      {sideBarCollapse && <Sidebar />}
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #1d2025;
  height: 100vh;
  color: #8f969e;
  
  a{
    color: inherit;
    text-decoration: none;
    font: inherit;
  }
`