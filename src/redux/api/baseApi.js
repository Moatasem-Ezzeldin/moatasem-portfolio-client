import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
});

let refreshPromise = null;

export const baseApi = async (args, api, extraOptions) => {
  const type = args?.meta?.type || "protected";

  if (type === "public" || type === "auth") {
    return rawBaseQuery(args, api, extraOptions);
  }

  // prevent infinite retry loop
  if (args?._retry) {
    return rawBaseQuery(args, api, extraOptions);
  }

  let result = await rawBaseQuery(args, api, extraOptions);

  if (type === "protected" && result?.error?.status === 401) {
    try {
      if (!refreshPromise) {
        refreshPromise = rawBaseQuery(
          {
            url: "/auth/refresh-token",
            method: "POST",
          },
          api,
          extraOptions
        ).finally(() => {
          refreshPromise = null;
        });
      }

      const refreshResult = await refreshPromise;

      // ❌ refresh failed → logout
      if (!refreshResult?.data) {
        await rawBaseQuery(
          {
            url: "/auth/logout",
            method: "POST",
          },
          api,
          extraOptions
        );

        return result;
      }

      // 🔁 retry once with flag
      return rawBaseQuery(
        {
          ...args,
          _retry: true,
        },
        api,
        extraOptions
      );
    } catch (err) {
      refreshPromise = null;
      console.debug("refresh token", err);
      return {error: {
        status: 401,
        data:"Unauthorized"
      }};
    }
  }

  return result;
};