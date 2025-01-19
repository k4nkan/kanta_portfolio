import AccessLinks from "../../components/AccessLinks";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col justify-center h-screen mx-auto">
      <div className="text-center text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl px-4 py-3">
        Access Page
      </div>
      <div className="text-center text-[16px] md:text-lg lg:text-xl px-4 pb-7">
        各種SNSへのアクセスページです。
      </div>
      <AccessLinks
        icon={<FaGithub />}
        url="https://github.com/k4nkan"
        title="Github"
      />
      <AccessLinks
        icon={<FaFacebook />}
        url="https://www.facebook.com/profile.php?id=61558039312920"
        title="Facebook"
      />
      <AccessLinks
        icon={<FaInstagramSquare />}
        url="https://www.instagram.com/yamakan126?igsh=eDh6cWRuYmxxaWk4&utm_source=qr"
        title="Instagram"
      />
      <AccessLinks
        icon={<FaTwitterSquare />}
        url="https://x.com/caaantaaa?s=21"
        title="X (Twitter)"
      />
    </div>
  );
};

export default Home;
