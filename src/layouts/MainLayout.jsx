import { useState } from "react";
import { Header, Footer, MainOutlet } from "./ui/index";
import { useLanguage } from "../hooks/useLanguage"; 
import { useModal } from "../hooks/useModal"; 
import { useAuth } from "../hooks/useAuth"; 
import { useTheme } from "../hooks/useTheme"; 
import { mainLayoutData, navigation } from "../data/index";
import { ConfirmModal } from "../components/index";

const MainLayout = () => {
  const { toggleLanguage, language, isEnglish, isArabic } = useLanguage();
  const { toggleTheme, isDark } = useTheme();
  const { user, isAuth: isAuthenticated, role, isLoading } = useAuth();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrollActive, setScrollActive] = useState("hero");
  const toggleMobileMenu = ()=> {
      setOpen(prev => !prev);
      setOpenMenu(null);
  }
  const toggleSubMenu = (id) => {
      setOpenMenu((prev) => (prev === id ? null : id));
  };
  const { 
        confirmModal, handleCloseConfirmModal, handleOpenLogoutModal, 
        confirmModalLoading,  confirmModalError,
  } = useModal();
  // All Props
  const propsHeader = {
    open,
    openMenu,
    links: navigation[language][role],
    headerData: mainLayoutData[language].header,
    language, isEnglish,
    user, isAuthenticated, isLoading, 
    scrollActive, setScrollActive,
    handleOpenLogoutModal,
    toggleLanguage, isArabic, toggleTheme, isDark, 
    toggleMobileMenu,
    toggleSubMenu,
  };
  const propsFooter = {
    footerData: mainLayoutData[language]?.footer
  };
  const propsConfirmModal = {
    modal: confirmModal,
    onClose: handleCloseConfirmModal,
    isLoading: confirmModalLoading,
    error: confirmModalError,
    isEnglish,
  };
  return (
    <div className="min-h-screen flex flex-col bg-container">
      {/* Modal Logout */}
      <ConfirmModal {...propsConfirmModal} />
      <Header {...propsHeader} />
      <MainOutlet className={"flex-1"}/>
      <Footer {...propsFooter} />
    </div>
  )
}

export default MainLayout