import { Box } from "@material-ui/core";
import styled from "@emotion/styled";
import React from "react";

const GNBBox = styled(Box)`
  && {
    background-color: ${({ theme }) => theme.color.primary700};
    color: ${({ theme }) => theme.color.gray000};
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
  return (
    <GNBBox boxShadow={2} height="70px">
      {children}
    </GNBBox>
  );
};

export { GNB };
export default GNB;
