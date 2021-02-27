import React from "react";

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

export const RequestDataContext: React.Context<
  RequestData[]
> = React.createContext([] as RequestData[]);

interface RequestDataProviderProps {
  children?: React.ReactElement;
}

export const useRequestData = () => {
  const [requestData, setRequestData] = React.useState([] as RequestData[]);

  React.useEffect(() => {
    const fetchGet = async () => {
      const result: RequestData[] = await fetch(
        "http://localhost:3001/requests"
      ).then((res) => res.json());

      console.log(result);
      setRequestData(result);
    };
    fetchGet();
  }, []);

  return requestData;
};

export const RequestDataProvider: React.FC<RequestDataProviderProps> = ({
  children,
}) => {
  const requestData = useRequestData();

  return (
    <RequestDataContext.Provider value={requestData}>
      {children}
    </RequestDataContext.Provider>
  );
};
