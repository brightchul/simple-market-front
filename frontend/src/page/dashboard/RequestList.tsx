import { MyBox, MyCard, MyText } from "../../component";
import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { theme } from "asset/style";
import { RequestDataContext, RequestData } from "./DashBoardContext";

interface RequestCardProps {
  data: RequestData;
}

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

const RequestListWrapper = styled.div`
  margin-top: 32px;
`;

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

const Divider = styled.div`
  border: 0.5px solid #e5e5e5;
  height: 0px;
  margin-top: 16px;
`;

const RequestList: React.FC = () => {
  const requestData = useContext(RequestDataContext);

  return (
    <RequestListWrapper>
      <MyBox
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {requestData.map((data: RequestData) => (
          <RequestCard
            key={`${data.id}-${data.client}-${data.due}`}
            data={data}
          ></RequestCard>
        ))}
      </MyBox>
    </RequestListWrapper>
  );
};

const RequestActionWrapper = styled.div`
  margin-top: 32px;
`;

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

export { RequestList };
export default RequestList;
