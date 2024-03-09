/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Button = ({bgcolor, children}) => {
    console.log(children)
  return (
    <ButtonContainer color={bgcolor}>
        {children}
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.button`
    padding: 10px;
    background-color: ${props => props.color};
    border: none;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;

`
Button.propTypes = {
    bgcolor: PropTypes.string,
  };
  