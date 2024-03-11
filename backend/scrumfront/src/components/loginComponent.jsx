import React from 'react'
import styled from 'styled-components'
import Heading from '../common components/Heading';

const loginComponent = () => {
  return (
    <LoginPage>
        <LoginDiv>
            <Heading style={{color: "white"}}>Login</Heading>
        </LoginDiv>
    </LoginPage>
  )
}

const LoginPage = styled.div`
height: 100%;
width: 100%;
position: relative;
`;
const LoginDiv = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 500px;
  transform: translate(-50%, -50%);
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
`;


export default loginComponent