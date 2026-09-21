import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import {store} from "./redux/store.js";
import { Provider } from "react-redux";

const savedTheme = localStorage.getItem("theme") || "light";
const savedLanguage = localStorage.getItem("language") || "en";
const direction = savedLanguage === "ar" ? "rtl" : "ltr";
const root = document.documentElement;
root.classList.toggle("dark", savedTheme === "dark");
root.lang = savedLanguage;
root.dir = direction;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
