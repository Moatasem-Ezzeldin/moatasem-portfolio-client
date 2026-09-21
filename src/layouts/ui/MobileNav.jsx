import Logo from "./Logo";
import { User, LogOut, PanelLeftClose, Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../hooks/useLanguage";
import { SidebarNavItem } from "./NavItem";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/index";

const MobileNav = ({ links, open, openMenu, toggleMobileMenu, toggleSubMenu, scrollActive, setScrollActive, 
  user, isAuthenticated, handleOpenLogoutModal
}) => {
  const navigate = useNavigate();
  const { toggleTheme, isDark } = useTheme();
  const { toggleLanguage, isArabic, isEnglish, language } = useLanguage();
  const handleGoProfile = () => {
    navigate("/dashboard/profile");
  };
  return (
    <aside 
      className={`h-screen bg-surface flex flex-col z-49 fixed duration-300 ltr:left-0 rtl:right-0 
      top-0 md:hidden transition-transform ease-in-out w-60 shadow-md 
      ${open ? "translate-x-0" : "ltr:-translate-x-full rtl:translate-x-full"}`}
    >
      {/* Header */}
      <header className={`h-16 py-2 px-3 justify-between border-b 
        border-border flex  items-center`}
      >
        <div 
          className={`
            flex items-center gap-1
            overflow-hidden whitespace-nowrap
            transition-all duration-300
            ${open
              ? "max-w-40 opacity-100 translate-x-0"
              : "max-w-0 opacity-0 ltr:-translate-x-4 rtl:translate-x-4"
            }
          `}
        >
          <Logo />
        </div>
        <PanelLeftClose 
          onClick={toggleMobileMenu}
            className={`w-6 h-6 text-subtitle hover:text-title cursor-pointer
            ${open && "ltr:rotate-360 rtl:-rotate-180"}`}
        />
      </header>
      {/* Body */}
      <nav className="flex-1 overflow-y-auto flex flex-col gap-1 px-3 my-4">
        {links.map((link) => (
          <SidebarNavItem key={link.id} item={link} scrollActive={scrollActive} setScrollActive={setScrollActive}
            openMenu={openMenu} toggleSubMenu={toggleSubMenu} showIcon={true} toggleMobileMenu={toggleMobileMenu}
          />
        ))}
      </nav>
      {/* theme & language */}
      <div className="flex flex-col gap-2 px-3 mb-4">
        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="
            w-full h-9 px-3
            rounded-md
            bg-btn-secondary-bg
            hover:bg-btn-secondary-hover
            transition-colors duration-300
            flex items-center justify-between
            cursor-pointer
          "
        >
          <Sun 
            size={16} 
            className={`transition-colors duration-200 ${isDark ? "text-btn-secondary-text" : "text-primary"}`}
          />

          <span
            className="
              relative w-10 h-5
              rounded-full
              bg-btn-secondary-disabled
            "
          >
            <span
              className={
                `absolute top-0.5
                w-4 h-4
                rounded-full
                bg-primary shadow-sm
                transition-all duration-300 ease-in-out
                ${
                  isDark
                    ? "ltr:left-5 rtl:right-5"
                    : "ltr:left-0.5 rtl:right-0.5"
                }`
              }
            />
          </span>

          <Moon 
            size={16} 
             className={`transition-colors duration-200 ${isDark ? "text-primary" : "text-btn-secondary-text"}`}
          />
        </button>
        {/* Language */}
        <button
          onClick={toggleLanguage}
          className="
            w-full h-9 px-3
            rounded-md
            bg-btn-secondary-bg
            hover:bg-btn-secondary-hover
            transition-colors duration-300
            flex items-center justify-between
            cursor-pointer
          "
        >
          <span
            className={
              `transition-all duration-200 text-sm
              ${isEnglish ? "text-primary" : "text-btn-secondary-text"}`
            }
          >
            {isArabic ? "ك" : "EN"}
          </span>

          <span
            className="
              relative w-10 h-5
              rounded-full
              bg-btn-secondary-disabled
            "
          >
            <span
              className={
                `absolute top-0.5
                w-4 h-4
                rounded-full
                bg-primary shadow-sm
                transition-all duration-300 ease-in-out
                ${
                  isArabic
                    ? "ltr ltr:left-5 rtl:right-5"
                    : "ltr ltr:left-0.5 rtl:right-0.5"
                }`
              }
            />
          </span>

          <span
            className={
              `transition-all duration-200 text-sm
              ${isArabic ? "text-primary" : "text-btn-secondary-text"}`
            }
          >
            {isArabic ? "ع" : "AR"}
          </span>
        </button>
      </div>
      {/* Footer */}
      {isAuthenticated &&
        <div className="min-h-16 border-t border-border px-3 py-2.5 flex items-center">
            {isAuthenticated &&
              <div className="flex flex-col gap-3 items-center w-full">
                <div 
                  onClick={handleGoProfile}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
                  hover:bg-primary-soft transition-colors duration-300`}
                >
                    {/* icon */}
                    <div 
                      className="w-8 h-8 text-sm rounded-full flex justify-center items-center 
                      text-primary transition-all duration-300 cursor-pointer bg-btn-secondary-bg 
                      border border-border overflow-hidden"
                    >
                      {user?.avatar?.url 
                        ? (
                          <img src={user.avatar.url} alt="Avatar" className="w-full h-full object-cover" />
                        )
                        : (
                          <User size={16}/>
                        )
                      }
                    </div>
                    {/* user info */}
                    <div
                    className={`flex flex-col leading-tight overflow-hidden whitespace-nowrap transition-all duration-300
                      ${open
                        ? "max-w-40 opacity-100 translate-x-0"
                        : "max-w-0 opacity-0 ltr:-translate-x-4 rtl:translate-x-4"
                      }
                    `}
                    >
                    <span className="text-xs font-medium text-title truncate">
                        {user?.name || "Moatasem Ezzeldin"}
                    </span>
                    <span className="text-[11px] text-subtitle truncate">
                        {user?.email || "moutasem083@gmail.com"}
                    </span>
                    </div>
                </div>
                <Button 
                  onClick={() => handleOpenLogoutModal(language)}
                  variant="destructive"
                  className="w-full h-10 flex items-center gap-2 rounded-md px-4 text-sm font-medium overflow-hidden"
                >
                    <LogOut size={16} className="rtl:rotate-180"/>
                    Logout
                </Button>
              </div>           
            }
        </div>
      }
    </aside>
  )
}

export default MobileNav