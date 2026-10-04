import { motion } from "motion/react";
import {boxMotion} from '../../animations/boxMotion'

const SkeletonBox = ({ className = "" }) => {
  const lang = document.documentElement.lang
  return (
    <div  className={`relative overflow-hidden bg-skeleton-bg ${className}`}>
      <motion.div
        {...boxMotion(lang)}
        className="absolute inset-0 bg-skeleton-bg bg-gradient-to-r from-skeleton-bg via-skeleton-shimmer 
         to-skeleton-bg bg-[length:200%_100%]"
      />
    </div>
  );
};

export default SkeletonBox;