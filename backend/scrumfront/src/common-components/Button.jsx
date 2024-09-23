/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Button = ({style, children}) => {
    console.log(children)
  return (
    <ButtonContainer styling={style}>
        {children}
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.button`
    padding: 10px;
    background-color: ${props => props.styling.bgcolor || '#000'};
    border: none;
    border-radius: 5px;
    font-weight: 500;
    width:${props => props.styling.width || '0px'};
    cursor: pointer;

`
Button.propTypes = {
    bgcolor: PropTypes.string,
  };
  