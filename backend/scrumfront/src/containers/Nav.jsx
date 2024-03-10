import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'
import { TfiAlignJustify } from "react-icons/tfi";

  const Nav = ({setSideBarCollapse,sideBarCollapse}) => {
    console.log('jj',sideBarCollapse)
  return (
    <NavContainer>
      <TfiAlignJustify className='menuIcon' onClick={()=>setSideBarCollapse(!sideBarCollapse)}/>
      <NavLeft>
        
        <a href="#">Your Work</a>
        <a href="#">Projects</a>
        <a href="#">Filters</a>
        <a href="#">Dashboards</a>
        <a href="#">Teams</a>
        <a href="#">Plans</a>
        <a href="#">Apps</a>
        <Button bgcolor='#599afe'>Create</Button>
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

    a{
      margin-right: 10px;
      padding: 10px 5px;
    }
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