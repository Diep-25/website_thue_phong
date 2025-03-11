import {
  faEnvelopeCircleCheck,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-green-gray mx-auto text-white py-2 mb-2 rounded-b-3xl p-4">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 lg:mx-14 place-items-center place-content-center">
        <p className=" text-3xl dancing max-sm:mt-4">
          CHO THUÊ PHÒNG DẠY HỌC ĐÀ NẴNG HHT
        </p>
        <div className="">
          <h2 className="text-2xl font-bold mb-4 underline">LIÊN HỆ</h2>
          <div className="flex items-center my-3 ">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-4 text-center"
            />
            <p>15 Đào Duy Anh - Đà Nẵng</p>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-3 text-center" />
            <p>Phone: 0913921920</p>{" "}
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={faEnvelopeCircleCheck}
              className="mr-2 text-center"
            />
            <p>
              Email:{" "}
              <a href="mailto:trungtamhoahoctro@gmail.com" className="">
                trungtamhoahoctro@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3834.1253191248907!2d108.2081624!3d16.0589854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142197eb6435abb%3A0xdaad6e5773bd995!2zVHJ1bmcgdMOibSBnaWEgc8awIEhvYSBI4buNYyBUcsOy!5e0!3m2!1svi!2s!4v1741683273825!5m2!1svi!2s"
            className="w-full h-52 rounded-xl "
            loading="lazy"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
