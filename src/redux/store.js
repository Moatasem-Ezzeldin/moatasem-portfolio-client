import { configureStore } from '@reduxjs/toolkit';

// ============================
// Slices ثابتة
// ============================

import themeReducer from './slices/themeSlice';
import languageReducer from './slices/languageSlice';

// ============================
// اختار API واحد فقط
// ============================

import { api } from './api/api';


export const store = configureStore({
  reducer: {
    // Slices
    theme: themeReducer,
    language: languageReducer,
    // =================================================
    // API
    [api.reducerPath]: api.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // API
      .concat(api.middleware),

      devTools: import.meta.env.VITE_APP_MODE !== "production",
});