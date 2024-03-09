import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <SidebarContainer>
      Sidebar
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  width: 15vw;
  border-right: 1px solid #3a3a3a;
  height: 93vh;
`