import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Describe from "../components/Describe";
import Backdrop from "../components/Backdrop";
import Contact from "../components/Contact";
import NurseryHeader from "../components/NurseryHeader";
import ProductCard from "../components/ProductCard";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgBird from "../assets/bird.png";
import classNames from "classnames";


const URL_API = import.meta.env.VITE_URL_API;


function Home() {
  const [showNotification, setShowNotification] = useState(true);


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
        alt="bg"
        className="w-full h-screen object-cover fixed top-0 left-0 -z-10"
      />


      {/* Notification ở góc trái dưới */}
      {showNotification && (
        <div
          className="fixed bottom-5 left-5 bg-white shadow-lg rounded-[8px] p-3 sm:p-6 sm:px-3 border-[1px] border-[#799f85] z-50 flex flex-col items-center text-center transition-all duration-500 ease-in-out opacity-100 translate-y-0
      w-[210px] sm:w-[230px] md:w-[230px] lg:w-[230px] xl:w-[230px] max-sm:w-[170px]"
        >
          {/* Hình ảnh con chim */}
          <img
            src={imgBird}
            alt="icon bird"
            className="w-[58px] absolute -top-[42px] sm:w-20 md:w-20 lg:w-20 xl:w-24 lg:-top-16 md:-top-13 sm:-top-10"
          />
          {/* Nút đóng ❌ */}
          <div className="bg-[#799f85] absolute -top-2 -right-2 rounded-xl p-1 flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-white w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5"
              onClick={() => setShowNotification(false)}
            />
          </div>

          {/* Nội dung thông báo */}
          <p className="text-gray-700 mt-0 text-[10px] sm:text-xs raleway">
            {useConfigContentByKey("textNotication")}
          </p>
          {/* Nút Subscribe */}
          <a
            href={useConfigContentByKey("linkNotication")}
            className="cursor-pointer mt-2 font-bold w-3/4 sm:w-2/3 md:w-3/4 bg-[#563c39] text-white rounded-tl-xl rounded-br-xl 
    hover:rounded-bl-xl hover:rounded-tr-xl hover:rounded-br-none hover:rounded-tl-none 
    py-1 uppercase text-xs
    transition-all duration-300 ease-in-out"
          >
            Go
          </a>
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center p-[30px] sm:p-[70px]">
        <div className="w-full h-full bg-white rounded-[15px] sm:rounded-[20px] overflow-y-auto sm:overflow-y-hidden overflow-x-hidden hover:overflow-y-auto hide-scrollbar">
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
    </div>
  );
}


export default Home;
