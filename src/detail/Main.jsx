import React from "react";
import { BsClock, BsGear } from "react-icons/bs";
import StarsCanvas from "../components/Stars";
import Spinner from "react-spinkit"


function Main({ ifreamload, data }) { 
  return (
    <div className="w-[1000px] h-[93vh] m-auto  z-0   ">
      <StarsCanvas />
      <div className={`w-full h-auto py-[50px]   `}>
        <div
          className={`w-full h-[550px] frc justify-center ${
            ifreamload ? " hidden" : ""
          }`}
        >
          <Spinner name='cube-grid'
            style={{
            height: '50px', // Adjust the height as desired
            width: '50px', // Adjust the width as desired
          }} fadeIn="none" color="#2DD4BF" 
          />
        </div>
        <div
          className={`relative overflow-hidden w-full  ${
            ifreamload ? "" : "hidden"
          }   frc justify-center pt-[56.25%] m-auto rounded-0 600:rounded-[8px]`}
        >
          {/* @ts-ignore */}
          <iframe
            id="iframe"
            frameborder="0"
            allowfullscreen="allowFullScreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${data?.PROJECT_VIDEO}`}
            className=" absolute inset-0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="w-full h-auto frc  justify-around flex-wrap">
        {data?.USER_LANGUAGE_IMG.map((data) => (
          <>
            <div
              className={` h-auto cursor-pointer m-[10px] hover:animate-ping  animate-slowfade  ${
                data === "Express" ? "hidden" : " "
              } ${data === "/mongodb.png" ? "w-[30px]" : "w-[50px]"}`}
            >
              <img src={data} />
            </div>
            <div
              className={`hover:animate-ping mx-[10px] ${
                data === "Express" ? "" : " hidden"
              }  cursor-pointer `}
            >
              <span className="frc text-[20px] text-gray-500">
                Express
                <BsGear className="ml-[2px] animate-Fastspin" />
              </span>
            </div>
          </>
        ))}
      </div>
      <div className="w-full h-auto frc justify-center mt-[40px] pb-[20px]">
        <a
          href={data?.LIVE_MODE}
          id="monospace"
          className={`px-[30px] ${
            data?.LIVE_MODE === "" ? "hidden" : ""
          } shadow-lg  py-[10px]  rounded-[5px] text-white bg-teal-400 text-[20px] hover:scale-110 transition-all duration-100 cursor-pointer`}
        >
          Live Mode
        </a>
        <div
          id="monospace"
          className={`px-[30px] ${
            data?.LIVE_MODE === "" ? " " : "hidden"
          } py-[10px] frc rounded-[5px] text-rose-500 bg-gray-700 opacity-[0.5] text-[20px] hover:scale-110 transition-all duration-100 cursor-pointer`}
        >
          Soorty Live Mode Expired <BsClock className="ml-[10px]" />
        </div>
      </div>
    </div>
  );
}

export default Main;
