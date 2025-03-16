import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Rooms from "../components/Rooms";
import Describe from "../components/Describe";
import Backdrop from "../components/Backdrop";
import Contact from "../components/Contact";
import NurseryHeader from "../components/NurseryHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
const URL_API = import.meta.env.VITE_URL_API;

function Home() {
  useEffect(() => {
    document.title = "Trang chủ | Trang website cho thuê phòng";
  }, []);

  const background = {
    backgroundImage: useConfigContentByKey("background"),
  };
  return (
    <div className="overflow-hidden">
      <img
        src={`${URL_API}${background.backgroundImage?.replace(/\\/g, "/")}`}
        alt=""
        className=" w-full h-full sm:h-screen object-cover fixed bg-fixed -z-10 "
      />
      <div className="relative scrollbar-hide my-20 md:max-w-[1200px] h-[80vh] bg-white rounded-3xl xl:mx-auto mx-[5%] overflow-y-auto ">
        <Header />
        <Backdrop />
        <div id="about">
          <Describe />
        </div>
        <div id="room">
          <ProductCard />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <NurseryHeader />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
