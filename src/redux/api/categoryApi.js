import { api } from "./api";

export const categoryApi = api.injectEndpoints({
    endpoints: (builder) => ({

        // ================= CATEGORIES LIST =================
        getCategories: builder.query({
            query: () => "/categories",

            providesTags: (result) =>
                result?.data
                    ? [
                          ...result.data.map((category) => ({
                              type: "Categories",
                              id: category._id,
                          })),
                          { type: "Categories", id: "LIST" },
                      ]
                    : [{ type: "Categories", id: "LIST" }],
        }),

        // ================= CREATE CATEGORY =================
        createCategory: builder.mutation({
            query: (body) => ({
                url: "/categories",
                method: "POST",
                body,
            }),

            invalidatesTags: [
                { type: "Categories", id: "LIST" },
            ],
        }),

        // ================= SINGLE CATEGORY =================
        getCategory: builder.query({
            query: (id) => `/categories/${id}`,

            providesTags: (result, error, id) => [
                { type: "Categories", id },
            ],
        }),

        // ================= UPDATE CATEGORY =================
        updateCategory: builder.mutation({
            query: ({ id, data }) => ({
                url: `/categories/${id}`,
                method: "PUT",
                body: data,
            }),

            invalidatesTags: (result, error, { id }) => [
                { type: "Categories", id },
                { type: "Categories", id: "LIST" },
            ],
        }),

        // ================= DELETE CATEGORY =================
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "DELETE",
            }),

            invalidatesTags: (result, error, id) => [
                { type: "Categories", id },
                { type: "Categories", id: "LIST" },
            ],
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useCreateCategoryMutation,
    useGetCategoryQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categoryApi;