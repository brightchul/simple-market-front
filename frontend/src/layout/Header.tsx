import React from "react";
import styled from "styled-components";
import { GNB, MyText } from "../component";
import { Domain } from "@material-ui/icons";

const HeaderWrapper = styled.div``;

const Divider = styled.div`
  border: 2px solid #fff;
  width: 1px;
  margin: 0 32px;
`;

const RightMenuWrapper = styled.div``;
const RightMenu: React.FC = () => {
  return (
    <RightMenuWrapper>
      <div>
        <Domain>123</Domain>
        <MyText myfont="14pt-500">가공 업체</MyText>
      </div>
      <Divider />
      <div>
        <MyText myfont="14pt-500">로그아웃</MyText>
      </div>
    </RightMenuWrapper>
  );
};

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <GNB>
        <img src="/image/title1.png" />
        <RightMenu />
      </GNB>
    </HeaderWrapper>
  );
};

export { Header };
export default Header;
