import {
  faEnvelopeCircleCheck,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-blue-800 mx-auto text-white py-10 rounded-b-3xl ">
      <div className="container text-left grid grid-cols-1 md:grid-cols-3 gap-10 px-4 mx-14">
        <div>
          <h2 className="text-lg font-bold mb-4">LIÊN HỆ</h2>

          <p className="font-bold">TRUNG TÂM GIA SƯ HÓA HỌC TRỜ</p>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLocationDot} className="mr-4" />
            <p>15 Lê Đồ, Đà Nẵng</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-3" />
            <p>Phone: 0913921920</p>{" "}
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="mr-2" />
            <p>
              Email:{" "}
              <a
                href="mailto:trungtamhoahoctro@gmail.com"
                className="underline"
              >
                trungtamhoahoctro@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">VỀ CHÚNG TÔI</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Trung tâm gia sư Đà Nẵng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hoạt động
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tuyển dụng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kết nối với chúng tôi
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">THỐNG KÊ TRUY CẬP</h2>
          <ul>
            <li>Truy cập trong ngày: 12</li>
            <li>Truy cập trong tháng: 322</li>
            <li>Truy cập trong năm: 960</li>
            <li>Tổng lượt truy cập: 2630</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
