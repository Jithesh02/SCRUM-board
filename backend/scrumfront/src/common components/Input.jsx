import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';


const Input = ({type,style,children}) => {
  return (
    <InputWrapper>
        <label>{children}</label>
        <InputBox type={type} styling={style}/>
    </InputWrapper>
  )
}

export default Input

Input.propTypes = {
    type: PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.string,
  };

const InputBox = styled.input`
    width:${props => props.styling.width};
    height:${props => props.styling.height};
    padding:${props => props.styling.padding};
    font-size:${props => props.styling.fontSize};
    margin:${props => props.styling.margin};
    border-radius: ${props => props.styling.borderRadius};
    border: none;
    border: ${props => props.styling.border};
    
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

