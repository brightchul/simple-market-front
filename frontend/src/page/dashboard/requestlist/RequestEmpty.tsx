import { MyText } from "../../../component";
import React from "react";
import styled from "styled-components";

const RequestEmptyWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
`;

const RequestEmpty: React.FC = () => {
  return (
    <RequestEmptyWrapper>
      <MyText myFont="14pt-400" myColor="gray600">
        조건에 맞는 요청이 없습니다.
      </MyText>
    </RequestEmptyWrapper>
  );
};

export { RequestEmpty };
export default RequestEmpty;
