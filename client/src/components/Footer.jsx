import {
  faEnvelopeCircleCheck,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-green-gray mx-auto text-white py-10 rounded-b-3xl ">
      <div className="container text-left grid grid-cols-1 md:grid-cols-3 gap-10 px-4 lg:mx-14">
        <div>
          <h2 className="text-2xl font-bold mb-4 underline">LIÊN HỆ</h2>

          <p className="font-bold text-xl">CHO THUÊ PHÒNG DẠY HỌC ĐÀ NẴNG HHT</p>
          <div className="flex items-center my-3 ">
            <FontAwesomeIcon icon={faLocationDot} className="mr-4 text-center" />
            <p>15 Đào Duy Anh - Đà Nẵng</p>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-3 text-center" />
            <p>Phone: 0913921920</p>{" "}
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="mr-2 text-center" />
            <p>
              Email:{" "}
              <a
                href="mailto:trungtamhoahoctro@gmail.com"
                className=""
              >
                trungtamhoahoctro@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">VỀ CHÚNG TÔI</h2>
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
          <h2 className="text-2xl font-bold mb-4">THỐNG KÊ TRUY CẬP</h2>
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
