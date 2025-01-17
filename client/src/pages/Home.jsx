import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rooms from "../components/Rooms";
import Describe from "../components/Describe";
import Backdrop from "../components/Backdrop";
import Contact from "../components/Contact";
import NurseryHeader from "../components/NurseryHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className=" w-full h-full bg-img">
      <div className="container min-w-165:text-sm max-w-screen-2xl bg-white mx-auto rounded-3xl px-14 sm:p-4 md:p-4 ">
        <Header />
        <Backdrop />
        <div id="about">
          <Describe />
        </div>
        <div id="room">
          <Rooms />
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
            href="https://www.facebook.com/messages/t/392234097613470"
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
            href="https://zalo.me/0337165122"
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
            href="tel:+84931939120" // Thay +1234567890 bằng số điện thoại thực tế của bạn
            className="bg-green-500 p-3 w-12 h-12 rounded-full text-white hover:bg-green-600 transition"
            aria-label="Call"
          >
            <FontAwesomeIcon icon={faPhone} className="w-full h-full" />
          </a>

          {/* Google Maps Icon */}
          <a
            href="https://maps.app.goo.gl/ws25eN2Tpeh9AwtS7" // Thay "your+address" bằng địa chỉ thực tế của bạn
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
