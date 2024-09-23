import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const NavLinks = ({name,to,style}) => {
  return (
    <NavLink to={to} styling={style}>
        <p>{name}</p>
    </NavLink>
  )
}

export default NavLinks

NavLinks.propTypes = {
    name:PropTypes.string,
    to:PropTypes.string,
    style:PropTypes.object,
}

const NavLink = styled(Link)`
    margin-right: ${props => props.styling.mr};
    padding:${props => props.styling.padding};

    p{
        margin: 0;
        padding: 0;
    }
`