import { MyBox, MyText } from "component";
import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { Box, Button, Menu, MenuList, Switch } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";

import { theme } from "asset/style";
import {
  FilterDataWithStatus,
  FilterDataContext,
  FilterStandardContext,
} from "../DashBoardContext";
import { useState } from "react";

const RequestFilterWrapper = styled.div`
  min-height: 120px;
`;
const Subject = styled.div``;
const FilteringWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 520px) {
    display: block;
  }
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

  @media (max-width: 520px) {
    margin-top: 20px;
    margin-left: -7px;
  }
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
            <MethodFilter />
            <MaterialFilter />
            <ResetFilter />
          </FilterMenuWrapper>
          <ConsultationToggle />
        </FilteringWrapper>
      </MyBox>
    </RequestFilterWrapper>
  );
};

const ConsultationToggle: React.FC = () => {
  const { filterData, setFilterData } = useContext(FilterDataContext);
  const toggleStatus = useCallback(() => {
    setFilterData({
      ...filterData,
      ...{ statusFlag: !filterData.statusFlag },
    });
  }, [filterData]);

  console.log(filterData.statusFlag);
  return (
    <ConsultationToggleWrapper>
      <Switch onClick={toggleStatus}></Switch>
      <MyText myFont="14pt-500">상담중인 요청만 보기</MyText>
    </ConsultationToggleWrapper>
  );
};

const MethodFilterWrapper = styled.div`
  margin-right: 8px;
  position: relative;
  z-index: 3;
`;

const ResetFilterWrapper = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  margin-left: 20px;
`;

const ResetFilter: React.FC = () => {
  const { filterData, setFilterData } = useContext(FilterDataContext);

  const resetFilterData = useCallback(() => {
    const newOne = FilterDataWithStatus.create();
    newOne.statusFlag = filterData.statusFlag;
    setFilterData(newOne);
  }, [filterData]);

  return (
    <ResetFilterWrapper onClick={resetFilterData}>
      <RefreshIcon htmlColor={theme.color.primary500} />
      <MyText myFont="12pt-400" myColor="primary500">
        필터링 리셋
      </MyText>
    </ResetFilterWrapper>
  );
};

const MethodFilter: React.FC = () => {
  const filterStandard = useContext(FilterStandardContext);
  const { filterData } = useContext(FilterDataContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MethodFilterWrapper>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: `1px solid ${theme.color.gray600}`,
          padding: "4px 12px",
          backgroundColor: `${
            filterData.method.length === 0 ? "#fff" : theme.color.primary700
          }`,
        }}
      >
        <MyText
          myFont="roboto-12-500"
          myColor={filterData.method.length === 0 ? "gray900" : "gray000"}
        >
          가공방식
          {filterData.method.length > 0 && `(${filterData.method.length})`}
        </MyText>
        <ArrowDropDownIcon
          style={{
            color: theme.color.gray600,
          }}
        ></ArrowDropDownIcon>
      </Button>
      <FilterBox display={isOpen ? "block" : "none"}>
        {filterStandard.method.length > 0 && (
          <FilterUl>
            {filterStandard.method.map((one, idx) => (
              <FilterOneLine key={`${idx}-${one}`} data={one} type={"method"} />
            ))}
          </FilterUl>
        )}
      </FilterBox>
    </MethodFilterWrapper>
  );
};

const FilterBox = styled(Box)`
  position: absolute;
  background-color: #fff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 16px 12px;
  width: max-content;
  margin-top: 4px;
`;

const MaterialFilterWrapper = styled.div`
  position: relative;
  z-index: 3;
`;

const MaterialFilter: React.FC = () => {
  const filterStandard = useContext(FilterStandardContext);
  const { filterData } = useContext(FilterDataContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MaterialFilterWrapper>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: `1px solid ${theme.color.gray600}`,
          padding: "4px 12px",
          backgroundColor: `${
            filterData.material.length === 0
              ? theme.color.gray000
              : theme.color.primary700
          }`,
        }}
      >
        <MyText
          myFont="roboto-12-500"
          myColor={filterData.material.length === 0 ? "gray900" : "gray000"}
        >
          재료
          {filterData.material.length > 0 && `(${filterData.material.length})`}
        </MyText>
        <ArrowDropDownIcon
          style={{
            color: theme.color.gray600,
          }}
        ></ArrowDropDownIcon>
      </Button>
      <FilterBox display={isOpen ? "block" : "none"}>
        {filterStandard.material.length > 0 && (
          <FilterUl>
            {filterStandard.material.map((one, idx) => (
              <FilterOneLine
                key={`${idx}-${one}`}
                data={one}
                type={"material"}
              />
            ))}
          </FilterUl>
        )}
      </FilterBox>
    </MaterialFilterWrapper>
  );
};

interface FilterOneLineProps {
  data: string;
  type: string;
}

const FilterOneLine: React.FC<FilterOneLineProps> = ({ data, type }) => {
  const { filterData, setFilterData } = useContext(FilterDataContext);

  const updateFilterData = useCallback(() => {
    const idx = filterData[type].indexOf(data);
    if (idx === -1) {
      setFilterData({
        ...filterData,
        [type]: [...filterData[type], data],
      });
    } else {
      const newOne = filterData[type].concat();
      newOne.splice(idx, 1);

      setFilterData({
        ...filterData,
        ...{ [type]: newOne },
      });
    }
  }, [filterData]);

  return (
    <FilterLi onClick={updateFilterData}>
      <input
        type="checkbox"
        readOnly
        checked={filterData[type].includes(data)}
      />
      {data}
    </FilterLi>
  );
};

const FilterUl = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  flex-direction: column;
`;

const FilterLi = styled.li`
  padding-right: 2px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export { RequestFilter };
export default RequestFilter;
