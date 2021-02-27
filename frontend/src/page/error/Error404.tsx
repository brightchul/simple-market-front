import { Main } from "../../layout";
import React from "react";

const Error404: React.FC = () => {
  return (
    <Main>
      <div>요청하신 페이지는 없는 페이지 입니다. 404</div>
    </Main>
  );
};

export { Error404 };
export default Error404;
