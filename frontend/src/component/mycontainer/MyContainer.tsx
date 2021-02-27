import { Container } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const CustomContainer = styled(Container)`
  margin-top: 40px;
  && {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const ContainerWrapper = styled.div``;

const MyContainer: React.FC = ({ children }) => {
  return (
    <ContainerWrapper>
      <CustomContainer style={{ maxWidth: "1130px" }}>
        {children || ""}
      </CustomContainer>
    </ContainerWrapper>
  );
};

export { MyContainer };
export default MyContainer;
