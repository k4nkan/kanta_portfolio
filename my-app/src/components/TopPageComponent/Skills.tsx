import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type SkillsProps = {
  img: string;
  level: number;
  title: string;
};

const Skills: React.FC<SkillsProps> = ({ img, level, title }) => {
  return (
    <div className="flex flex-col rounded-2xl w-40 h-48 gap-4 items-center justify-center bg-slate-200">
      <div>
        <div className="absolute w-28 h-28">
          <CircularProgressbar value={level} />
        </div>
        <div className="flex w-28 h-28 items-center justify-center">
          <div className="w-16 h-16">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="text-xl">{title}</div>
    </div>
  );
};

export default Skills;
