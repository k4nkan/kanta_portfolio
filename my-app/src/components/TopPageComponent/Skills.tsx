import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BigButtonAnimation,
  ButtonAnimation,
  PopupAnimation,
} from "../Animations/Animations";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { useInView } from "react-intersection-observer";

type SkillsProps = {
  img: string;
  level: number;
  title: string;
  detail: string;
};

const Skills: React.FC<SkillsProps> = ({ img, level, title, detail }) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let animationFrame: number;
    const animateProgress = () => {
      setProgress((prev) => {
        if (prev < level) {
          animationFrame = requestAnimationFrame(animateProgress);
          return prev + 1;
        }
        return level;
      });
    };

    animateProgress();

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, level]);

  return (
    <>
      <motion.div
        ref={ref}
        {...BigButtonAnimation}
        onClick={() => setDetailOpen(true)}
        className="flex flex-col rounded-2xl w-40 h-48 gap-4 items-center justify-center bg-slate-200 max-sm:w-28 max-sm:h-36 max-sm:gap-2"
      >
        <div>
          <div className="absolute w-28 h-28 max-sm:w-20 max-sm:h-20 ">
            <CircularProgressbar
              value={progress}
              styles={{
                path: {
                  stroke: `rgba(27, 112, 109, ${progress / 100})`,
                },
              }}
            />
          </div>
          <div className="flex w-28 h-28 max-sm:w-20 max-sm:h-20 items-center justify-center">
            <div className="w-16 h-16 max-sm:w-10 max-sm:h-10">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="text-xl max-sm:text-sm">{title}</div>
      </motion.div>

      <AnimatePresence>
        {detailOpen && (
          <motion.div
            {...PopupAnimation}
            onClick={() => setDetailOpen(false)}
            className="flex fixed inset-0 bg-black bg-opacity-50 justify-center items-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-50 px-10 py-5 mx-10 rounded-xl shadow-md max-w-[600px]"
            >
              <div className="flex items-center justify-between relative">
                <motion.div
                  {...ButtonAnimation}
                  className="absolute top-1 right-0"
                >
                  <MdClose
                    onClick={() => setDetailOpen(false)}
                    className="text-2xl cursor-pointer"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl pb-2">{title}</h3>
                  <p className="font-mono">{detail}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Skills;
