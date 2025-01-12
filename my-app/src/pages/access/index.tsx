import AccessLinks from "../../components/AccessLinks";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div>this is access page</div>
      <div className="p-5">
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
