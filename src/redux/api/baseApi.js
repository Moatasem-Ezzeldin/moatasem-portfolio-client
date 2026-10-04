import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = fetchBaseQuery({
  
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",

});