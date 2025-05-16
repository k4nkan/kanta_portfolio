import { motion } from "framer-motion";
import { TopButtonAnimation } from "../Animations/Animations";

export const TopButton = () => (
  <motion.a
    {...TopButtonAnimation}
    href="/#firstview"
    className="flex items-center justify-center fixed w-12 h-12 bottom-6 right-6 z-10 rounded-full bg-white border-2 border-black"
  >
    TOP
  </motion.a>
);
