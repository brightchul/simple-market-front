import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { theme } from "asset/style";
import { MyText } from "component";

const RequestAction: React.FC = () => {
  return (
    <RequestActionWrapper>
      <Button
        style={{
          backgroundColor: theme.color.primary500,
        }}
      >
        <MyText myFont="14pt-500" myColor="gray000">
          요청 내역 보기
        </MyText>
      </Button>
      <Button
        style={{
          marginLeft: "8px",
          border: `1px solid ${theme.color.primary500}`,
          backgroundColor: theme.color.gray000,
        }}
      >
        <MyText myFont="14pt-500" myColor="primary500">
          채팅하기
        </MyText>
      </Button>
    </RequestActionWrapper>
  );
};

const RequestActionWrapper = styled.div`
  margin-top: 32px;
  display: inline-flex;
`;

export { RequestAction };
export default RequestAction;
