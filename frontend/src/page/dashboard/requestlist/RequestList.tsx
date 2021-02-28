import { MyBox } from "component";
import React, { useContext } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import {
  RequestDataContext,
  RequestData,
  FilterDataContext,
} from "../DashBoardContext";
import RequestCard from "./RequestCard";
import RequestEmpty from "./RequestEmpty";

const RequestListWrapper = styled.div`
  margin-top: 32px;
`;

const RequestList: React.FC = () => {
  const requestData: RequestData[] = useContext(RequestDataContext);
  const { filterData } = useContext(FilterDataContext);
  const filterFunction = useCallback(
    (data: RequestData) => {
      // material
      let checkStatus =
        filterData.statusFlag === false || data.status === "상담중";

      let checkMaterial =
        filterData.material.length === 0 ||
        data.material.some((oneMaterial) =>
          filterData.material.includes(oneMaterial)
        );

      // method
      let checkMethod =
        filterData.method.length === 0 ||
        data.method.some((oneMethod) => filterData.method.includes(oneMethod));

      return checkStatus && checkMaterial && checkMethod;
    },
    [filterData]
  );

  const renderData = requestData.filter(filterFunction);

  return (
    <RequestListWrapper>
      {renderData.length === 0 && <RequestEmpty />}
      {renderData.length > 0 && (
        <MyBox
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-evenly",
          }}
        >
          {renderData.map((data: RequestData) => (
            <RequestCard
              key={`${data.id}-${data.client}-${data.due}`}
              data={data}
            ></RequestCard>
          ))}
        </MyBox>
      )}
    </RequestListWrapper>
  );
};

export { RequestList };
export default RequestList;
