import { Dropdown, Button, ConfirmModal } from "../../components/index";
import { useState, useEffect, useRef } from "react";
import { User, LogOut } from "lucide-react";
import { useModal } from "../../hooks/useModal";
import { useNavigate } from "react-router-dom";

const UserAvatar = ({ user=null, isEnglish, language }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const { 
        confirmModal, handleCloseConfirmModal, handleOpenLogoutModal, 
        confirmModalLoading,  confirmModalError,
    } = useModal();
    const handleToggleMenu = () => {
        setOpen((priv) => !priv);
    };
    const handleGoProfile = () => {
        setOpen(false);
        navigate("/dashboard/profile");
    };
    const handleGoLogout = () => {
        setOpen(false);
        handleOpenLogoutModal(language);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
            menuRef.current &&
            !menuRef.current.contains(event.target)
            ) {
            setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div ref={menuRef} className="relative hidden md:flex ">
            <Button
                variant="secondary"
                onClick={handleToggleMenu}
                className={`w-8 h-8 rounded-full hover:text-primary border border-border
                overflow-hidden transition-colors duration-200 ${open && "text-primary"}
                `}
            >
                {user?.avatar?.url 
                    ? (
                    <img src={user.avatar.url} alt="profile" className="w-full h-full object-cover " />
                    )
                    : (
                    <User className="" size={16}/>
                    )
                }
            </Button>
            <Dropdown open={open} arrow={true}
                classNameBase="z-10 bg-elevated border border-border"
                className="rounded-xl w-64"
            >
                <div className="px-3 py-6 flex flex-col gap-4">
                    {/* Avatar */}
                    <div className="flex justify-center items-center">
                        <div
                            className="w-20 h-20 rounded-full bg-btn-secondary-bg text-primary flex 
                            justify-center items-center overflow-hidden"
                        >
                            {user?.avatar
                                ? (
                                <img src={user.avatar.url} alt="profile" className="w-full h-full object-cover" />
                                )
                                : (
                                <User size={40}/>
                                )
                            }
                        </div>
                    </div>
                    {/* name email role */}
                    <div className="text-sm flex flex-col gap-1.5 text-title">
                        <div className="flex items-center gap-1 flex-wrap"> 
                            <span className="">{isEnglish ? "Name:" : "الاسم:"}</span>
                            <span className="text-subtitle">{user?.name}</span>
                        </div>
                        <div className="flex items-center gap-1 flex-wrap"> 
                            <span className="">{isEnglish ? "Email:" : "الايميل:"}</span>
                            <span className="text-subtitle">{user?.email}</span>
                        </div>
                        <div className="flex items-center gap-1 flex-wrap"> 
                            <span className="">{isEnglish ? "Role:" : "المستخدم:"}</span>
                            <span className="text-subtitle">{user?.role}</span>
                        </div>
                    </div>
                    {/* Dashed _ _ _ */}
                    <hr className="border-dashed border-muted my-3" />
                    <div className="flex flex-col gap-2">
                        <Button 
                            onClick={handleGoProfile}
                            variant="primary"
                            className="w-full h-10 flex items-center gap-2 rounded-md px-4 text-sm font-medium overflow-hidden"
                        >
                            <User size={16}/>
                            {isEnglish ? "Profile:" : "الملف الشخصي"}
                        </Button>
                        <Button 
                            onClick={handleGoLogout}
                            variant="destructive"
                            className="w-full h-10 flex items-center gap-2 rounded-md px-4 text-sm font-medium overflow-hidden"
                        >
                            <LogOut size={16} className="rtl:rotate-180"/>
                            {isEnglish ? "Logout:" : "تسجيل خروج"}
                        </Button>
                    </div>
                </div>
            </Dropdown>
            <ConfirmModal modal={confirmModal} onClose={handleCloseConfirmModal} 
                isLoading={confirmModalLoading} error={confirmModalError} isEnglish={isEnglish}
            />
        </div>
    )
}

export default UserAvatar