import {
  faFacebook,
  faFacebookMessenger,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
import classNames from "classnames";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const closeMenu = () => {
    setIsOpen(false);
  };


  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Ngăn điều hướng mặc định
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Cuộn mượt
        block: "start", // Đưa đến đầu phần tử
      });
    }
    closeMenu(); // Đóng menu sau khi nhấp
  };


  return (
    <header
      className={classNames(
        "z-[100] fixed left-[43px] right-[43px] sm:left-[110px] sm:right-[110px] mt-[10px] flex justify-between items-center sm:py-[10px]"
      )}
    >
      {/* Social icons */}
      <div className="flex items-center justify-start sm:gap-[20px] gap-[4px]">
        <a
          href={useConfigContentByKey("linkfb")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-[18px] sm:w-[29px] h-[18px] sm:h-[29px] p-1 text-[#563c39] hover:scale-150 transition-transform duration-300 wl-max-[1380px]"
          />
        </a>
        <a
          href={useConfigContentByKey("linkMess")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className="w-[18px] sm:w-[29px] h-[18px] sm:h-[29px] p-1 text-[#563c39] hover:scale-150 transition-transform duration-300 wl-max-[1380px]"
          />
        </a>
        <a
          href={useConfigContentByKey("linkYoutube")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="w-[20px] sm:w-[32px] h-[20px] sm:h-[32px] p-1 text-[#563c39] hover:scale-150 transition-transform duration-300 wl-max-[1380px]"
          />
        </a>
        <a
          href={`tel:${useConfigContentByKey("phone")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faPhone}
            className="w-[16px] sm:w-[25px] h-[16px] sm:h-[25px] p-2 text-[#563c39] hover:scale-150 transition-transform duration-300 wl-max-[1380px]"
          />
        </a>
      </div>


      {/* Menu button */}
      <button onClick={toggleMenu} className="relative focus:outline-none ">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="w-[22px] h-[22px] sm:w-7 sm:h-7 m-2 text-[#563c39] z-[9999] relative"
        />
        <div
          className={`z-30 -top-[10px] -right-[13px] sm:-right-[10px] sm:-top-[10px] absolute w-[250px] sm:w-111 h-[250px] sm:h-100 bg-nav text-white shadow-lg rounded-tr-xl rounded-bl-full transform transition-transform duration-500 ease-in-out rounded-tr-[15x] sm:rounded-tr-[20px] ${
            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{
            transformOrigin: "top right",
          }}
        >
          {/* Menu Content */}
          <div className="h-12"></div>
          <ul className="ml-16 mt-0 sm:mt-8 text-center text-sm sm:text-xl font-medium">
            <li className="mb-4">
              <a href="/" className="hover:underline decoration-wavy p-4">
                Trang chủ
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#about"
                className="hover:underline decoration-wavy p-4"
                onClick={(e) => handleSmoothScroll(e, "#about")}
              >
                Giới thiệu
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#room"
                className="hover:underline decoration-wavy p-4"
                onClick={(e) => handleSmoothScroll(e, "#room")}
              >
                Dịch vụ
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#contact"
                className="hover:underline decoration-wavy p-4"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </button>
    </header>
  );
};


export default Header;