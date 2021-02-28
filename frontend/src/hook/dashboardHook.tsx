import {
  FilterDataContext,
  FilterDataWithStatus,
  RequestData,
  RequestDataContext,
} from "page/dashboard/DashBoardContext";
import { useContext, useCallback, useState, useEffect } from "react";

export const useConsultatationToggle = () => {
  const { filterData, setFilterData } = useContext(FilterDataContext);
  const toggleStatus = useCallback(() => {
    setFilterData({
      ...filterData,
      ...{ statusFlag: !filterData.statusFlag },
    });
  }, [filterData, setFilterData]);
  return [toggleStatus];
};

export const useResetFilterData = () => {
  const { filterData, setFilterData } = useContext(FilterDataContext);

  const resetFilterData = useCallback(() => {
    const newOne = FilterDataWithStatus.create();
    newOne.statusFlag = filterData.statusFlag;
    setFilterData(newOne);
  }, [filterData, setFilterData]);

  return [resetFilterData];
};

export const useUpdateFilterData = (type: string, data: any) => {
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
  }, [filterData, setFilterData, type, data]);
  return [filterData, updateFilterData];
};

enum REQUEST_STATUS {
  WAITING = "대기중",
  CONSULTING = "상담중",
}

export const useFilteredData = () => {
  const requestData: RequestData[] = useContext(RequestDataContext);
  const { filterData } = useContext(FilterDataContext);

  const filterFunction = useCallback(
    (data: RequestData) => {
      // status
      let checkStatus =
        filterData.statusFlag === false ||
        data.status === REQUEST_STATUS.CONSULTING;
      if (!checkStatus) return checkStatus;

      // material
      let checkMaterial =
        filterData.material.length === 0 ||
        data.material.some((oneMaterial) =>
          filterData.material.includes(oneMaterial)
        );
      if (!checkMaterial) return checkMaterial;

      // method
      let checkMethod =
        filterData.method.length === 0 ||
        data.method.some((oneMethod) => filterData.method.includes(oneMethod));
      if (!checkMethod) return checkMethod;

      return true;
    },
    [filterData]
  );

  const [filteredData, setFilteredData] = useState(
    requestData.filter(filterFunction)
  );

  useEffect(() => {
    setFilteredData(requestData.filter(filterFunction));
  }, [requestData, filterFunction]);

  return [filteredData];
};
