import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme, toggleTheme } from "../redux/slices/themeSlice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector( (state) => state.theme.mode );
  const isDark = theme === "dark";
  const isLight = theme === "light";

  const toggle = () => dispatch(toggleTheme());
  const changeTheme = (value) => dispatch(setTheme(value));
  
  // apply to DOM and save
  useEffect(() => {
    if(!theme) return;
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme, isDark]);

  return { theme, isLight, isDark, setTheme: changeTheme, toggleTheme: toggle };
};