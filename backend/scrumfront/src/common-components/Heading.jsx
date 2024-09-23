import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";

const Heading = ({ children, style }) => {
  return <StyledHeading style={style}>{children}</StyledHeading>;
};

const StyledHeading = styled.h1`
    size: ${props=> props.style.fontSize || "20px"} ;
    color: ${props => props.style.color || "#000"};
    width: 100%;
    display: flex;
    justify-content: left;
    align-Items: center;

`;

Heading.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
  };

Heading.defaultProps = {
  style: {}, // Default empty object for style prop
};

export default Heading;