import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.ul`
  list-style-type: none;
  background-color: var(--color-tertiary);
  padding: 0.5rem 0;
`;

export const ItemList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

ItemList.propTypes = {
  children: PropTypes.node.isRequired,
};
