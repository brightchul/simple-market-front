import { MyBox } from "component";
import { useFilteredData } from "hook";
import React from "react";
import styled from "@emotion/styled";
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
  display: grid;
  row-gap: 16px;
  column-gap: 16px;
  justify-content: left;
  grid-template-columns: repeat(3, auto);
  margin: 0 auto;

  @media (max-width: 1159px) {
    width: 748px;
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 819px) {
    justify-content: center;
    width: auto;
    grid-template-columns: repeat(1, auto);
  }
  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 320px);
  }
  @media (max-width: 319px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export { RequestList };
export default RequestList;
