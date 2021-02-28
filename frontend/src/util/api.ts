const fetchGet = async <DataType>(url: string) => {
  const result: DataType = await fetch(url).then((res) => res.json());
  return result;
};

export { fetchGet };
