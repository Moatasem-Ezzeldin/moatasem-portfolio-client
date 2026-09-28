import { dashboardLayoutData } from "../data/index";
import Topbar from "./ui/Topbar";
import Sidebar from "./ui/Sidebar";
import {Overlay, ConfirmModal} from "../components/index";
import MainOutlet from "./ui/MainOutlet";
import { useState } from "react";
import navigation from "../data/linksData/navigation";
import { useAuth } from "../hooks/useAuth";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import { useModal } from "../hooks/useModal";


const DashboardLayout = () => {
  const [open, setOpen] = useState(() => window.innerWidth >= 991);
  const { user, isAuth, role } = useAuth();
  const { language, isEnglish, isArabic, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { 
    confirmModal, handleCloseConfirmModal, handleOpenLogoutModal, 
    confirmModalLoading,  confirmModalError,
  } = useModal();
  const [openMenu, setOpenMenu] = useState(null);
  const [scrollActive, setScrollActive] = useState("");
  const toggleMobileMenu = ()=> {
    setOpen(prev => !prev);
    setOpenMenu(null);
  }
  const toggleSubMenu = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };
  // All Props
  const propsSidebar = {
    links: navigation[language][role], open, openMenu, toggleMobileMenu, toggleSubMenu, scrollActive, setScrollActive,
    user, isAuthenticated: isAuth, handleOpenLogoutModal, isDark, toggleTheme, isEnglish, isArabic, toggleLanguage,
    language,  sidebarData: dashboardLayoutData[language]?.sidebar,  
  };
  const propsTopbar = {
    open, toggleMobileMenu, user, isAuth, isEnglish, topbarData: dashboardLayoutData[language]?.topbar,
    handleOpenLogoutModal,
  };
  const propsConfirmModal = {
    modal: confirmModal,
    onClose: handleCloseConfirmModal,
    isLoading: confirmModalLoading,
    error: confirmModalError,
    isEnglish,
  };
  return (
    <div className='flex h-screen '>
        <Sidebar {...propsSidebar} />
        <div className="flex flex-col flex-1 relative">
            <Overlay open={open} onClick={toggleMobileMenu} />
            <Topbar {...propsTopbar} />
            <MainOutlet className={"flex-1 overflow-y-auto px-4 py-6 md:px-6 lg:px-8 lg:py-8 bg-container"} />
            <ConfirmModal {...propsConfirmModal} />
        </div>
    </div>
  )
}

export default DashboardLayout