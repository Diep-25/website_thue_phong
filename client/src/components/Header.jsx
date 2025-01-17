import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="p-4 max-w-1240 ">
      <div className="px-4">
        <div className="w-full flex justify-between items-center  ">
          <div className="">
            <a href="https://www.facebook.com/pham.chuong.7549185">
              <FontAwesomeIcon icon={faFacebook} className="w-7 h-7 p-2 color-brown" />
            </a>
            <a href="https://www.facebook.com/messages/e2ee/t/6979243368803658">
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="w-7 h-7 p-2 color-brown"
              />
            </a>
            <a href="https://www.youtube.com/@chuyenmachu3duy">
              <FontAwesomeIcon icon={faSquareYoutube} className="w-7 h-7 p-2 color-brown" />
            </a>
          </div>
          <div className="nav">
            <FontAwesomeIcon icon={faBars} className="w-9 h-9 m-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
