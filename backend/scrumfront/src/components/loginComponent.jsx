import React from 'react'
import styled from 'styled-components'
import Heading from '../common components/Heading';  
import Input from '../common components/Input';
import Button from '../containers/Button';

const loginComponent = () => {

  const style1 = {
    color: '#000',
    fontSize: '30px',
  };

  const style2 = {
    width:'94%',
    height:'25px',
    padding:'5px 10px',
    fontSize:'18px',
    margin:'5px 0px 25px 0px',
    borderRadius:'5px',
    border:'1px solid #c6c4c4'
}

  const SigninStyle = {
    bgcolor:'#67C7F4',
    color:'#fff',
    width:'100%'
  }


  return (
    <LoginPage>
        <LoginDiv>
          <Heading style={style1}>Login</Heading>
          <Input type="email" style={style2}>Email</Input>
          <Input type="password" style={style2}>Password</Input>
          <Button style={SigninStyle}>Login</Button>
        </LoginDiv>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #fff;

`;
const LoginDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25%;
  height: 60%;
  transform: translate(-50%, -50%);
  padding: 5px;
`;


export default loginComponent