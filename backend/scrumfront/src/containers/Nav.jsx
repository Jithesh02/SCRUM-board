import React from 'react'
import styled from 'styled-components'
import Button from '../common-components/Button'
import PropTypes from 'prop-types'

import { TfiAlignJustify } from "react-icons/tfi";
import NavLinks from '../common-components/NavLinks'

  const Nav = ({setSideBarCollapse,sideBarCollapse}) => {
    const style1 = {
      bgcolor:'#599afe',
      width:'fit-content',
    }

    const NavStyle = {
      mr:'10px',
      padding:'10px 5px'
    }

    console.log('jj',sideBarCollapse)
  return (
    <NavContainer>
      <NavLeft>
        <TfiAlignJustify className='menuIcon' onClick={()=>setSideBarCollapse(!sideBarCollapse)}/>
        <NavLinks to='/yourwork' name="Your Work" style={NavStyle}/>
        <Button style={style1}>Create</Button>
      </NavLeft>
      <NavRight>
        <Search placeholder='Search' />
      </NavRight>
    </NavContainer>
  )
}

export default Nav

const NavContainer = styled.div`
    border-bottom: 1px solid #3a3a3a;
    padding: 10px;

    .menuIcon{
      margin-right: 10px;
      padding: 10px 5px;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`

const NavRight = styled.div`
  
`

const Search = styled.input`
  background-color: inherit;
  color: inherit;
  border: none;
  border: 2px solid #3a3a3a;
  border-radius: 5px;
  padding: 5px 10px;
  width: 200px;
`

Nav.propTypes = {
  setSideBarCollapse: PropTypes.func.isRequired,
  sideBarCollapse: PropTypes.bool.isRequired,
};