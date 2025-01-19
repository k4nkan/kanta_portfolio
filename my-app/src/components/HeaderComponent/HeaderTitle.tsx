import { motion } from "framer-motion";
import Link from "next/link";

const HeaderTitle = () => {
  return (
    <Link href={"/"}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-3xl"
      >
        Kanta Yamauchi
      </motion.div>
    </Link>
  );
};

export default HeaderTitle;
