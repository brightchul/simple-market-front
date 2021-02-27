import { Main } from "../../layout";
import React from "react";
import SearchRequest from "./RequestFilter";
import { MyContainer } from "component";
import RequestList from "./RequestList";
import { RequestDataProvider } from "./DashBoardContext";

const DashBoard: React.FC = () => {
  return (
    <RequestDataProvider>
      <Main>
        <MyContainer>
          <SearchRequest />
          <RequestList />
        </MyContainer>
      </Main>
    </RequestDataProvider>
  );
};

export { DashBoard };
export default DashBoard;
