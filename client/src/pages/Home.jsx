import React from "react";
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
import Rooms from "../components/Rooms";
import { getConfigContentByKey } from "../utils/helpers";

function Home() {
  return (
    <div className="w-full bg-img px-[2%] py-[5%] ">
      <div className="max-w-[1240px] bg-white mx-auto rounded-3xl sm:p-4 md:p-4 ">
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
        {/* Chat support icons */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
          {/* Messenger Icon */}
          <a
            href={getConfigContentByKey("linkMess")} // Thay "your+page" bằng link messenger của bạn
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-3 w-12 h-12 flex justify-center justify-items-center rounded-full text-white hover:bg-blue-700 transition"
            aria-label="Messenger"
          >
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              className="w-full h-full"
            />
          </a>
          {/* Zalo Icon */}
          <a
            href={getConfigContentByKey("zalo")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 p-3 w-12 h-12 rounded-full text-white hover:bg-blue-600 transition"
            aria-label="Zalo"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
              className="w-full h-full"
              alt=""
            />
          </a>
          {/* Phone Icon */}
          <a
            href={`tel:${getConfigContentByKey("phone")}`} // Thay +1234567890 bằng số điện thoại thực tế của bạn
            className="bg-green-500 p-3 w-12 h-12 rounded-full text-white hover:bg-green-600 transition"
            aria-label="Call"
          >
            <FontAwesomeIcon icon={faPhone} className="w-full h-full" />
          </a>

          {/* Google Maps Icon */}
          <a
            href={getConfigContentByKey("googleMap")} // Thay "your+address" bằng địa chỉ thực tế của bạn
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 p-3 w-12 h-12 rounded-full text-white hover:bg-red-600 transition"
            aria-label="Google Maps"
          >
            <FontAwesomeIcon icon={faLocationDot} className="w-full h-full" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
