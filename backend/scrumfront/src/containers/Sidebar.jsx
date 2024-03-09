import React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import SettingsIcon from '../icons/settings-svgrepo-com.svg'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <UpperContainer>

      </UpperContainer>
      <LowerContainer>
        
      </LowerContainer>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  width: 15vw;
  border-right: 1px solid #3a3a3a;
  height: 93vh;
  padding-left: 2px;
`

const UpperContainer = styled.div`
  border-bottom: 1px solid #3a3a3a;
`

const LowerContainer = styled.div`
  
`