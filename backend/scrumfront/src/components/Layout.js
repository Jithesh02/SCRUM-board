import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';

const Layout = () => {
  return (
    <StyledOutlet>
    <Outlet/>
    </StyledOutlet>
  )
}

const StyledOutlet = styled.div`
    background-color: #1d2025;
    height: 100vh;
`;

export default Layout