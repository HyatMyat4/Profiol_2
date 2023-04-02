import React from "react";
import { RiSunFill } from "react-icons/ri";
import { BsFillMoonFill } from "react-icons/bs";
import { darkmodeEngin, darkmodeC } from "../../setting/actionslice";
import { useDispatch, useSelector } from "react-redux";
function Darkmode() {
  const darklight = useSelector(darkmodeC);
  const dispatch = useDispatch();
  return (
    <div
      className={`Header-icon hover:bg-slate-200 animate-slowfade shadow-lg ${
        darklight ? "shadow-cyan-500/50" : ""
      } hover:scale-100 z-[99999] cursor-pointer `}
    >
      {darklight ? (
        <RiSunFill
          onClick={() => dispatch(darkmodeEngin(false))}
          className=" text-orange-500 text-[22px] hover:scale-125 transition-all duration-150"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => dispatch(darkmodeEngin(true))}
          className=" text-cyan-500 text-[22px] hover:scale-125 transition-all duration-150"
        />
      )}
    </div>
  );
}

export default Darkmode;
