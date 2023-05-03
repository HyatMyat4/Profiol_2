import React from "react";
import StarsCanvas from "./Stars";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import { useEffect } from "react";
import Project from "./Project";
import Getintouch from "./Getintouch";
import Contact from "./Contact";
function Main() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add("slideleft");
        } else {
          entry.target.classList.remove("slideleft");
        }
      });
    });

    const hiddenElements = document.querySelectorAll("section");

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className=" w-full h-[93vh]">
      <div className=" w-full  1000:w-[900px] h-auto z-0 m-auto p-[5px] 300:p-[10px] 550:p-[15px] 1000:p-0  ">
        <StarsCanvas />
        <section id="section1" className="w-full h-[93vh]   frc       ">
          <div className="w-full h-auto fcc items-start">
            <span className="text-teal-400 text-[20px]">Hi, my name is,</span>
            <h1 className="text-[30px] 500:text-[40px] 760:text-[45px] font-bold  ">
              Htet Myat .{" "}
            </h1>
            <h1 className=" text-[30px] 500:text-[40px] 760:text-[50px] font-bold ">
              <Typewriter
                words={["I create and manage the web."]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </h1>

            <p className=" text-[16px] monospace 500:text-[18px] 760:text-[20px]">
              I'm a <span className="text-teal-400 ">full stack developer</span>{" "}
              . I am proficient in designing and implementing complex features
              for <span className="text-sky-500"> websites </span> ,
              <span className=" text-orange-500"> desktop software </span>
              and <span className=" text-teal-500">mobile applications</span> ,
              which allows me to create solutions that are efficient, scalable,
              user-friendly, and easy to maintain. Currently, I am expanding my
              skillset to include mobile development using{" "}
              <span className=" text-cyan-400 ">Dart</span> ,{" "}
              <span className=" text-sky-400">Flutter</span> .
            </p>
            <div className="px-[35px] py-[12px] border hover:scale-110 transition-all duration-75 cursor-pointer border-teal-400 mt-[30px] rfc justify-center   rounded-[5px]">
              <a href="/resume.pdf" className=" text-teal-400">
                Resume
              </a>
            </div>
          </div>
        </section>
        <About />
        <Skills />
        <Project />
        <Getintouch />
        <Contact />
      </div>
      <Experience />
    </div>
  );
}

export default Main;
