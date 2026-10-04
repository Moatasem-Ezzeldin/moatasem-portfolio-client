import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApi } from "./baseApi";

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseApi,
  tagTypes: [ "Projects", "Categories", ],
  keepUnusedDataFor: 900, // 15 min
  endpoints: () => ({}),
});