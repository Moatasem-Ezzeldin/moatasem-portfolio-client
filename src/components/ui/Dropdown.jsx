import { AnimatePresence, motion } from "motion/react";

const Dropdown = ({ children,arrow=false, open=false,classNameBase="", className="" }) => {
  return (
    <AnimatePresence>
                {open && (
                    <>
                    {arrow &&
                        <motion.div 
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute top-full mt-1 ltr:right-2 rtl:left-2 w-4 h-4 rotate-45 
                                ${classNameBase} 
                            `}
                        />
                    }
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.3 }}
                            className={`
                                absolute top-full mt-2 ltr:right-0 rtl:left-0
                                ${classNameBase} ${className}
                            `}
                        >
                            {children}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
  )
}

export default Dropdown