import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { BsCircleFill } from "react-icons/bs";
import { darkmodeC } from "../../setting/actionslice";
import { useSelector } from "react-redux";
import { CiPaperplane } from "react-icons/ci";

const Contact = () => {
  const darklight = useSelector(darkmodeC);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0gva659",
        "template_cuhw4lb",
        {
          from_name: form.name,
          to_name: "HyatMyat",
          from_email: form.email,
          to_email: "hyatmyat79@gmail.com",
          message: form.message,
        },
        "3GC0I1sssgFFHq94x"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={` flex xl:flex-row flex-col-reverse  overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={` ${
          darklight ? "bg-[#1E2439]" : " bg-slate-300"
        }  p-[20px] rounded-[7px]`}
      >
        <div className="w-full h-auto  frc justify-start pb-[20px]">
          <BsCircleFill className="text-rose-500 mr-[8px]" />
          <BsCircleFill className="text-[#FEBC2E] mr-[8px]" />
          <BsCircleFill className="text-[#27C83F]" />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className=" font-medium monospace mb-4 text-[17px] text-teal-500 ">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              id="font"
              placeholder="What's your good name?"
              className={` ${
                darklight
                  ? "bg-[#474c62] placeholder:text-slate-100 text-white "
                  : "bg-slate-100 placeholder:text-[#1f212a] text-[#1f212a]"
              } py-4 px-6  rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-teal-500 font-medium text-[17px] monospace mb-4">
              Your email
            </span>
            <input
              type="email"
              name="email"
              id="font"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={` ${
                darklight
                  ? "bg-[#474c62] placeholder:text-slate-100 text-white "
                  : "bg-slate-100 placeholder:text-[#1f212a] text-[#1f212a]"
              }  py-4 px-6  rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-teal-500 text-[17px] font-medium mb-4 monospace ">
              Your Message
            </span>
            <textarea
              rows={7}
              id="font"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className={` ${
                darklight
                  ? "bg-[#474c62] placeholder:text-slate-100 text-white "
                  : "bg-slate-100 placeholder:text-[#1f212a] text-[#1f212a]"
              } py-4 px-6 resize-none  rounded-lg outline-none border-none font-medium`}
            />
          </label>

          <button
            type="submit"
            id="font"
            className={`  w-[180px] h-[50px] rounded-[7px] outline-none frc   justify-center bg-teal-500 
             text-slate-100     shadow-lg  hover:scale-95 transition-all duration-75 `}
          >
            {loading ? "Sending..." : "Send"}
            <CiPaperplane
              className={`ml-[5px] text-[25px] ${
                loading ? " animate-pulse" : ""
              }`}
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "Contact");
