import AccessLinks from "../../components/AccessLinks";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="text-center text-2xl md:text-3xl lg:text-4xl p-4">Access Page</div>
      <div className="px-5">
        <AccessLinks
          icon={<FaGithub />}
          url="https://github.com/k4nkan"
          title="Github"
        />
      </div>
    </div>
  );
};

export default Home;
