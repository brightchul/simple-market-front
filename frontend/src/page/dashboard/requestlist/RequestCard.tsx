import { MyCard, MyText } from "component";
import React from "react";
import styled from "@emotion/styled";
import { theme } from "asset/style";
import { RequestData } from "../DashBoardContext";
import { RequestAction } from "./RequestAction";
import RequestDetail from "./RequestDetail";

const RequestCard: React.FC<RequestCardProps> = ({ data }) => {
  return (
    <MyCard
      border="1px solid #E5E5E5"
      width="366px"
      height="356px"
      hoverShadow={`0 0 0px 2px ${theme.color.primary500}`}
    >
      <RequestCardContentWrapper>
        <RequestHeader {...data} />
        <RequestDetail {...data} />
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

const RequestHeaderWrapper = styled.div`
  position: relative;
`;

interface RequestHeaderProps {
  title: string;
  client: string;
  due: string;
  status: string;
}

const RequestHeader: React.FC<RequestHeaderProps> = ({
  title,
  client,
  due,
  status,
}) => {
  return (
    <RequestHeaderWrapper>
      <RequestStatus status={status} />
      <MyText myFont="16pt-600">{title}</MyText>
      <MyText myFont="14pt-500" style={{ margin: "4px 0 0 0" }}>
        {client}
      </MyText>
      <DueDateWrapper>
        <MyText myColor="gray600" myFont="14pt-400">
          {due}까지 납기
        </MyText>
      </DueDateWrapper>
      <Divider />
    </RequestHeaderWrapper>
  );
};

const DueDateWrapper = styled.div`
  margin-top: 24px;

  @media (max-width: 520px) {
    margin-top: 12px;
  }
`;

const RequestStatusWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 2px 8px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.warning};
`;

interface RequestStatusProps {
  status: string;
}

const RequestStatus: React.FC<RequestStatusProps> = ({
  status,
}: {
  status: string;
}) => {
  return (
    <>
      {status === "상담중" && (
        <RequestStatusWrapper>
          <MyText myFont="12pt-500" myColor="warning">
            상담중
          </MyText>
        </RequestStatusWrapper>
      )}
    </>
  );
};

const Divider = styled.div`
  border: 0.5px solid #e5e5e5;
  height: 0px;
  margin-top: 16px;
`;

export { RequestCard };
export default RequestCard;
