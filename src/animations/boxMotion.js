export const boxMotion = (lang) => ({
  animate: {
    backgroundPositionX:
      lang === "ar" ? ["-100%", "100%"] : ["100%", "-100%"],
    transition: {
      backgroundPositionX: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.2,
        ease: "linear",
      },
    },
  },
});