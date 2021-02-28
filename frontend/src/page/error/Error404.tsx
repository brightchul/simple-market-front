import { Main } from "../../layout";
import React from "react";
import MyContainer from "component/mycontainer/MyContainer";
import { MyText } from "component";
import styled from "styled-components";

const Error404: React.FC = () => {
  return (
    <Main>
      <MyContainer>
        <Error404Wrapper>
          <MyText myFont="20pt-600">
            요청하신 페이지는 없는 페이지 입니다.
          </MyText>
        </Error404Wrapper>
      </MyContainer>
    </Main>
  );
};

const Error404Wrapper = styled.div`
  margin-top: 120px;
  text-align: center;
`;

export { Error404 };
export default Error404;
