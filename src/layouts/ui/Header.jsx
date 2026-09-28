import { useState, useEffect } from "react";
import { Container, Button, Overlay } from "../../components/index"
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import UserAvatar from "./UserAvatar";
import MenuToggle from "./MenuToggle";

const Header = ({ 
    open, openMenu,toggleMobileMenu, toggleSubMenu, links, headerData, language, isEnglish, scrollActive, setScrollActive,
    handleOpenLogoutModal, user, isAuthenticated, isLoading, toggleLanguage, isArabic, toggleTheme, isDark,

}) => {
    const propsDesktopNav = {
      links, openMenu, toggleSubMenu, scrollActive, setScrollActive, isEnglish
    };
    const propsMobileNav = {
      links, open, openMenu, toggleSubMenu, scrollActive, setScrollActive, toggleMobileMenu,
      isAuthenticated, user, handleOpenLogoutModal, language, logoData: headerData?.logo,
      toggleLanguage, isArabic, toggleTheme, isDark, isEnglish,
    };
    const propsOverlay = {
        open,
        onClick: toggleMobileMenu,
    }
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
        transition-colors duration-150 ${isScrolled ? "bg-surface/85" : "bg-surface"}`}
        >
            <Overlay {...propsOverlay} />
            <Container className="h-full flex justify-between items-center">
                <Logo logoData={headerData?.logo}/>
                <DesktopNav {...propsDesktopNav} />
                <MobileNav {...propsMobileNav} />
                <div className="flex items-center gap-2">
                    <MenuToggle 
                        onClick={toggleMobileMenu}
                        className={"md:hidden"}
                    />
                    <ThemeToggle />
                    <LanguageToggle />
                    {(isAuthenticated && !isLoading) &&
                        <UserAvatar user={user} isEnglish={isEnglish} language={language} 
                            handleOpenLogoutModal={handleOpenLogoutModal}
                        />
                    }
                    <div className="h-9 rounded-2xl overflow-clip hidden md:block">
                        <Button 
                            variant="primary"
                            href="/files/Moatasem-Ezzeldin-SV.pdf"
                            download="Moatasem-Ezzeldin-SV.pdf"
                            className="h-full w-full px-4 inline-flex justify-center items-center text-sm rounded-2xl" 
                        >
                            {isArabic ? "تحميل CV" : "Download CV"}
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header