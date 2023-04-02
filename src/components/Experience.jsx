import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { OrderBy } from "../constants";
import { VscGithubInverted } from "react-icons/vsc";
import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight, BsCircleFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1E2439",
        color: "#EBEFF3",
      }}
      contentArrowStyle={{ borderRight: " 7px solid  #1E2439" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-teal-400 monospace text-[15px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <div className=" absolute right-[10px] top-[10px] hover:ScaleAnimation">
        <VscGithubInverted className="text-[25px]" />
      </div>
      <div className="w-full h-auto my-[15px]  1247:hover:scale-105 transition-all duration-100 rounded-[5px] overflow-hidden">
        <div className={` ${experience.colour} w-full h-[22px] frc`}>
          <div className="w-full h-full  text-[11px] frc justify-start p-[15px]">
            <BsCircleFill className="text-rose-500 mr-[8px]" />
            <BsCircleFill className="text-[#FEBC2E] mr-[8px]" />
            <BsCircleFill className="text-[#27C83F]" />
          </div>
        </div>
        <img src={experience.PROJECT_IMG} />
      </div>
      <div className="w-full text-[14px] flex-wrap  h-auto frc  justify-around">
        {experience?.langauge_Frontend?.map((data, index) => (
          <span key={index} className="monospace mx-[7px] mb-[8px]">
            {data}
          </span>
        ))}
      </div>
      <div className="w-full text-[14px] flex-wrap  h-auto frc  justify-around">
        {experience?.langauge_Backend?.map((data, index) => (
          <span key={index} className="monospace mx-[7px] mb-[8px]">
            {data}
          </span>
        ))}
      </div>

      <div className="w-[95%] h-[1px] bg-teal-800 m-auto my-[10px] "></div>
      <div className="w-full h-[60px] frc justify-end">
        <a
          href={experience.Frontend_Repo_Link}
          className="w-auto relative  group"
        >
          <div className="w-auto text-[10px] absolute left-[-13px] text-white hidden group-hover:flex top-[-25px] animate-slideup rounded-[20px] bg-black frc pl-[8px] pr-[8px] py-[1px] ">
            Frontend
          </div>
          <VscGithubAlt className="text-[25px]  text-teal-400  cursor-pointer mr-[25px] ScaleAnimation" />
        </a>
        <a
          href={experience.Backend_Repo_Link}
          className={`w-auto relative  group`}
        >
          <div
            className="w-auto text-[10px] absolute left-[-13px] hidden group-hover:flex top-[-25px] animate-slideup 
                               rounded-[20px] bg-black frc pl-[8px] pr-[8px] py-[1px] text-white "
          >
            Backend
          </div>
          <GoMarkGithub className="text-[25px]  text-teal-400  cursor-pointer mr-[25px] ScaleAnimation" />
        </a>

        <Link to={`ProjectDetail/${experience.PROJECT_SHORT_NAME}`} className="w-auto z-50 relative  group">
          <div
            className="w-auto text-[10px] text-white absolute left-[-13px] hidden group-hover:flex top-[-25px] animate-slideup 
                               rounded-[20px] bg-black frc pl-[8px] pr-[8px] py-[1px] "
          >
            Detail
          </div>
          <BsBoxArrowUpRight className="text-[25px]  text-teal-400  cursor-pointer mr-[25px] ScaleAnimation" />
        </Link>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className=" w-full 1000:w-[1000px] 1400:w-full h-auto m-auto ">
      <div className="mt-[50px] flex flex-col">
        <VerticalTimeline>
          {OrderBy.map((Projectdata, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={Projectdata}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;


