import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApi } from "./baseApi";

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseApi,
  tagTypes: ["Me", "Users", "Sessions", "Auth", "ResetPasswordMe"],
  keepUnusedDataFor: 900, // 15 min
  endpoints: () => ({}),
});