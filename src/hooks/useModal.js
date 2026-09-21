import { useState } from "react";

const initialConfirmModalState = {
    isOpen: false,
    action: "",
    title: "",
    description: "",
    btnText: "",
    onConfirm: null,
};

export const useModal = () => {
    // Start Confirm Modal***************************************************************************************
    // Confirm Modal init and close
    const [confirmModal, setConfirmModal] = useState(initialConfirmModalState);
    const handleCloseConfirmModal = () => {
        setConfirmModal(initialConfirmModalState)
    };
  
    // Logout
    const logoutLoading = false;
    const logoutError = false;
    const handleConfirmLogout = () => {
        console.log("LOGOUT: TRUE")
    };
    const handleOpenLogoutModal = (language="en") => {
        setConfirmModal({
            isOpen: true,
            action: "logout",
            title: language === "ar" ? "تسجيل خروج" : "Logout",
            description: language === "ar" ? "هل أنت متأكد من أنك تريد أن تسجل خروجك؟" : "Are you sure you want to logout?",
            btnText: language === "ar" ? "تسجيل خروج" : "Logout",
            onConfirm: handleConfirmLogout,
        });
    };
    // Confirm Modal Status Error and Loading
    const modalStates = {
        "logout": {
            loading: logoutLoading,
            error: logoutError,
        },
    };
    // Loading
    const confirmModalLoading = modalStates[confirmModal.action]?.loading ?? false;
    // Error
    const confirmModalError = modalStates[confirmModal.action]?.error?.data?.message ?? null;
    // End Confirm Modal*****************************************************************************************

    return {
        // Modal State
        confirmModal,
    
        // Start Modal Action Open And Close *****************************************************
        // Confirm
        handleCloseConfirmModal,
        handleOpenLogoutModal,
        confirmModalLoading,
        confirmModalError,
    };
};