import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage, toggleLanguage } from "../redux/slices/languageSlice";

export const useLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector( (state) => state.language.lang );
  const isArabic = language === "ar";
  const isEnglish = language === "en";

  const toggle = () => dispatch(toggleLanguage());
  const changeLanguage = (value) => dispatch(setLanguage(value));
  
  // apply to DOM and save
  useEffect(() => {
    if(!language) return;
    const direction = language === "ar" ? "rtl" : "ltr";
    const root = document.documentElement;
    root.lang = language;
    root.dir = direction;
    localStorage.setItem("language", language);
  }, [language]);

  return { language, isArabic, isEnglish, setLanguage: changeLanguage, toggleLanguage: toggle };
};