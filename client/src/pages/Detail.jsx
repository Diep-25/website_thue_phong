import {
  faFacebook,
  faFacebookMessenger,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCircleLeft,
  faCircleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import emailjs from "emailjs-com";
import { get, isEmpty, isNil, map, toNumber } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fetchData from "../axios";
import CarouselWithThumb from "../components/carousel/CarouselWithThumb";
import { formatNumber } from "../utils/helpers";
import getConfigContentByKey from "../hooks/useConfigContentByKey";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImg from "../assets/img/bgPink.png";
import ProductCard from "../components/ProductCard";
import parse from "html-react-parser";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
const URL_API = import.meta.env.VITE_URL_API;

const ClassroomInterface = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [studentNum, setStudentNum] = useState(0);
  const [message, setMessage] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.title = "Chi tiết | Trang website cho thuê phòng";
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeMenu();
  };

  const [openModal, { toggle: toggleModal }] = useDisclosure();
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        // Dùng id từ URL để gọi API
        const response = await fetchData(
          `http://localhost:3000/api/product/detail/${id}`
        );
        console.log(response.data);
        setData(response.data || null);
      } catch (err) {
        setData(null);
      }
    };

    if (id) {
      fetchDataFromAPI();
    }
  }, [id]);

  const submitSendMail = async () => {
    const templateParams = {
      name,
      email,
      phone,
      studentNum,
      subject,
      message,
      product_id: id,
    };

    const isNumber = toNumber(studentNum);

    if (!isNumber) {
      toast.error("Số lượng học sinh phải là số.");
      return;
    }

    if (!name || !message || !phone || !studentNum || !subject) {
      toast.error("Please fill in all fields.");
      return;
    }

    await fetchData(`${URL_API}api/order/insert`, "POST", templateParams).then(
      (response) => {
        toast.success("Message sent successfully!");
        setName("");
        setSubject("");
        setEmail("");
        setPhone("");
        setStudentNum(0);
        setMessage("");
        toggleModal();
      },
      (err) => {
        toast.error("Failed to send message, please try again later.");
      }
    );
  };

  return (
    <div className="overflow-hidden h-screen">
      <img
        src={`${URL_API}${useConfigContentByKey("background")?.replace(
          /\\/g,
          "/"
        )}`}
        alt=""
        className="w-full h-full xl:h-screen object-cover fixed bg-fixed -z-10 "
      />
      <div className=""></div>
      <div className="scrollbar-hide m-20 md:max-w-[1200px] h-[80vh] bg-white rounded-3xl  xl:mx-auto mx-[5%] overflow-y-auto ">
        <header className=" w-[90%] md:max-w-[1200px] z-10 fixed flex justify-between items-center px-8 py-1">
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
          <button
            onClick={toggleMenu}
            className="relative focus:outline-none z-[100]"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-8 h-8 m-2 text-[#563c39] z-50"
            />
            <div
              className={` z-20 -top-1 -right-8 absolute w-80 h-72 bg-nav text-white shadow-lg rounded-tr-xl rounded-bl-full transform transition-transform duration-500 ease-in-out ${
                isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{
                transformOrigin: "top right",
              }}
            >
              {/* Menu Content */}
              <div className="h-8"></div>
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
                    Chi tiết
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#room"
                    className="hover:underline decoration-wavy p-4"
                    onClick={(e) => handleSmoothScroll(e, "#room")}
                  >
                    Phòng khác
                  </a>
                </li>
              </ul>
            </div>
          </button>
        </header>
        <Modal
          opened={openModal}
          onClose={() => {
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setStudentNum(0);
            setMessage("");
            toggleModal();
          }}
          withCloseButton
          title="Đăng ký thuê phòng"
          overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
          styles={{
            content: {
              width: "100%",
              maxWidth: "600px",
              "@media (max-width: 768px)": {
                maxWidth: "90%",
              },
            },
          }}
        >
          <div className="mt-4 w-full flex gap-5 flex-col">
            <TextInput
              placeholder="Họ và tên"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
              onAbort={(e) => {
                e.preventDefault();
                setName("");
              }}
            />
            <TextInput
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => {
                e.preventDefault();
                setPhone(e.target.value);
              }}
              onAbort={(e) => {
                e.preventDefault();
                setPhone("");
              }}
            />
            <TextInput
              placeholder="Môn học"
              value={subject}
              onChange={(e) => {
                e.preventDefault();
                setSubject(e.target.value);
              }}
              onAbort={(e) => {
                e.preventDefault();
                setSubject("");
              }}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              onAbort={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            />
            <TextInput
              placeholder="Số lượng học sinh trong một lớp"
              value={studentNum}
              onChange={(e) => {
                e.preventDefault();
                setStudentNum(e.target.value);
              }}
              onAbort={(e) => {
                e.preventDefault();
                setStudentNum(0);
              }}
            />
            <Textarea
              placeholder="Yêu cầu thêm"
              minRows={4}
              value={message}
              onChange={(e) => {
                e.preventDefault();
                setMessage(e.target.value);
              }}
              onAbort={(e) => {
                e.preventDefault();
                setMessage("");
              }}
            />
          </div>
          <div className="mt-8 w-full flex justify-end gap-3">
            <Button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full"
              onClick={submitSendMail}
            >
              ĐĂNG KÝ NGAY
            </Button>
          </div>
        </Modal>
        {/* Header section */}

        <div className="flex flex-col lg:flex-row gap-4 py-16 px-8" id="#">
          <div className="flex-1 relative">
            <CarouselWithThumb items={data?.product?.images} />
          </div>
          <div className="flex-1 p-4 rounded-lg text-left">
            <h1 className="text-xl text-blue-600 poppins-bold mb-4 cursor-pointer">
              {get(data, "product.name")}
            </h1>
            <h3 className="text-lg text-foreground-100 poppins-bold mb-2 ">
              Mô tả :
            </h3>
            <ul className="list-disc pl-6 text-base py-4 border-t-2 border-b-2 border-[#ccc] ">
              <li className="">
                Sức chứa: {formatNumber(get(data, "product.contains", 0))}
              </li>
              <li className="">Trang bị: {get(data, "product.equipment")}</li>
            </ul>
            <h2 className="text-lg font-bold text-red-600 my-4">
              <span className="text-stone-800 text-base">Giá:</span>{" "}
              {`${formatNumber(get(data, "product.price"))}` || "Liên hệ"} ( đã
              bao gồm đã bao gồm điện, nước, wifi, dọn phòng, giữ xe )
            </h2>
            <Button
              className="bg-[#003a6a] poppins-bold text-white font-bold px-4 rounded hover:bg-blue-200 w-full py-4 "
              onClick={toggleModal}
            >
              ĐĂNG KÝ NGAY
            </Button>
          </div>
        </div>
        {/* Detail section */}
        <div
          className="mt-8 w-full border-b-2 border-[#003a6a] flex justify-start"
          id="about"
        >
          <span className="px-4 py-2 bg-[#003a6a] text-white uppercase poppins-bold">
            Chi tiết
          </span>
        </div>
        <div className="mt-4 px-8 content-img">
          {parse(get(data, "product.content", ""))}
        </div>
        <div id="room" className="">
          <ProductCard />
        </div>
        {/* </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default ClassroomInterface;
