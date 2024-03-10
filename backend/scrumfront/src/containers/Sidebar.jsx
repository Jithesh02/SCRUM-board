import React from 'react'
import styled from 'styled-components'
import User from './User'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <User />
      <UpperContainer>
        <p>PLANNING</p>
        <a href="#">Timeline</a>
        <a href="#">Backlog</a>
        <a href="#">Board</a>
        <a href="#">Goals</a>
        <a href="#">Issues</a>
        <a href="#">Add view</a>
        <p>DEVELOPMENT</p>
        <a href="#">Code</a>
      </UpperContainer>
      <Line />
      <LowerContainer>
        <a href="#">Project pages</a>
        <a href="#">Add shortcut</a>
        <a href="#">Project settings</a>
      </LowerContainer>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  width: 15vw;
  border-right: 2px solid #3a3a3a;
  height: 93vh;
  padding: 10px;

  p{
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 0;
  }
`

const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;

  a{
    padding: 10px 10px;
    font-size: 15px;
    margin: 3px 0px;
    /* border: 1px white solid; */
    cursor: pointer;
  }
`

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;

  a{
    padding: 10px 10px;
    font-size: 15px;
    margin: 3px 0px;
    /* border: 1px white solid; */
    cursor: pointer;
  }
`

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #3a3a3a;
`