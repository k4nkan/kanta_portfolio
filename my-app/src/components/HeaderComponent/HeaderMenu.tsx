import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonAnimation } from "../Animations/Animations";

const HeaderMenu = () => {
  return (
    <div className="flex gap-[40px] text-xl pt-1">
      <Link href={"/#about"}>
        <motion.div {...ButtonAnimation}>About</motion.div>
      </Link>
      <Link href={"/#skills"}>
        <motion.div {...ButtonAnimation}>Skills</motion.div>
      </Link>
      <Link href={"/#product"}>
        <motion.div {...ButtonAnimation}>Product</motion.div>
      </Link>
      <Link href={"/gallery"}>
        <motion.div {...ButtonAnimation}>Gallery</motion.div>
      </Link>
      <Link href={"/links"}>
        <motion.div {...ButtonAnimation}>Links</motion.div>
      </Link>
    </div>
  );
};

export default HeaderMenu;
