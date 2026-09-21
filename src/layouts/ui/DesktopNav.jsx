import {DesktopNavItem, SidebarNavItem} from "./NavItem";
import { MoreHorizontal } from "lucide-react";

const DesktopNav = ({ links, openMenu, toggleSubMenu, scrollActive, setScrollActive, isEnglish }) => {
  const mainLimit = 5;
  const mainLinks = links.slice(0, mainLimit);
  const moreLinks = links.slice(mainLimit);
  const showLabel = true; // if you need icon only set showLabel = false

  return (
    <nav className={`hidden md:flex items-center gap-4`}>
      {mainLinks.length > 0 &&
        mainLinks.map((link) => (
          <DesktopNavItem key={link.id} item={link} scrollActive={scrollActive} open={showLabel}
            setScrollActive={setScrollActive} showIcon={!showLabel}
          />
        ))
      }
      {moreLinks.length > 0 && 
        <div className="relative group ">
              <button 
                  className="text-sm text-subtitle group-hover:text-title cursor-pointer flex gap-0"
              >
                  { !showLabel &&
                    <MoreHorizontal className={`rotate-90 ${showLabel ? "w-4 h-4" : "w-5 h-5"}`}/>
                  }
                  { showLabel &&
                    <span>{isEnglish ? "More" : "أكثر"}</span>
                  }
              </button>
              <div 
                  className={`absolute z-10 top-full ${showLabel ? "ltr:right-2 rtl:left-2" : "mt-1 ltr:right-0.5 rtl:left-0.5"}
                  w-4 h-4 rotate-45 bg-elevated opacity-0 invisible translate-y-2 group-hover:opacity-100 
                  group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border border-border`}
              />
              <div 
                  className={`absolute z-20 top-full w-52 py-2 px-2 bg-elevated border
                  ${showLabel ? "mt-1 ltr:right-0 rtl:left-0" : "mt-2 ltr:-right-1.5 rtl:-left-1.5"}
                  border-border rounded-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                  group-hover:visible transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-1`}
              >
                  {moreLinks.map((link) => (
                    <SidebarNavItem key={link.id} item={link} scrollActive={scrollActive} setScrollActive={setScrollActive}
                      openMenu={openMenu} toggleSubMenu={toggleSubMenu} showIcon={!showLabel}
                    />
                  ))}
              </div>
          </div>
      }
    </nav>
  )
}

export default DesktopNav