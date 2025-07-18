import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { get, toNumber } from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showToastSuccess, showToastError } from '../helpers/toast'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fetchData from "../axios";
import CarouselWithThumb from "../components/carousel/CarouselWithThumb";
import { formatNumber } from "../utils/helpers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import parse from "html-react-parser";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
const URL_API = import.meta.env.VITE_URL_API;

const ClassroomInterface = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [studentNum, setStudentNum] = useState('');
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
          `${URL_API}api/product/detail/${id}`
        );
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
    setLoading(true)
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
      showToastError("Số lượng học sinh phải là số.");
      return;
    }

    if (!name || !message || !phone || !studentNum || !subject) {
      showToastError("Please fill in all fields.");
      return;
    }

    try {
      await fetchData(`${URL_API}api/order/insert`, "POST", templateParams)

      setName("");
      setSubject("");
      setEmail("");
      setPhone("");
      setStudentNum(0);
      setMessage("");
      toggleModal();
      showToastSuccess("Message sent successfully!");
      
    } catch (error) {
      if (error && error?.response?.data?.message) {
        showToastError(error?.response?.data?.message);
      }
      
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="overflow-hidden">
      <img
        src={`${URL_API}${useConfigContentByKey("backgroud")?.replace(
          /\\/g,
          "/"
        )}`}
        alt=""
        className="w-full h-full xl:h-screen object-cover fixed bg-fixed -z-10 "
      />
      <div className=""></div>
      <div className="relative scrollbar-hide my-20 md:max-w-[1380px] h-[80vh] sm:h-[80vh] md:h-[85vh] lg:h-[85vh] xl:h-[75vh] max-sm:h-[128vh] bg-white rounded-3xl xl:mx-auto mx-[5%] overflow-y-auto">
        <Header/>  
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
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full"
              onClick={submitSendMail}
            >
            {loading ? <> <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
              Loading... </> : "ĐĂNG KÝ NGAY"}
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
