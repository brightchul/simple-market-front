import { Toolbar } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const GNBToolbar = styled(Toolbar)`
  background-color: ${(props) => props.theme.color.primary700};
  color: ${(props) => props.theme.color.gray000};
`;

const GNB: React.FC = ({ children }) => {
  return <GNBToolbar>{children}</GNBToolbar>;
};

export { GNB };
export default GNB;
