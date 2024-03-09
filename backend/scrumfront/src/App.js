import React from 'react';
import styled from 'styled-components'
import Nav from './containers/Nav';
import Sidebar from './containers/Sidebar';

function App() {
  return (
    <AppContainer>
      <Nav />
      <Sidebar />
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