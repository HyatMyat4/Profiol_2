import React from 'react'
import { useDispatch , useSelector } from "react-redux";
import { starmodeEngin, starmodeC, darkmodeC } from '../../setting/actionslice'
import { BsStars } from "react-icons/bs";
import { GiBeveledStar } from "react-icons/gi";

function Starmode() {
    const starmodeopen = useSelector(starmodeC)
    const darklight = useSelector(darkmodeC)
    const dispatch = useDispatch()
  return (
    <div className={`Header-icon mr-[15px] hover:bg-slate-200 animate-slowfade shadow-lg ${darklight ? "shadow-cyan-500/50" : ""} hover:scale-100 z-[99999] cursor-pointer `}>
    {starmodeopen ? (
      <BsStars
        onClick={() => dispatch(starmodeEngin(false))}
        className="   text-cyan-400 text-[22px] hover:scale-125 transition-all duration-150"
      />
    ) : (
      <GiBeveledStar
        onClick={() => dispatch(starmodeEngin(true))}
        className=" text-cyan-400 text-[22px] hover:scale-125 transition-all duration-150"
      />
    )}
  </div>
  )
}

export default Starmode