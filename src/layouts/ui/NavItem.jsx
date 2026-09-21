import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";


const VARIANT = {
    NAV: "nav",
    DROPDOWN: "dropdown"
};

const styles = {
    nav: {
        base: "text-sm block cursor-pointer transition-colors duration-300 flex items-center",
        baseOpen: "justify-start gap-1",
        baseClose: "justify-center",
        activeOpen: "text-primary font-medium",
        activeClose: "text-primary font-medium",
        anActiveOpen: "text-subtitle hover:text-title",
        externalOpen: "text-subtitle hover:text-title justify-start gap-1",
        anActiveClose: "text-subtitle hover:text-title justify-start gap-1",
        externalClose: "text-subtitle hover:text-title justify-center",
    },
    dropdown: {
        base: "text-sm cursor-pointer transition-colors duration-300 rounded-md flex items-center overflow-hidden",
        baseOpen: "justify-start gap-2 px-2.5 py-1.5",
        baseClose: "justify-center",
        activeOpen: "text-primary font-medium bg-primary-soft",
        activeClose: "text-primary font-medium",
        anActiveOpen: "text-btn-secondary-text hover:bg-btn-secondary-hover",
        anActiveClose: "text-subtitle hover:text-title",
        externalOpen: "text-btn-secondary-text hover:bg-btn-secondary-hover justify-start gap-2 px-2.5 py-1.5",
        externalClose: "text-subtitle hover:text-title justify-center",
    }
};

const renderRoute = (item, variant, showIcon, toggleMobileMenu=undefined, open) => {
    const s = styles[variant];
    return (
        <NavLink
            key={item.id}
            to={item.to}
            onClick={toggleMobileMenu}
            className={({ isActive }) => `${s.base} ${open ? s.baseOpen : s.baseClose}
            ${isActive ? (open ? s.activeOpen : s.activeClose) : (open ? s.anActiveOpen : s.anActiveClose)}
            `
            }
        >
            {showIcon && item.icon &&
                <item.icon className={`${open ? "w-4 h-4" : "w-5 h-5"}`} />
            }
            {open && 
                <span className="truncate">{item.label}</span>
            }
        </NavLink>    
    );
};

const renderScroll = (item, variant, scrollActive, setScrollActive, toggleMobileMenu=undefined, showIcon, open) => {
    const s = styles[variant];
    return (
        <ScrollLink
            key={item.id}
            to={item.target}
            onClick={toggleMobileMenu}
            smooth={true}
            duration={500}
            spy={true}
            onSetActive={() => setScrollActive(item.target)}
            offset={-100} 
            className={`${s.base} ${open ? s.baseOpen : s.baseClose}
                ${scrollActive === item.target 
                    ? (open ? s.activeOpen : s.activeClose) 
                    : (open ? s.anActiveOpen : s.anActiveClose)}`}
        >
            {showIcon && item.icon &&
                <item.icon className={`${open ? "w-4 h-4" : "w-5 h-5"}`} />
            }
            {open && 
                <span className="truncate">{item.label}</span>
            }
        </ScrollLink>    
    );
};

const renderExternal = (item, variant, showIcon, toggleMobileMenu=undefined, open) => {
    const s = styles[variant];
    return(
        <a 
            key={item.id}
            onClick={toggleMobileMenu}
            href={item.href} 
            target="_blank" 
            rel="noreferrer noopener" 
            className={`${s.base} ${open ? s.externalOpen : s.externalClose}`}
        >
            {showIcon && item.icon &&
                <item.icon className={`${open ? "w-4 h-4" : "w-5 h-5"}`} />
            }
            {open && 
                <span className="truncate">{item.label}</span>
            }
        </a>    
    );
};

const renderItem = (item, variant, scrollActive, setScrollActive, toggleMobileMenu, showIcon, open) => {
    switch(item.type) {
        case "external": 
            return renderExternal(item, variant, showIcon, toggleMobileMenu, open);
        case "scroll": 
            return renderScroll(item, variant, scrollActive, setScrollActive, toggleMobileMenu, showIcon, open);
        case "route": 
            return renderRoute(item, variant, showIcon, toggleMobileMenu, open);
        default: 
            return null;
    }
};

export const DesktopNavItem = ({ item, scrollActive, setScrollActive, showIcon, open }) => {
    if(item.type === "group") {
        return (
            <div className="relative group">
                <button 
                    className="text-sm text-subtitle group-hover:text-title cursor-pointer flex items-center gap-1"
                >
                    {showIcon && item.icon &&
                        <item.icon className={`${open ? "w-4 h-4" : "w-5 h-5"}`} />
                    }
                    {!showIcon &&
                        <span className="truncate">{item.label}</span>
                    }
                </button>
                <div 
                    className={`absolute z-10 top-full ${!showIcon ? "ltr:right-2 rtl:left-2" : "mt-1 ltr:right-0.5 rtl:left-0.5"} 
                        w-4 h-4 rotate-45 bg-elevated 
                    opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                    group-hover:visible transition-all duration-300 ease-in-out border border-border`}
                />
                <div 
                    className={`absolute z-20 top-full 
                    ${!showIcon ? "mt-1 ltr:right-0 rtl:left-0" : "mt-2 ltr:-right-1.5 rtl:-left-1.5"}
                    w-52  px-2 py-2 bg-elevated border border-border rounded-xl flex flex-col gap-1
                    opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                    group-hover:visible transition-all duration-300 ease-in-out overflow-hidden`}
                >
                    {item.children.map((child) => (
                        <div key={child.id}>
                            {renderItem(child, VARIANT.DROPDOWN, scrollActive, setScrollActive, undefined, showIcon, true)} 
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        renderItem(item, VARIANT.NAV, scrollActive, setScrollActive, undefined, showIcon, open)
    );           
};

export const SidebarNavItem = ({item, scrollActive, setScrollActive, openMenu, toggleSubMenu, showIcon=false,
    open=true, toggleMobileMenu,
}) => {
    if(item.type === "group" && open) {
        return (
            <div key={item.id} className="overflow-hidden">
                <button 
                    onClick={() => toggleSubMenu(item.id)}
                    className={`px-3 text-sm py-1.5 text-btn-secondary-text flex justify-between
                    items-center w-full duration-300 cursor-pointer rounded-md
                    ${openMenu === item.id ? "text-title bg-btn-secondary-bg" 
                    : "hover:bg-btn-secondary-hover text-title"}`}
                    key={item.id}
                >
                    <div className="flex items-center gap-2">
                        {showIcon && item.icon &&
                            <item.icon size={16} />
                        }
                        <span className="truncate">{item.label}</span>
                    </div>
                    <ChevronRight 
                        size={16}
                        className={`transition-transform duration-300 
                        ${openMenu === item.id ? "rotate-90" : "ltr:rotate-0 rtl:rotate-180"}`}
                    />
                </button>
                <AnimatePresence initial={false}>
                    {openMenu === item.id && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ltr:pl-2 rtl:pr-2"
                        >
                            <div className="flex flex-col gap-1 pt-1">
                                {item.children.map((child) => (
                                    <div key={child.id}>
                                        {renderItem(
                                            child,
                                            VARIANT.DROPDOWN,
                                            scrollActive,
                                            setScrollActive,
                                            toggleMobileMenu,
                                            showIcon,
                                            open
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    }
    return (
        renderItem(item, VARIANT.DROPDOWN, scrollActive, setScrollActive, toggleMobileMenu, showIcon, open)
    );
};
