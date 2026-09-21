import { User, Sun, Moon, LogOut, PanelLeftClose } from "lucide-react";
import Logo from "./Logo";
import { SidebarNavItem } from "./NavItem"
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "../../components/index";
import { useState } from "react";

const Sidebar = ({ links, open, openMenu, toggleMobileMenu, toggleSubMenu, scrollActive, setScrollActive,
    handleOpenLogoutModal, user, isAuthenticated, isArabic, isEnglish, toggleLanguage, toggleTheme, isDark, language
 }) => {
    const [tooltip, setTooltip] = useState(null);
    const navigate = useNavigate();
    const handleGoProfile = () => {
        toggleMobileMenu();
        navigate("/dashboard/profile");
    };
    const handleNavClick = () => {
        if(window.innerWidth < 768) {
            toggleMobileMenu();
        }
    }
    const navItemProps = {
        scrollActive, setScrollActive, openMenu,
        toggleSubMenu, showIcon: true, open
    }
    return (
        <aside
            className={`
                fixed md:static top-0 ltr:left-0 rtl:right-0 z-49 border-border h-screen bg-surface
                ltr:border-r rtl:border-l flex flex-col transition-[width] duration-300 ease-in-out
                ${open ? "w-60" 
            :"w-0 md:w-16 ltr:border-r-0 rtl:border-l-0 md:ltr:border-r md:rtl:border-l overflow-hidden md:overflow-visible"
                }
            `}
        >
            {/* Header */}
            <header className={`h-16 border-b border-border flex items-center
            ${open ? "justify-between px-3" : "justify-center"}`}
            >
                <div 
                    className={`
                        overflow-hidden whitespace-nowrap transition-[width,opacity] duration-300 ease-in-out
                        ${open
                            ? "w-auto opacity-100 "
                            : "w-0 opacity-0"
                        }
                    `}
                >
                    <Logo />
                </div>
                <PanelLeftClose onClick={toggleMobileMenu}
                    className={`w-6 h-6 text-subtitle hover:text-title transition-transform duration-300 cursor-pointer
                    ${open ? "ltr:rotate-360 rtl:-rotate-180" : "ltr:rotate-180 rtl:rotate-0"}`}
                />
            </header>
            {/* Body */}
            <nav className={`flex-1 flex flex-col px-3 my-4 overflow-y-auto overflow-x-hidden
                ${open ? "gap-1" : "gap-4"}`}>
                
                {links.map((link) => {
                    if(link.type === "group") {
                        return (
                            <SidebarNavItem key={link.id} item={link} toggleMobileMenu={handleNavClick} {...navItemProps}/>
                        );
                    }
                    return (
                        <div 
                            key={link.id}
                            onMouseEnter={(e) => {
                                if (open) return;

                                const rect = e.currentTarget.getBoundingClientRect();
                                const isRTL = document.documentElement.dir === "rtl";

                                setTooltip({
                                text: link.label,
                                x: isRTL ? (window.innerWidth - rect.left + 18) : (rect.right + 18),
                                y: rect.top + rect.height / 2,
                                rtl: isRTL 
                                });
                            }}
                            onMouseLeave={() => setTooltip(null)}
                        >
                            <SidebarNavItem item={link} toggleMobileMenu={handleNavClick} {...navItemProps} />
                        </div>
                    )
                })}
            </nav>
            {/* theme & language */}
            <div className="flex flex-col gap-2 px-3 mb-4 md:hidden">
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
            {/* footer */}
            {isAuthenticated &&
                <div className={`min-h-16 border-t border-border px-3 py-2.5  flex items-center
                    md:hidden overflow-hidden`}>
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
                                border border-border shrink-0 overflow-hidden"
                                >
                                {user?.avatar?.url 
                                    ? (
                                    <img src={user.avatar.url} alt="Avatar" loading="lazy" className="w-full h-full object-cover" />
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
                                    ? "max-w-40 opacity-100 "
                                    : "max-w-0 opacity-0 "
                                }
                                `}
                                >
                                <span className="text-xs font-medium text-title truncate">
                                    {user?.name}
                                </span>
                                <span className="text-[11px] text-subtitle truncate">
                                    {user?.email}
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
            {/* tooltip */}
            {!open && (
                <Tooltip tooltip={tooltip} />
            )}
        </aside>
    )
}

export default Sidebar