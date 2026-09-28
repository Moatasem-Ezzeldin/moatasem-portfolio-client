import { motion } from "motion/react";

const SectionTitle = ({ title }) => {
    return (
        <div className="flex flex-col items-center mb-10 overflow-hidden">

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className="
                    text-3xl md:text-4xl
                    font-bold
                    text-title
                    text-center
                "
            >
                {title}
            </motion.h2>

            {/* Decoration */}
            <div className="flex items-center mt-3">

                {/* Left line */}
                <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 48, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    className="h-[2px] bg-primary"
                />

                {/* Dot */}
                <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.3,
                        delay: 0.5,
                        ease: "backOut",
                    }}
                    className="
                        mx-2
                        w-2 h-2
                        rounded-full
                        bg-primary
                    "
                />

                {/* Right line */}
                <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 48, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    className="h-[2px] bg-primary"
                />

            </div>
        </div>
    );
};

export default SectionTitle;