import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Getintouch() {
  return (
    <section id="Getintouch" className="w-full h-[93vh] fcc">
      <div className="w-full h-auto m-auto fcc justify-center">
        <span className="w-full h-auto text-[28px] ml-[10px] font-bold  frc items-start">
          <Typewriter
            words={["G e t i n t o u c h !"]}
            loop={10}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </span>
        <div className="w-full my-[20px] h-[1px] bg-teal-500"></div>
        <span className="w-full monospace h-autotext-[14px] 550:text-[15px] 800:text-[20px] frc items-start ">
          Thanks for checking in.
        </span>
        <p className="text-[14px] monospace 550:text-[15px] 800:text-[20px]">
          I'm currently looking for new opportunities to work with talented
          people and companies. I'm highly adaptable and always willing to learn
          new technologies as required by the company. If you think I might be a
          good fit for your team or you just want to learn more about what I do,
          don't hesitate to reach out via email at{" "}
          <a
            href="mailto:hyatmyat79@gmail.com"
            id="monospace"
            className="text-teal-400"
          >
            hyatmyat79@gmail.com
          </a>{" "}
          or anywhere you feel comfortable to contact.
        </p>
      </div>
    </section>
  );
}

export default Getintouch;
