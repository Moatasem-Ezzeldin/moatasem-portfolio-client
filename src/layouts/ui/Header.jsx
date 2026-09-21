import { useState, useEffect } from "react";
import { Container, ConfirmModal, Overlay } from "../../components/index"
import { useAuth } from "../../hooks/useAuth"
import { useModal } from "../../hooks/useModal"
import navigation from "../..//data/linksData/navigation";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import UserAvatar from "./UserAvatar";
import MenuToggle from "./MenuToggle";

const Header = ({ language, isEnglish }) => {
    // User and Prop.. user
    const { user, isAuth: isAuthenticated, role, isLoading } = useAuth();
    const { 
        confirmModal, handleCloseConfirmModal, handleOpenLogoutModal, 
        confirmModalLoading,  confirmModalError,
    } = useModal();
    // Links and routes
    const links = navigation[language][role];
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
    // On Scroll
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <header 
        className={`bg-surface h-16 fixed top-0 left-0 right-0 z-30 border-b border-border
        transition-shadow duration-150 ${isScrolled ? " shadow-md" : ""}`}
        >
            <Overlay open={open} onClick={toggleMobileMenu} />
            {/* Modal Logout */}
            <ConfirmModal modal={confirmModal} onClose={handleCloseConfirmModal} 
                isLoading={confirmModalLoading} error={confirmModalError} isEnglish={isEnglish}
            />
            <Container className="h-full flex justify-between items-center">
                <Logo isEnglish={isEnglish} />
                <DesktopNav 
                    links={links} openMenu={openMenu} toggleSubMenu={toggleSubMenu} 
                    scrollActive={scrollActive} setScrollActive={setScrollActive}
                    isEnglish={isEnglish}
                />
                <MobileNav 
                    links={links} open={open} openMenu={openMenu} toggleMobileMenu={toggleMobileMenu} 
                    toggleSubMenu={toggleSubMenu} scrollActive={scrollActive} setScrollActive={setScrollActive}
                    isAuthenticated={isAuthenticated} user={user} handleOpenLogoutModal={handleOpenLogoutModal}
                    language={language}
                />
                <div className="flex items-center gap-2">
            <MenuToggle 
              onClick={toggleMobileMenu}
              className={"md:hidden"}
            />
            <ThemeToggle className="" />
            <LanguageToggle className="" />
            {(isAuthenticated && !isLoading) &&
              <UserAvatar user={user} isEnglish={isEnglish} language={language}/>
            }
          </div>
            </Container>
        </header>
    )
}

export default Header