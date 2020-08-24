import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 5rem;
  height: 5rem;
  background: orange;
`;

function stebButton({ child, ...rest }) {
  return <StyledBtn {...rest}>{child}</StyledBtn>;
}

export default stebButton;
