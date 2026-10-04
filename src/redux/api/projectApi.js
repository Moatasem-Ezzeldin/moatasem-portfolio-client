import { api } from "./api";

export const projectApi = api.injectEndpoints({
    endpoints: (builder) => ({

        // ================= PROJECTS LIST =================
        getProjects: builder.query({
            query: (params = {}) => {
                const searchParams = new URLSearchParams();

                Object.entries(params).forEach(([key, value]) => {
                    if (
                        value !== undefined &&
                        value !== null &&
                        value !== ""
                    ) {
                        searchParams.append(key, value);
                    }
                });

                return `/projects?${searchParams.toString()}`;
            },

            providesTags: (result) =>
                result?.data
                    ? [
                          ...result.data.map((project) => ({
                              type: "Projects",
                              id: project._id,
                          })),
                          { type: "Projects", id: "LIST" },
                      ]
                    : [{ type: "Projects", id: "LIST" }],
        }),

        // ================= CREATE PROJECT =================
        createProject: builder.mutation({
            query: (body) => ({
                url: "/projects",
                method: "POST",
                body,
            }),

            invalidatesTags: [{ type: "Projects", id: "LIST" }],
        }),

        // ================= SINGLE PROJECT =================
        getProject: builder.query({
            query: (id) => `/projects/${id}`,

            providesTags: (result, error, id) => [
                { type: "Projects", id },
            ],
        }),

        // ================= SINGLE PROJECT BY SLUG =================
        getProjectBySlug: builder.query({
            query: (slug) => `/projects/${slug}`,

            providesTags: (result, error, slug) => [
                { type: "Projects", id: slug },
            ],
        }),

        // ================= UPDATE PROJECT =================
        updateProject: builder.mutation({
            query: ({ id, data }) => ({
                url: `/projects/${id}`,
                method: "PUT",
                body: data,
            }),

            invalidatesTags: (result, error, { id }) => [
                { type: "Projects", id },
                { type: "Projects", id: "LIST" },
            ],
        }),

        // ================= DELETE PROJECT =================
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `/projects/${id}`,
                method: "DELETE",
            }),

            invalidatesTags: (result, error, id) => [
                { type: "Projects", id },
                { type: "Projects", id: "LIST" },
            ],
        }),
    }),
});

export const {
    useGetProjectsQuery,
    useCreateProjectMutation,
    useGetProjectQuery,
    useGetProjectBySlugQuery,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} = projectApi;