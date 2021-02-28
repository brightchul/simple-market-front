import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { GNB, MyText } from "../component";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import DividerMui from "@material-ui/core/Divider";

import { Domain } from "@material-ui/icons";
import { List, ListItem, ListSubheader } from "@material-ui/core";

const MyList = styled.li`
  padding: 12px 32px;
  width: 100%;
`;

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
          <MyMenuIcon onClick={toggleSideBar} />
          <img
            src="/image/title1.png"
            alt="CAPA 파트너스"
            style={{ height: "20px" }}
          />
        </HeaderLeftWrapper>
        <RightMenu />
      </GNB>
      <Drawer anchor={"left"} open={sideBarFlag} onClose={toggleSideBar}>
        <List style={{ width: "280px" }}>
          <ListSubheader>
            <img src="/image/title_color.png" alt="CAPA 파트너스" />
          </ListSubheader>
          <DividerMui
            style={{
              marginBottom: "24px",
            }}
          />
          <MyList>
            <MyText myFont="14pt-500" myColor="gray900">
              <Domain
                style={{
                  fontSize: 15,
                  marginRight: "8px",
                  marginBottom: "-2px",
                }}
              ></Domain>
              <a href="#">파트너정밀가공</a>
            </MyText>
          </MyList>
          <MyList>
            <MyText myFont="14pt-500" myColor="gray900">
              <a href="#">로그아웃</a>
            </MyText>
          </MyList>
        </List>
      </Drawer>
    </HeaderWrapper>
  );
};

const MyMenuIcon = styled(MenuIcon)`
  font-size: 20px;
  display: inline-flex;
  margin-right: 16px;
  @media (min-width: 521px) {
    display: none;
  }
`;

const MyDivider = styled.div`
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
          <a href="#">가공 업체</a>
        </MyText>
      </LeftSide>
      <MyDivider />
      <div>
        <MyText myFont="14pt-500" myColor="gray000">
          <a href="#">로그아웃</a>
        </MyText>
      </div>
    </RightMenuWrapper>
  );
};

const HeaderWrapper = styled.div``;

const HeaderLeftWrapper = styled.div``;

export { Header };
export default Header;
