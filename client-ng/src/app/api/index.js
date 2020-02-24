// export const getListApi =
//   "https://my-json-server.typicode.com/hatemodify/testApi/showoff";
export const getListApi = "http://localhost:9998/showoff/list";
export const getDetailApi = id => `http://localhost:9998/showoff/detail/${id}`;
export const getRelatedApi = name =>
  `http://localhost:9998/showoff/related/${name}`;
