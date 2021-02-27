import { MyBox, MyText } from "../../component";
import React from "react";
import styled from "styled-components";
import { Button, Menu, MenuList, Switch } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { theme } from "asset/style";

const RequestFilterWrapper = styled.div`
  height: 120px;
`;
const Subject = styled.div``;
const FilteringWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterMenuWrapper = styled.div`
  display: flex;
`;
const EmptyWrapper = styled.div`
  height: 32px;
  width: 100%;
`;
const ConsultationToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RequestFilter: React.FC = () => {
  return (
    <RequestFilterWrapper>
      <MyBox>
        <Subject>
          <MyText myFont="20pt-600">들어온 요청</MyText>
          <MyText myFont="16pt-400">
            파트너님에게 딱 맞는 요청서를 찾아보세요.
          </MyText>
        </Subject>
        <EmptyWrapper />

        <FilteringWrapper>
          <FilterMenuWrapper>
            <div style={{ marginRight: "8px" }}>
              <Button
                style={{
                  border: `1px solid ${theme.color.gray600}`,
                }}
              >
                <MyText myFont="roboto-12-500" myColor="gray900">
                  가공방식
                </MyText>
                <ArrowDropDownIcon
                  style={{
                    color: theme.color.gray600,
                  }}
                ></ArrowDropDownIcon>
              </Button>
              <Menu open={false}>
                <MenuList>1</MenuList>
                <MenuList>2</MenuList>
                <MenuList>3</MenuList>
              </Menu>
            </div>

            <div>
              <Button
                style={{
                  border: `1px solid ${theme.color.gray600}`,
                }}
              >
                <MyText myFont="roboto-12-500" myColor="gray900">
                  재료
                </MyText>
                <ArrowDropDownIcon
                  style={{
                    color: theme.color.gray600,
                  }}
                ></ArrowDropDownIcon>
              </Button>
              <Menu open={false}>
                <MenuList>1</MenuList>
                <MenuList>2</MenuList>
                <MenuList>3</MenuList>
              </Menu>
            </div>
          </FilterMenuWrapper>
          <ConsultationToggleWrapper>
            <Switch></Switch>
            <MyText myFont="14pt-500">상담중인 요청만 보기</MyText>
          </ConsultationToggleWrapper>
        </FilteringWrapper>
      </MyBox>
    </RequestFilterWrapper>
  );
};

export { RequestFilter };
export default RequestFilter;
