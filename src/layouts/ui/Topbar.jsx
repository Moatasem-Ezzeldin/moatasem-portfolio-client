import Logo from "./Logo";
import MenuToggle from "./MenuToggle"
import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"
import UserAvatar from "./UserAvatar"

const Topbar = ({ open, toggleMobileMenu, user, isAuth, isEnglish }) => {
  return (
    <div 
        className='bg-surface h-16 border-b border-border shadow-md flex items-center 
        justify-between px-4 md:px-6 lg:px-8'
    >
        <div className={`${open ? "opacity-0" : "opacity-100"} transition-opacity duration-100 ease-in`}>
            <Logo />
        </div>
        <div className="flex items-center gap-2">
            <MenuToggle className={"md:hidden"} onClick={toggleMobileMenu} />
            <ThemeToggle />
            <LanguageToggle />
            {isAuth && <UserAvatar user={user} isEnglish={isEnglish}/> }
        </div>
    </div>
  )
}

export default Topbar