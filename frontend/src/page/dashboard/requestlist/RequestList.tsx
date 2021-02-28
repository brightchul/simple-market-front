import { MyBox } from "component";
import { useFilteredData } from "hook";
import React from "react";
import styled from "styled-components";
import { RequestData } from "../DashBoardContext";
import RequestCard from "./RequestCard";
import RequestEmpty from "./RequestEmpty";

const RequestList: React.FC = () => {
  const [filteredData] = useFilteredData();

  return (
    <RequestListWrapper>
      {filteredData.length === 0 && <RequestEmpty />}
      {filteredData.length > 0 && (
        <RequestListBox>
          {filteredData.map((data: RequestData) => (
            <RequestCard
              key={`${data.id}-${data.client}-${data.due}`}
              data={data}
            ></RequestCard>
          ))}
        </RequestListBox>
      )}
    </RequestListWrapper>
  );
};

const RequestListWrapper = styled.div`
  margin-top: 32px;
`;

const RequestListBox = styled(MyBox)`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-evenly;
`;

export { RequestList };
export default RequestList;
