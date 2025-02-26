import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faSquareYoutube,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
    <header className="relative p-4 mx-auto z-50">
      <div className="px-4">
        <div className="w-full flex justify-between items-center">
          {/* Social icons */}
          <div className="flex items-center space-x-4">
            <a
              href={useConfigContentByKey("linkfb")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 text-brown hover:text-pink-500"
              />
            </a>
            <a
              href={useConfigContentByKey("linkMess")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="w-6 h-6 text-brown hover:text-pink-500"
              />
            </a>
            <a
              href={useConfigContentByKey("linkYoutube")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="w-8 h-8 text-brown hover:text-red-500"
              />
            </a>
          </div>

          {/* Menu button */}
          <button
            onClick={toggleMenu}
            className="relative focus:outline-none z-50"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-8 h-8 m-2 text-brown"
            />
          </button>
        </div>
      </div>

      {/* Menu */}
      <div
        className={` top-0 right-0 absolute w-111 h-100 bg-nav text-white shadow-lg  rounded-tr-xl rounded-bl-full transform transition-transform duration-500 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          transformOrigin: "top right", // Đặt gốc biến đổi ở góc trên bên phải
        }}
      >
        {/* Menu Content */}
        <div className="h-12"></div>
        <ul className="ml-8 mt-8 text-center text-xl font-medium">
          <li className="mb-4">
            <a
              href="#"
              className="hover:underline decoration-wavy p-4"
              onClick={(e) => handleSmoothScroll(e, "#")}
            >
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
    </header>
  );
};

export default Header;
