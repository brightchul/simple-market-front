import React from "react";
import { useState } from "react";
import { fetchGet } from "util/api";

export interface RequestData {
  id: string;
  title: string;
  client: string;
  due: string;
  count: string;
  amount: string;
  method: string[];
  material: string[];
  status: string;
}

export interface IFilterData {
  method: string[];
  material: string[];
}

export class FilterData implements IFilterData {
  public method: string[] = [];
  public material: string[] = [];

  static create() {
    return new this();
  }
}

export interface FilterDataWidthStatus extends IFilterData {
  statusFlag: boolean;
}

export class FilterDataWithStatus implements FilterDataWidthStatus {
  public method: string[] = [];
  public material: string[] = [];
  public statusFlag = false;

  static create() {
    return new this();
  }
}

export const RequestDataContext: React.Context<
  RequestData[]
> = React.createContext([] as RequestData[]);

export const FilterStandardContext: React.Context<FilterData> = React.createContext(
  FilterData.create()
);

export const FilterDataContext: React.Context<any> = React.createContext({});

interface RequestDataProviderProps {
  children?: React.ReactElement;
}

export const useRequestData = () => {
  const [requestData, setRequestData] = React.useState<RequestData[]>([]);
  const [filterStandard, setFilterStandard] = React.useState<FilterData>(
    FilterData.create()
  );

  React.useEffect(() => {
    Promise.all([
      fetchGet<RequestData[]>("http://localhost:3001/requests").then(
        setRequestData
      ),
      fetchGet<FilterData>("http://localhost:3001/filter").then(
        setFilterStandard
      ),
    ]);
  }, []);

  return [requestData, filterStandard];
};

export const RequestDataProvider: React.FC<RequestDataProviderProps> = ({
  children,
}) => {
  const [requestData, filterStandard] = useRequestData();
  const [filterData, setFilterData] = useState(FilterDataWithStatus.create());

  return (
    <RequestDataContext.Provider value={requestData as RequestData[]}>
      <FilterStandardContext.Provider value={filterStandard as FilterData}>
        <FilterDataContext.Provider value={{ filterData, setFilterData }}>
          {children}
        </FilterDataContext.Provider>
      </FilterStandardContext.Provider>
    </RequestDataContext.Provider>
  );
};
