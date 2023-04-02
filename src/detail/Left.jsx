import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { VscGithubAlt } from "react-icons/vsc";
function Left({ data }) {
  return (
    <div className="w-[100px]  h-[93vh] hidden 1200:flex  z-[40] fcc  animate-slideup42 items-center justify-end fixed bottom-0">
      <a
        href={data?.Frontend_Repo_Link}
        className="mb-[20px] hover:scale-125 group relative transition-all duration-75"
      >
        <div
          className="w-auto text-[8px] absolute left-[-13px] hidden ml-[5px] group-hover:flex top-[-20px] animate-slideup 
                               rounded-[20px] bg-black frc pl-[8px] pr-[8px] py-[1px] "
        >
          Frontend
        </div>
        <VscGithubAlt className="text-[28px]  text-slate-100   cursor-pointer" />
      </a>
      <a
        href={data?.Backend_Repo_Link}
        className="mb-[20px] hover:scale-125 relative group transition-all duration-75"
      >
        <div
          className="w-auto text-[8px] absolute left-[-13px] hidden group-hover:flex ml-[3px] top-[-20px] animate-slideup 
                               rounded-[20px] bg-black frc pl-[8px] pr-[8px] py-[1px] "
        >
          Backend
        </div>
        <GoMarkGithub className="text-[28px] text-slate-100    cursor-pointer" />
      </a>
      <div className="w-[2px] h-[150px]  bg-teal-400  "></div>
    </div>
  );
}

export default Left;
