import React from "react";
import { BsCircleFill, BsGear } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
export default function Skills() {
  return (
    <section
      id="Skills"
      className="w-full h-auto 400:h-[93vh]   frc  justify-center mb-[10px] 400:mb-[60px]  500:my-0 "
    >
      <div className="w-full h-full fcc  items-start justify-center">
        <div className="w-full h-[60px] flex flex-row items-center ">
          <span className="text-[25px] mr-[10px] font-bold ">S k i l l s</span>
          <div className="w-[350px] h-[1px] hidden 600:flex bg-teal-500 mt-[5px]"></div>
        </div>
        <div className="w-full h-auto rounded-[5px]  fcc items-start  cursor-pointer bg-[#282A36] mb-[15px]">
          <div className="w-full h-[60px] frc justify-start p-[18px]">
            <BsCircleFill className="text-rose-500 mr-[8px]" />
            <BsCircleFill className="text-[#FEBC2E] mr-[8px]" />
            <BsCircleFill className="text-[#27C83F]" />
          </div>
          <div className="w-full h-auto fcc   items-start">
            <span className="w-full h-auto px-[18px] text-[17px] text-white ">
              <span
                id="font"
                className=" text-pink-600 font-bold  text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                {" "}
                const{" "}
              </span>
              <span
                id="font"
                className="  text-teal-400  text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                Frontend
              </span>{" "}
              <span className=" text-orange-600">=</span>
              <span className=" text-blue-600"> [ </span>{" "}
              <span
                id="font"
                className="text-teal-400  text-[17px] hidden 550:inline"
              >
                <Typewriter
                  words={[
                    "Html , Css , Mui , TailWind , Javascript , React , Redux , ReactQuery",
                  ]}
                  loop={true}
                  cursor
                  id="font"
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={70}
                  delaySpeed={4000}
                />
              </span>
              <span
                id="font"
                className="text-teal-400  text-[13px] 550:text-[15px] 800:text-[16px] flex 550:hidden"
              >
                'Html , Css , Mui , TailWind , Javascript , React , Redux ,
                ReactQuery'
              </span>
              <span className=" text-blue-600">]</span>
            </span>
            <div className="w-full h-auto frc justify-around flex-wrap p-[18px]">
              <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0 ">
                <img src="/html.png" />
              </div>
              <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/css.png" />
              </div>
              <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/mui.png" />
              </div>
              <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/tailwind.png" />
              </div>
              <div className="w-[35px] h-auto group hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/js.png" />
              </div>
              <div className="w-[40px] h-auto group  hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0 ">
                <img
                  src="/react.png"
                  className="group-hover:animate-Fastspin"
                />
              </div>
              <div className="w-[40px] h-auto group hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img
                  src="/redux.png"
                  className="group-hover:animate-Fastspin"
                />
              </div>
              <div className="w-[45px] h-auto group hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img
                  src="/reactquery.svg"
                  className="group-hover:animate-Fastspin"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto rounded-[5px] fcc items-start mb-[15px]  cursor-pointer   bg-[#282A36]">
          <div className="w-full h-[60px]  frc justify-start p-[18px]">
            <BsCircleFill className="text-rose-500 mr-[8px]" />
            <BsCircleFill className="text-[#FEBC2E] mr-[8px]" />
            <BsCircleFill className="text-[#27C83F]" />
          </div>
          <div className="w-full h-auto fcc  items-start">
            <span className="w-full h-auto px-[18px] text-[17px] text-white ">
              <span
                id="font"
                className=" text-pink-600 font-bold text-[13px] 550:text-[15px] 800:text-[16px] "
              >
                {" "}
                const{" "}
              </span>
              <span
                id="font"
                className="  text-teal-400  text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                Backend
              </span>{" "}
              <span className=" text-orange-600">=</span>
              <span className=" text-blue-600"> [ </span>
              <span
                id="font"
                className="text-teal-400  text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                {" "}
                Nodejs <span className=" text-white"> , </span> Express
                <span className=" text-white"> ,</span> MongoDB{" "}
                <span className=" text-white"> , </span> FireBase
                <span className=" text-white"> , </span> MySQL{" "}
                <span className=" text-white"> , </span> PostgreSQL{" "}
                <span className=" text-white"> , </span> Prisma{" "}
              </span>
              <span className=" text-blue-600">]</span>
            </span>

            <div className="w-full h-auto frc  justify-around flex-wrap p-[18px] px-[20px]">
              <div className="w-[60px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/nodejs.png" />
              </div>
              <div className="w-auto  h-auto group hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <span className="frc text-[20px] text-gray-500">
                  Express
                  <BsGear className="ml-[2px] animate-Fastspin" />
                </span>
              </div>
              <div className="w-[25px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/mongodb.png" />
              </div>
              <div className="w-[30px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/Firebase.png" />
              </div>
              <div className="w-[35px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/mysql.png" />
              </div>
              <div className="w-[40px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/postger.png" />
              </div>
              <div className="w-[38px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/prisma.webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto rounded-[5px] fcc items-start    bg-[#282A36]">
          <div className="w-full h-[60px]  frc justify-start p-[18px]">
            <BsCircleFill className="text-rose-500 mr-[8px]" />
            <BsCircleFill className="text-[#FEBC2E] mr-[8px]" />
            <BsCircleFill className="text-[#27C83F]" />
          </div>
          <div className="w-full h-auto fcc  items-start">
            <span className="w-full h-auto px-[18px] text-[17px] text-white ">
              <span
                id="font"
                className=" text-pink-600 font-bold text-[13px] 550:text-[15px]  800:text-[16px] "
              >
                {" "}
                const{" "}
              </span>
              <span
                id="font"
                className="  text-teal-400   text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                MobileApp
              </span>{" "}
              <span className=" text-orange-600">=</span>
              <span className=" text-blue-600"> [ </span>{" "}
              <span className="text-teal-400">
                <span
                  id="font"
                  className="text-teal-400  inline  group-hover:hidden text-[13px] 550:text-[15px] 800:text-[16px]"
                >
                  {" "}
                  Dart <span className=" text-white"> , </span> Flutter
                  <span className=" text-white"> ,</span> ReactNative{" "}
                  <span className=" text-white"> </span>
                </span>
              </span>
              <span className=" text-blue-600">]</span>
            </span>
            <span className="w-full h-auto px-[18px] text-[17px] text-white ">
              <span
                id="font"
                className=" text-pink-600 font-bold text-[13px] 550:text-[15px] 800:text-[16px] "
              >
                {" "}
                const{" "}
              </span>
              <span
                id="font"
                className="  text-teal-400 mt-[10px] text-[13px] 550:text-[15px] 800:text-[16px] "
              >
                DasktopSoftware
              </span>{" "}
              <span className=" text-orange-600">=</span>
              <span className=" text-blue-600"> [ </span>{" "}
              <span
                id="font"
                className="text-teal-400 text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                {" "}
                Tauri{" "}
              </span>
              <span className=" text-blue-600">]</span>
            </span>
            <span className="w-full h-auto mt-[2px] px-[18px] text-[17px] text-white ">
              <span
                id="font"
                className=" text-pink-600 font-bold text-[13px] 550:text-[15px] 800:text-[16px] "
              >
                {" "}
                const{" "}
              </span>
              <span
                id="font"
                className="  text-teal-400  text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                FullStack
              </span>{" "}
              <span className=" text-orange-600">=</span>
              <span className=" text-blue-600"> [ </span>{" "}
              <span
                id="font"
                className="text-teal-400 text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                {" "}
                Next js{" "}
              </span>
              <span
                id="font"
                className="text-teal-400 text-[13px] 550:text-[15px] 800:text-[16px]"
              >
                {" "}
                , Docker{" "}
              </span>
              <span className=" text-blue-600">]</span>
            </span>
            <div className="w-full h-auto frc  justify-around flex-wrap p-[18px] px-[20px]">
              <div className="w-[45px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/dart.png" />
              </div>
              <div className="w-[38px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/flutter.png" />
              </div>
              <div className="w-[45px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/reactnative.png" />
              </div>
              <div className="w-[35px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/tauri.svg" />
              </div>
              <div className="w-[40px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/docker.webp" />
              </div>
              <div className="w-[60px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/nextjs.png" />
              </div>
              <div className="w-[40px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                <img src="/ts.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
