import { Main } from "../../layout";
import React from "react";
import { RequestFilter } from "./requestlist";
import { MyContainer } from "component";
import { RequestList } from "./requestlist";
import { RequestDataProvider } from "./DashBoardContext";

const DashBoard: React.FC = () => {
  return (
    <RequestDataProvider>
      <Main>
        <MyContainer maxWidth="1170px">
          <RequestFilter />
          <RequestList />
        </MyContainer>
      </Main>
    </RequestDataProvider>
  );
};

export { DashBoard };
export default DashBoard;
