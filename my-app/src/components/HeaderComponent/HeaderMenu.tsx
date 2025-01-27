import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonAnimation } from "../Animations/Animations";

const HeaderMenu = () => {
  return (
    <div className="flex gap-[40px] text-xl pt-1">
      <Link href={"/"}>
        <motion.div {...ButtonAnimation}>Top</motion.div>
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
