import { api } from "./api";

export const contactApi = api.injectEndpoints({
    endpoints: (builder) => ({

        // ================= CREATE CATEGORY =================
        sendContactEmail: builder.mutation({
            query: (body) => ({
                url: "/emails",
                method: "POST",
                body,
            }),
        }),

    }),
});

export const {
    useSendContactEmailMutation,
} = contactApi;