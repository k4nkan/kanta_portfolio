import { motion } from "framer-motion";
import AccessLinks from "../../components/AccessLinks";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LinksAnimation } from "../../components/Animations/Animations";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <div
      className="flex flex-col gap-4 justify-center items-center pt-[65px]"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <div className="text-center text-4xl">Links Page</div>
      <div className="text-center text-xl">各種SNSへのリンクです</div>
      <div className="grid w-4/5 max-w-[300px] md:max-w-[800px]">
        <motion.span {...LinksAnimation}>
          <AccessLinks
            icon={<IoMdMail />}
            url="https://mail.google.com/mail/?view=cm&fs=1&to=kanta.y.0126@gmail.com"
            title="Gmail"
          />
        </motion.span>
      </div>
      <div className="grid gap-4 items-center w-4/5 max-w-[300px] md:grid-cols-2 md:max-w-[800px]">
        <motion.span {...LinksAnimation}>
          <AccessLinks
            icon={<FaGithub />}
            url="https://github.com/k4nkan"
            title="Github"
          />
        </motion.span>
        <motion.span {...LinksAnimation}>
          <AccessLinks
            icon={<FaFacebook />}
            url="https://www.facebook.com/profile.php?id=61558039312920"
            title="Facebook"
          />
        </motion.span>
        <motion.span {...LinksAnimation}>
          <AccessLinks
            icon={<FaInstagramSquare />}
            url="https://www.instagram.com/yamakan126?igsh=eDh6cWRuYmxxaWk4&utm_source=qr"
            title="Instagram"
          />
        </motion.span>
        <motion.span {...LinksAnimation}>
          <AccessLinks
            icon={<FaSquareXTwitter />}
            url="https://x.com/caaantaaa?s=21"
            title="X (Twitter)"
          />
        </motion.span>
      </div>
    </div>
  );
};

export default Home;
