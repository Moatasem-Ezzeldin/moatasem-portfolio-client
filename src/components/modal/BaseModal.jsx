import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
// import Overlay from "../ui/Overlay";

const BaseModal = ({
  isOpen,
  onClose,
  isLoading = false,
  className= "",
  children,
}) => {
    const handleClose = () => {
        if (!isOpen || isLoading) return;
        onClose?.();
    };

    // Scrool
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

    // Esc زر للاغلاق
    useEffect(() => {
        if (!isOpen || isLoading) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
            onClose?.();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, isLoading, onClose]);

    return (
        <AnimatePresence>
        {isOpen && (
            <motion.div 
                onClick={handleClose}
                className="fixed inset-0 z-50 bg-black/5 backdrop-blur-xs overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
            
                <div className="min-h-screen flex justify-center items-center py-10 px-4">
                {/* Modal */}
                <motion.div
                    className={`bg-elevated border border-border p-4 md:p-6 shadow-lg
                    flex flex-col gap-4 overflow-hidden ${className}`}
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 16 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </motion.div>
                </div>
            </motion.div >
        )}
        </AnimatePresence>
    );
};

export default BaseModal;