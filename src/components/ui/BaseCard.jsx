import { motion } from "motion/react";

const BaseCard = ({ children, className }) => {
  return (
    <motion.div 
        initial={{
            opacity: 0,
            y: 40,
            scale: 0.96,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
        }}
        viewport={{
            once: true,
            amount: 0.25,
        }}
        transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        }}
        className={`transition-all duration-300 ease-in-out ${className}`}
        >
            {children}
        </motion.div>
  )
}

export default BaseCard