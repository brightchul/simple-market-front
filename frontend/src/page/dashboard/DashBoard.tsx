import { Main } from "../../layout";
import React from "react";
import SearchRequest from "./RequestFilter";
import { MyContainer } from "component";
import RequestList from "./RequestList";

const DashBoard: React.FC = () => {
  return (
    <Main>
      <MyContainer>
        <SearchRequest />
        <RequestList />
      </MyContainer>
    </Main>
  );
};

export { DashBoard };
export default DashBoard;
