import React from "react";
import { motion } from "framer-motion";
import { darkmodeC } from "../../setting/actionslice";
import { useSelector } from "react-redux";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Typewriter } from "react-simple-typewriter";

const ServiceCard = ({ index, title, icon, darklight }) => (
  <Tilt className="xs:w-[210px] w-full cursor-pointer">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={` ${
          darklight ? "bg-[#191F2F]" : "bg-[#eee]"
        }  rounded-[10px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3
          className={` ${
            darklight ? "text-slate-100" : "text-gray-700"
          } text-[20px] monospace font-bold text-center`}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const darklight = useSelector(darkmodeC);
  return (
    <div className="w-full h-[93vh]    overflow-hidden frc justify-center">
      <div className="w-full h-auto m-auto">
        <motion.div className="w-full" variants={textVariant()}>
          <div className="w-full h-[60px] flex flex-row items-center  ">
            <span className="text-[25px] mr-[10px] font-bold ">
              <Typewriter
                words={["A b o u t  m e"]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
            <div className="w-[350px] h-[1px] hidden 600:flex bg-teal-500 mt-[5px]"></div>
          </div>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4     leading-[30px] monospace text-[16px] 800:text-[20px]"
        >
          I'm a skilled web developer with experience in{" "}
          <span className=" text-blue-500 ">TypeScript</span> and{" "}
          <span className=" text-yellow-500"> JavaScript</span>, and expertise
          in frameworks like <span className=" text-cyan-500">React</span>,{" "}
          <span className="  text-teal-500"> Node.js</span>, and
          <span className="text-black "> Next js</span>. I'm a quick learner and
          collaborate closely with clients to create efficient, scalable, and
          user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className="mt-4  text-[19px]  leading-[30px]  fcc items-start "
          id="font"
        >
          <p className="text-[15px] monospace 550:text-[15px] 800:text-[20px] hidden 500:inline ">
            My passion for web development began when I first learned to code
            with an java script. As I explored the world of technology, I
            discovered <span className="text-teal-400">web development</span>{" "}
            and was captivated by the creativity and innovation involved in
            building online experiences.
          </p>
          <p className="text-[15px] 550:text-[15px] 800:text-[20px] mt-[15px] hidden 500:inline ">
            <span className="monospace">All i learning self study from</span>
            <span className="text-rose-600"> youtube</span> ,
            <span className="text-emerald-500"> Google</span> ,
            <span className=" text-[#F48024]"> Stackoverflow</span>
          </p>
          <p className="text-[15px] monospace 550:text-[15px] 800:text-[20px] my-[15px] hidden 500:inline ">
            Fast-forward to today, and I have had the opportunity to work
            alongside proficient back-end developers and full-stack developers
            on the construction of real-world applications.
          </p>
          <p className="text-[15px]  monospace 550:text-[15px] 800:text-[20px] hidden 500:inline ">
            In my free time, I start learing{" "}
            <span className="  text-cyan-400">Dart</span> ,{" "}
            <span className="  text-sky-500">Flutter </span>.
          </p>
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "About");
