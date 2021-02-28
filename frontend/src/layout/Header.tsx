import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { GNB, MyText } from "../component";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import DividerMui from "@material-ui/core/Divider";

import { Domain } from "@material-ui/icons";
import { List, ListItem, ListSubheader } from "@material-ui/core";

const Divider = styled.div`
  border: 1px solid #fff;
  width: 0px;
  margin: 0 32px;
`;

const RightMenuWrapper = styled.div`
  display: flex;
  @media (max-width: 520px) {
    display: none;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightMenu: React.FC = () => {
  return (
    <RightMenuWrapper>
      <LeftSide>
        <Domain style={{ fontSize: 15, marginRight: 8 }}></Domain>
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

const HeaderLeftWrapper = styled.div``;
const Header: React.FC = () => {
  const [sideBarFlag, setSideBarFlag] = useState(false);
  const toggleSideBar = useCallback(
    (e) => {
      if (e.target.closest) setSideBarFlag(!sideBarFlag);
    },
    [sideBarFlag]
  );

  return (
    <HeaderWrapper>
      <GNB>
        <HeaderLeftWrapper>
          <MenuIcon onClick={toggleSideBar} />
          <img src="/image/title1.png" alt="CAPA 파트너스" />
        </HeaderLeftWrapper>
        <RightMenu />
      </GNB>
      <Drawer anchor={"left"} open={sideBarFlag} onClose={toggleSideBar}>
        <List style={{ width: "280px" }}>
          <ListSubheader>
            <img src="/image/title_color.png" />
          </ListSubheader>
          <DividerMui />
          <ListItem>
            <div>
              <MyText myFont="14pt-500" myColor="gray900">
                <Domain style={{ fontSize: 15, marginRight: 8 }}></Domain>
                파트너정밀가공
              </MyText>
            </div>
          </ListItem>
          <ListItem>
            <MyText myFont="14pt-500" myColor="gray900">
              로그아웃
            </MyText>
          </ListItem>
          <ListItem>2</ListItem>
        </List>
      </Drawer>
    </HeaderWrapper>
  );
};

export { Header };
export default Header;
