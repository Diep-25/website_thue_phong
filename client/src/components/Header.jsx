import {
  faFacebook,
  faFacebookMessenger,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useConfigContentByKey from "../hooks/useConfigContentByKey";

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
    <header className=" w-[90%] md:max-w-[1200px] z-10 fixed flex justify-between items-center p-[2%]">
      {/* Social icons */}
      <div className="flex items-center space-x-4 flex-grow">
        <a
          href={useConfigContentByKey("linkfb")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-6 h-6 text-[#563c39] hover:scale-150 transition-transform duration-300"
          />
        </a>
        <a
          href={useConfigContentByKey("linkMess")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className="w-6 h-6 text-[#563c39] hover:scale-150 transition-transform duration-300"
          />
        </a>
        <a
          href={useConfigContentByKey("linkYoutube")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="w-8 h-8 text-[#563c39] hover:scale-150 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Menu button */}
      <button onClick={toggleMenu} className="relative focus:outline-none z-50">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="w-8 h-8 m-2 text-[#563c39]"
        />
        <div
          className={` top-0 right-0 absolute w-111 h-100 bg-nav text-white shadow-lg rounded-tr-xl rounded-bl-full transform transition-transform duration-500 ease-in-out ${
            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{
            transformOrigin: "top right",
          }}
        >
          {/* Menu Content */}
          <div className="h-12"></div>
          <ul className="ml-16 mt-8 text-center text-xl font-medium">
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
                Liên hệ đặt phòng
              </a>
            </li>
          </ul>
        </div>
      </button>
    </header>
  );
};

export default Header;
