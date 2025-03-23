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
        alt=""
        className="w-full h-full sm:h-screen object-cover fixed bg-fixed -z-10"
      />

      {/* Notification ở góc trái dưới */}
      {showNotification && (
        <div
          className="fixed bottom-5 left-5 bg-white shadow-lg rounded-3xl p-6 border-[1px] border-[#799f85] z-50 flex flex-col items-center text-center transition-all duration-500 ease-in-out opacity-100 translate-y-0
      w-[280px] sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] max-sm:w-[200px]"
        >
          {/* Hình ảnh con chim */}
          <img
            src={imgBird}
            alt="icon bird"
            className="w-24 absolute -top-12 sm:w-20 md:w-24 lg:w-28 xl:w-30"
          />

          {/* Nút đóng ❌ */}
          <div className="bg-[#799f85] absolute -top-3 -right-3 rounded-full p-1 flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-white w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
              onClick={() => setShowNotification(false)}
            />
          </div>

          {/* Nội dung thông báo */}
          <p className="text-gray-700 mt-6 text-sm sm:text-xs md:text-sm lg:text-base">
            Join the mailing list to receive occasional updates about new fonts,
            giveaways, and sales!
          </p>

          {/* Nút Subscribe */}
          <button
            type="submit"
            className="mt-4 font-bold w-3/4 sm:w-2/3 md:w-3/4 bg-[#563c39] text-white rounded-tl-xl rounded-br-xl 
                hover:rounded-bl-xl hover:rounded-tr-xl hover:rounded-br-none hover:rounded-tl-none py-2 uppercase text-sm sm:text-xs md:text-sm"
          >
            Subscribe
          </button>
        </div>
      )}

      <div className="relative scrollbar-hide my-20 md:max-w-[1200px] h-[80vh] sm:h-[130vh] md:h-[85vh] lg:h-[90vh] xl:h-[85vh] max-sm:h-[130vh] bg-white rounded-3xl xl:mx-auto mx-[5%] overflow-y-auto">
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
