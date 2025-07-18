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
    backgroundImage: useConfigContentByKey("backgroud"),
  };

  return (
    <div className="overflow-hidden">
      <img
        src={`${URL_API}${background.backgroundImage?.replace(/\\/g, "/")}`}
        alt=""
        className="w-full h-full sm:h-screen object-cover fixed bg-fixed -z-10"
      />

      {/* Notification ở góc trái dưới */}
      {showNotification && (
        <div
          className="fixed bottom-5 left-5 bg-white shadow-lg rounded-3xl p-6 border-[1px] border-[#799f85] z-50 flex flex-col items-center text-center transition-all duration-500 ease-in-out opacity-100 translate-y-0
      w-[260px] sm:w-[250px] md:w-[260px] lg:w-[260px] xl:w-[280px] max-sm:w-[200px]"
        >
          {/* Hình ảnh con chim */}
          <img
            src={imgBird}
            alt="icon bird"
            className="w-20 absolute -top-20 sm:w-20 md:w-20 lg:w-20 xl:w-24 lg:-top-18 md:-top-15 sm:-top-12 max-sm:-top-14"
          />

          {/* Nút đóng ❌ */}
          <div className="bg-[#799f85] absolute -top-2 -right-2 rounded-xl p-1 flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-white w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
              onClick={() => setShowNotification(false)}
            />
          </div>

          {/* Nội dung thông báo */}
          <p className="text-gray-700 mt-6 text-sm sm:text-xs md:text-sm lg:text-base raleway">
            {useConfigContentByKey("textNotication")}
          </p>

          {/* Nút Subscribe */}
          <a
            href={useConfigContentByKey("linkNotication")}
            className="cursor-pointer mt-4 font-bold w-3/4 sm:w-2/3 md:w-3/4 bg-[#563c39] text-white rounded-tl-xl rounded-br-xl 
    hover:rounded-bl-xl hover:rounded-tr-xl hover:rounded-br-none hover:rounded-tl-none 
    py-2 uppercase text-sm sm:text-xs md:text-sm 
    transition-all duration-300 ease-in-out"
          >
            Go
          </a>
        </div>
      )}

      <div
        className={classNames(
          "relative my-20 w-[90%] mx-[5%] xl:mx-auto ",
          " h-[80vh] sm:h-[80vh] md:h-[84vh] lg:h-[80vh] xl:h-[75vh] ",
          "max-sm:h-[128vh] bg-white rounded-[32px]",
          "overflow-y-auto scrollbar-hide text-index-[20px] offset-left-[20%]"
        )}
      >
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
