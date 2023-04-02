import React from 'react'
import { useParams  } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { Projectdata } from "../constants";
import { useEffect, useState } from "react";
import Main from "./Main";
import Left from "./Left";
import Right from "./Right";
import { darkmodeC } from "../../setting/actionslice";
import {  useSelector } from "react-redux";

function ProjectDetail() {
  const darklight = useSelector(darkmodeC)
  const {id} =useParams() 
  const [data, setdata] = useState();
  const [ifreamload, setifreamload] = useState(false);

  useEffect(() => {
    const FilterData = Projectdata.filter(
      (data) => data.PROJECT_SHORT_NAME === id
    );
    setdata(FilterData[0]);
    const iframe = document.getElementById("iframe");
    const handleLoad = () => {
      setifreamload(true);
    };
    if (iframe) {
      iframe.addEventListener("load", handleLoad, true);
    }
  }, [id]);
  return (
    <div className={`w-full h-screen ${darklight ? 'bg-[#191F2F]' : 'bg-[#eee]'} z-0  `}>
     
     <NavBar/>
    <div id='scroolbar-hidden' className="w-full h-[93vh] frc justify-between overflow-y-scroll">
      <Left data={data} />
      <Main ifreamload={ifreamload} data={data} />
      <Right />
    </div>
  </div>
  )
}

export default ProjectDetail