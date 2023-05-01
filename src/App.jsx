import NavBar from "./components/NavBar";
import { darkmodeC } from "../setting/actionslice";
import { useSelector } from "react-redux";
import Main from "./components/Main";
import LeftMain from "./components/LeftMain";
import RightMain from "./components/RightMain";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useEffect } from "react";
function App() {
  const darklight = useSelector(darkmodeC);


  const White_Spac = document.getElementById("facebook")

  const onScrollChange = () => {
    const White_Spac = document.getElementById("facebook") 
    const White_SpacAll = document.querySelectorAll("facebook") 
    const White_Spac2 = document.getElementsByName("unread_f964b33307509c")
    const White_SpacQ = document.querySelector("unread_f964b33307509c")
    if(White_Spac !==  null){
      White_Spac.style.display = "none";
    } 
    
    console.log(White_Spac,'😀😀')
    console.log(White_Spac2,'😀😀2')
    console.log(White_SpacQ,'😀😀Q')
    console.log(White_SpacAll,'😀😀All')
  }
  

   

    
    useEffect(() => {
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          onScrollChange()
        });
      });
  
      const hiddenElements = document.querySelectorAll("section");
  
      hiddenElements.forEach((el) => observer.observe(el));
  
    }, []);
  

  
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
        <Main />
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



