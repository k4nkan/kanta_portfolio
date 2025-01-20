import AccessLinks from "../../components/AccessLinks";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center" style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="text-center text-4xl">Access Page</div>
      <div className="text-center text-xl">各種SNSへのアクセスページです</div>
      <div className="grid gap-3 items-center w-4/5 max-w-[300px] md:grid-cols-2 md:max-w-[800px]">
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
    </div>
  );
};

export default Home;
