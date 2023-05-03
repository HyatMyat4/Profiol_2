import NavBar from "./components/NavBar";
import {  darkmodeC } from "../setting/actionslice";
import { useSelector } from "react-redux";
import Main from "./components/Main";
import LeftMain from "./components/LeftMain";
import RightMain from "./components/RightMain";
import MessengerCustomerChat from 'react-messenger-customer-chat';



function App() {
  const darklight = useSelector(darkmodeC); 


  
  return (
    <div
      className={`w-full h-screen ${
        darklight ? "bg-[#191F2F] text-slate-100" : "bg-[#eee] text-gray-700"
      } `}
    > 
      
      <NavBar />
      <div
        id="cutomscoll"
        className="w-full h-[93vh] frc justify-between  relative  z-0 overflow-y-scroll overflow-x-hidden scroll-smooth "
      >
        <LeftMain />
        <Main  />
        <RightMain />
      </div>           
      <MessengerCustomerChat
            pageId="113485224987738"
            appId="735689564765924"        
        />
    </div>
  );
}

export default App;



/*
import MessengerCustomerChat from 'react-messenger-customer-chat';
         <MessengerCustomerChat
            pageId="113485224987738"
            appId="735689564765924"        
        />
        */