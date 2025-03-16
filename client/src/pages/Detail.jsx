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

    if (!name || !email || !message || !phone || !studentNum || !subject) {
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

  const productImage = data?.product?.image
    ? `${URL_API}${data.product.image.replace(/\\/g, "/")}`
    : "";

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
      <div className="scrollbar-hide my-20 md:max-w-[1200px] h-[80vh] bg-white rounded-3xl  xl:mx-auto mx-[5%] overflow-y-auto ">
        <Header />
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

        <div className="flex flex-col lg:flex-row gap-4 px-8" id="#">
          <div className="flex-1 relative">
            <CarouselWithThumb
              items={[`${URL_API}${data?.product?.image.replace(/\\/g, "/")}`]}
            />
          </div>
          <div className="flex-1 p-4 rounded-lg text-left">
            <h1 className="text-2xl text-blue-800 poppins-bold mb-4 cursor-pointer">
              {get(data, "product.name")}
            </h1>
            <h3 className="text-2xl  poppins-bold  mb-8">Mô tả</h3>
            <ul className="list-disc pl-6 mb-4 text-2xl ">
              <li className="mb-2">
                Sức chứa: {formatNumber(get(data, "product.contains", 0))}
              </li>
              <li className="mb-2">
                Trang bị: {get(data, "product.equipment")}
              </li>
            </ul>
            <hr />
            <h3 className="poppins-bold text-xl text-red-500 mb-8 my-8">
              Giá:{" "}
              {`${formatNumber(get(data, "product.price", 10000))}` ||
                "Liên hệ"}{" "}
              ( đã bao gồm đã bao gồm điện, nước, wifi, dọn phòng, giữ xe )
            </h3>
            <Button
              className="bg-blue-600 text-white px-4 rounded hover:bg-blue-500 w-full py-4 "
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
          <span className="px-4 py-2 bg-[#003a6a] text-white">Chi tiết</span>
        </div>
        <div className="mt-4 px-8">
          {parse(get(data, "product.content", ""))}
        </div>
        <ProductCard />
        {/* </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default ClassroomInterface;
