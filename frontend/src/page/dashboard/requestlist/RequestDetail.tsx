import { MyText } from "component";
import React from "react";
import styled from "styled-components";

const RequestDetail: React.FC<RequestDetailProps> = ({
  amount,
  count,
  method,
  material,
}) => {
  return (
    <RequestDetailWrapper>
      <RequestOneDetailWrapper>
        <RequestOneDetail>
          <MyText
            myFont="14pt-400"
            style={{ width: "70px", marginRight: "32px" }}
          >
            도면개수
          </MyText>
          <MyText myFont="14pt-600" style={{ flexGrow: 1 }}>
            {count}
          </MyText>
        </RequestOneDetail>
        <RequestOneDetail>
          <MyText
            myFont="14pt-400"
            style={{ width: "70px", marginRight: "32px" }}
          >
            총 수량
          </MyText>
          <MyText myFont="14pt-600" style={{ flexGrow: 1 }}>
            {amount}
          </MyText>
        </RequestOneDetail>
        <RequestOneDetail>
          <MyText
            myFont="14pt-400"
            style={{ width: "70px", marginRight: "32px" }}
          >
            가공방식
          </MyText>
          <MyText myFont="14pt-600" style={{ flexGrow: 1 }}>
            {method.join(", ")}
          </MyText>
        </RequestOneDetail>
        <RequestOneDetail>
          <MyText
            myFont="14pt-400"
            style={{ width: "70px", marginRight: "32px" }}
          >
            재료
          </MyText>
          <MyText myFont="14pt-600" style={{ flexGrow: 1 }}>
            {material.join(", ")}
          </MyText>
        </RequestOneDetail>
      </RequestOneDetailWrapper>
    </RequestDetailWrapper>
  );
};

const RequestDetailWrapper = styled.div`
  text-align: left;
  margin-top: 32px;
`;

const RequestOneDetailWrapper = styled.ul<{}>(() => {
  return {
    width: "100%",
    display: "inline-flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "8px",
  };
});

const RequestOneDetail = styled.li`
  display: flex;
`;

interface RequestDetailProps {
  id: string;
  amount: string;
  count: string;
  method: string[];
  status: string;
  material: string[];
}

export { RequestDetail };
export default RequestDetail;
