const IconsAnimationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, rotate: 360 },
  exit: { opacity: 0 },
};

export const IconsAnimation = {
  variants: IconsAnimationVariants,
  initial: "hidden",
  animate: "visible",
  exit: "exit",
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
  transition: { duration: 0.1 },
};

const MenuAnimationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const MenuAnimation = {
  variants: MenuAnimationVariants,
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};

const PopupAnimationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const PopupAnimation = {
  variants: PopupAnimationVariants,
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};

export const LinksAnimation = {
  whileHover: {
    scale: 1.05,
    opacity: 1,
    color: "#ffffff",
    background: "#000000",
    borderRadius: "0.75rem",
  },
  whileTap: { scale: 0.9 },
  initial: { opacity: 1, borderRadius: "0.75rem" },
  color: "#dc3545",
};

export const TopButtonAnimation = {
  whileHover: {
    scale: 1.05,
    opacity: 1,
    color: "#ffffff",
    background: "#000000",
  },
  whileTap: { scale: 0.9 },
  initial: { opacity: 1 },
  color: "#dc3545",
};

export const ImageAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const ButtonAnimation = {
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
};

export const MoreAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const BigButtonAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.9 },
};
