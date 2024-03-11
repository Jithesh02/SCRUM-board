import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";

const Heading = ({ children, style }) => {
  return <StyledHeading style={style}>{children}</StyledHeading>;
};

const StyledHeading = styled.h1`
    size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-Items: center;

`;

Heading.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
  };

export default Heading;