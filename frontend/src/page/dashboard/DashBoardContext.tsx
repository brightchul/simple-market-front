import React from "react";
import { useState } from "react";

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
  public method = [];
  public material = [];

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
    const fetchGet = async (url: string, setter: any) => {
      const result: RequestData[] = await fetch(url).then((res) => res.json());
      setter(result);
    };

    Promise.all([
      fetchGet("http://localhost:3001/requests", setRequestData),
      fetchGet("http://localhost:3001/filter", setFilterStandard),
    ]);
  }, []);

  return [requestData, filterStandard];
};

export const RequestDataProvider: React.FC<RequestDataProviderProps> = ({
  children,
}) => {
  const [requestData, filterStandard] = useRequestData();
  const [filterData, setFilterData] = useState(FilterData.create());

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
