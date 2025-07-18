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
        "wl-[20vh] w-[90%] z-10 fixed flex justify-between items-center px-8 py-1",
        "text-inden-[20px] md:wl-[20]"
      )}
    >
      {/* Social icons */}
      <div className="flex items-center justify-start space-x-4 flex-grow">
        <a
          href={useConfigContentByKey("linkfb")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-6 h-6 p-1 text-[#563c39] hover:scale-150 transition-transform duration-300 wl-max-[1380px]"
          />
        </a>
        <a
          href={useConfigContentByKey("linkMess")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className="w-6 h-6 p-1 text-[#563c39] hover:scale-150 transition-transform duration-300 wl-max-[1380px]"
          />
        </a>
        <a
          href={useConfigContentByKey("linkYoutube")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="w-7 h-7 p-1 text-[#563c39] hover:scale-150 transition-transform duration-300 wl-max-[1380px]"
          />
        </a>
        <a
          href={`tel:${useConfigContentByKey("phone")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faPhone}
            className="w-6 h-6 p-2 text-[#563c39] hover:scale-150 transition-transform duration-300 wl-max-[1380px]"
          />
        </a>
      </div>

      {/* Menu button */}
      <button onClick={toggleMenu} className="relative focus:outline-none ">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="w-7 h-7 m-2 text-[#563c39] z-10"
        />
        <div
          className={`z-30 top-[-4px] -right-8 absolute w-111 h-100 bg-nav text-white shadow-lg rounded-tr-xl rounded-bl-full transform transition-transform duration-500 ease-in-out ${
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
