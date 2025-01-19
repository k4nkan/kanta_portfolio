import { motion } from "framer-motion";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <div className="flex gap-[40px] text-xl">
      <Link href={"/"}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          Top
        </motion.div>
      </Link>
      <Link href={"/gallery"}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          Gallery
        </motion.div>
      </Link>
      <Link href={"/access"}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          Access
        </motion.div>
      </Link>
    </div>
  );
};

export default HeaderMenu;
