import { Toolbar, Box } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const GNBBox = styled(Box)`
  && {
    background-color: ${(props) => props.theme.color.primary700};
    color: ${(props) => props.theme.color.gray000};
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
  }
`;

const GNB: React.FC = ({ children }) => {
  return <GNBBox boxShadow={3}>{children}</GNBBox>;
};

export { GNB };
export default GNB;
