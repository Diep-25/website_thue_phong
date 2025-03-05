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

const URL_API = import.meta.env.VITE_URL_API;

const ClassroomInterface = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studentNum, setStudentNum] = useState(0);
  const [message, setMessage] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  const submitSendMail = useCallback(async () => {
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: `${message} - Số lượng học sinh: ${studentNum}`,
    };

    const isNumber = toNumber(studentNum);

    if (!isNumber) {
      toast.error("Số lượng học sinh phải là số.");
      return;
    }

    if (!name || !email || !message || !phone || !studentNum) {
      toast.error("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    await emailjs
      .send(
        "service_rzo6lhk",
        "template_xz8o0d9",
        templateParams,
        "X8w8CO4WHLVxBtx_S"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setIsSubmitting(false);
          setName("");
          setEmail("");
          setPhone("");
          setStudentNum(0);
          setMessage("");
          toggleModal();
        },
        (err) => {
          console.log("FAILED...", JSON.stringify(err));
          toast.error("Failed to send message, please try again later.");
          setIsSubmitting(false);
        }
      );
  });

  const productImage = data?.product?.image
    ? `${URL_API}${data.product.image.replace(/\\/g, "/")}`
    : "";

  return (
    <div className="w-full bg-img px-[2%] py-[5%] ">
      <div className="max-w-[1240px] bg-white mx-auto rounded-3xl sm:p-4 md:p-4 ">
        {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans"> */}
        <header className="relative p-4 mx-auto z-50">
          <div className="px-4">
            <div className="w-full flex justify-between items-center">
              {/* Social icons */}
              <div className="flex items-center space-x-4">
                <a
                  href={getConfigContentByKey("linkfb")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-6 h-6 text-brown hover:text-pink-500"
                  />
                </a>
                <a
                  href={getConfigContentByKey("linkMess")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookMessenger}
                    className="w-6 h-6 text-brown hover:text-pink-500"
                  />
                </a>
                <a
                  href={getConfigContentByKey("linkYoutube")}
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
                  onClick={(e) => {
                    handleSmoothScroll(e, "#");
                  }}
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
                  Chi tiết
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#room"
                  className="hover:underline decoration-wavy p-4"
                  onClick={(e) => handleSmoothScroll(e, "#rooms")}
                >
                  Các sản phẩm khác
                </a>
              </li>
            </ul>
          </div>
        </header>
        <Confetti />
        {/* Modal for registration */}
        <Modal
          opened={openModal}
          onClose={() => {
            setName("");
            setEmail("");
            setPhone("");
            setStudentNum(0);
            setMessage("");
            toggleModal();
          }}
          size="34rem"
          withCloseButton
          title="Đăng ký thuê phòng"
          overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
          classNames={{
            title: "font-bold text-base text-foreground text-center",
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
        <div className="text-center mb-6">
          {/* chinh o day */}
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-bold relative"
            // style={{ right: "20%" }}
          >
            {data?.product?.name || "Đang tải..."}
          </h1>
        </div>
        {/* Content section */}
        <div className="flex flex-col lg:flex-row gap-4" id="#">
          <div className="flex-1 relative">
            <CarouselWithThumb
              items={[`${URL_API}${data?.product?.image.replace(/\\/g, "/")}`]}
            />
          </div>
          <div className="flex-1 p-4 rounded-lg text-left">
            <h1 className="text-xl md:text-xl font-semibold mb-4 cursor-pointer">
              {get(data, "product.name")}
            </h1>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Mô tả</h3>
            <hr className="mb-2" />
            <ul className="list-disc pl-6 mb-4 text-sm md:text-base">
              <li className="mb-2">
                Sức chứa: {formatNumber(get(data, "product.capacity", 0))}
              </li>
              <li className="mb-2">
                Trang bị: {get(data, "product.equipment")}
              </li>
            </ul>
            <hr />
            <h3 className="text-base font-semibold text-red-500 mb-4">
              Giá:{" "}
              {`${formatNumber(get(data, "product.price", 10000))}/tháng` ||
                "Liên hệ"}{" "}
              (đã bao gồm {get(data, "product.contains")})
            </h3>
            <Button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full md:w-auto"
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
        {/* chinh o day */}
        <div className="mt-4 text-sm md:text-base text-left px-8">
          {get(data, "product.content", "")}
        </div>
        <div id="rooms ">
          <div className="w-full mx-auto my-12 px-8 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
                1240: { slidesPerView: 4, spaceBetween: 40 },
              }}
              className="w-full h-auto"
            >
              {map(
                [
                  ...get(data, "otherProducts", []),
                  ...get(data, "otherProducts", []),
                ],
                (product, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-[250px] mx-auto shadow-md overflow-hidden group relative rounded-md">
                      <img
                        src={`${URL_API}${product.image.replace(/\\/g, "/")}`}
                        alt="ảnh"
                        className="w-full h-[250px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex flex-col items-start px-4 py-2 text-white transform translate-y-100 group-hover:translate-y-0 transition-transform duration-500">
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <ul className="list-disc pl-6 mt-4 text-sm">
                          <li className="text-white text-left">
                            {get(product, "capacity", 0)} bạn
                          </li>
                          <li className="text-white text-left">
                            {get(product, "contains", "Còn trống")}
                          </li>
                          <li className="text-white text-left">
                            {formatNumber(get(product, "price", 0))}/ tháng
                          </li>
                        </ul>
                        <button
                          onClick={(e) => {
                            e?.preventDefault();
                            const productId = get(product, "id", null);
                            !isNil(productId) &&
                              !isEmpty(productId) &&
                              console.log(`/detail/${productId}`);

                            navigate(`/detail/${productId}`, {
                              replace: true,
                            });
                          }}
                          className="my-4 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors"
                        >
                          Xem thêm
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <FontAwesomeIcon
              className="swiper-button-next-custom color-pink"
              icon={faCircleRight}
            />
            <FontAwesomeIcon
              className="swiper-button-prev-custom color-pink "
              icon={faCircleLeft}
            />
          </div>
        </div>
        {/* </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default ClassroomInterface;
