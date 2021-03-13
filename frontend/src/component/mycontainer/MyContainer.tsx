import { Container } from "@material-ui/core";
import styled from "@emotion/styled";
import React from "react";

const CustomContainer = styled(Container)`
  margin-top: 40px;
  && {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0;
    padding-bottom: 40px;
  }
`;
const ContainerWrapper = styled.div``;

interface MyContainerProps {
  maxWidth?: string;
}

const MyContainer: React.FC<MyContainerProps> = ({ maxWidth, children }) => {
  return (
    <ContainerWrapper>
      <CustomContainer style={{ maxWidth: maxWidth }}>
        {children || ""}
      </CustomContainer>
    </ContainerWrapper>
  );
};

export { MyContainer };
export default MyContainer;
