import { MyCard, MyText } from "component";
import React from "react";
import styled from "styled-components";
import { theme } from "asset/style";
import { RequestData } from "../DashBoardContext";
import { RequestAction } from "./RequestAction";
import RequestDetail from "./RequestDetail";

const RequestCard: React.FC<RequestCardProps> = ({
  data: { title, client, due, amount, count, id, material, method, status },
}) => {
  return (
    <MyCard
      border="1px solid #E5E5E5"
      width="366px"
      height="356px"
      hoverShadow={`0 0 0px 2px ${theme.color.primary500}`}
    >
      <RequestCardContentWrapper>
        <RequestHeader title={title} client={client} due={due} />
        <RequestDetail
          id={id}
          amount={amount}
          count={count}
          method={method}
          status={status}
          material={material}
        />
        <RequestAction />
      </RequestCardContentWrapper>
    </MyCard>
  );
};

interface RequestCardProps {
  data: RequestData;
}

const RequestCardContentWrapper = styled.div`
  padding: 24px 16px;
  width: 100%;
  height: 100%;
`;

const RequestHeaderWrapper = styled.div``;

interface RequestHeaderProps {
  title: string;
  client: string;
  due: string;
}

const RequestHeader: React.FC<RequestHeaderProps> = ({
  title,
  client,
  due,
}) => {
  return (
    <RequestHeaderWrapper>
      <MyText myFont="16pt-600">{title}</MyText>
      <MyText myFont="14pt-500" style={{ margin: "4px 0 0 0" }}>
        {client}
      </MyText>
      <MyText
        myColor="gray600"
        myFont="14pt-400"
        style={{ margin: "24px 0 0 0" }}
      >
        {due}까지 납기
      </MyText>
      <Divider />
    </RequestHeaderWrapper>
  );
};

const Divider = styled.div`
  border: 0.5px solid #e5e5e5;
  height: 0px;
  margin-top: 16px;
`;

export { RequestCard };
export default RequestCard;
