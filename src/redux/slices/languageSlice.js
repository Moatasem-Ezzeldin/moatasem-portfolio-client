import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: localStorage.getItem("language") || "en",
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.lang = state.lang === "en" ? "ar" : "en";
        },
        setLanguage: (state, action) => {
            state.lang = action.payload;
        },
    },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;