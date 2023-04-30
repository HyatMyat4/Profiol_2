import NavBar from "./components/NavBar";
import { darkmodeC } from "../setting/actionslice";
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
/*
<!-- Messenger Chat plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "113485224987738");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v16.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
*/