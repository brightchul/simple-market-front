import React from "react";
import styled from "styled-components";
import { GNB, MyText } from "../component";
import { Domain } from "@material-ui/icons";

const Divider = styled.div`
  border: 1px solid #fff;
  width: 0px;
  margin: 0 32px;
`;

const RightMenuWrapper = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightMenu: React.FC = () => {
  return (
    <RightMenuWrapper>
      <LeftSide>
        <Domain style={{ fontSize: 15, marginRight: 8 }}>123</Domain>
        <MyText myFont="14pt-500" myColor="gray000">
          가공 업체
        </MyText>
      </LeftSide>
      <Divider />
      <div>
        <MyText myFont="14pt-500" myColor="gray000">
          로그아웃
        </MyText>
      </div>
    </RightMenuWrapper>
  );
};

const HeaderWrapper = styled.div``;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <GNB>
        <img src="/image/title1.png" alt="CAPA 파트너스" />
        <RightMenu />
      </GNB>
    </HeaderWrapper>
  );
};

export { Header };
export default Header;
