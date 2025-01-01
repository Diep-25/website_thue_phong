import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="max-w-1240 ">
      <div className="px-4">
        <div className="w-full flex justify-between items-center  ">
          <div className="">
            <a href="">
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 m-2 color-brown" />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="w-5 h-5 m-2 color-brown"
              />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faSquareYoutube} className="w-5 h-5 m-2 color-brown" />
            </a>
          </div>
          <div className="nav">
            <FontAwesomeIcon icon={faBars} className="w-7 h-7 m-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
