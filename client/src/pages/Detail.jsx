import React, { useEffect, useState } from "react";
import CarouselWithThumb from "../components/carousel/CarouselWithThumb";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import fetchData from "../axios";
import { get, isEmpty, isNil, map, take } from "lodash";
import { formatNumber } from "../utils/helpers";
import { useNavigate, useParams } from "react-router-dom";
import Confetti from "react-confetti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const URL_API = import.meta.env.VITE_URL_API;

const ClassroomInterface = () => {
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
        console.log(response.data)
        setData(response.data || null);
      } catch (err) {
        setData(null);
      }
    };

    if (id) {
      fetchDataFromAPI();
    }
  }, [id]);

  const productImage = data?.product?.image
    ? `${URL_API}${data.product.image.replace(/\\/g, "/")}`
    : "";

  return (
    <div className="w-full bg-img px-[2%] py-[5%] ">
      <div className="max-w-[1240px] bg-white mx-auto rounded-3xl sm:p-4 md:p-4 ">
        {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans"> */}
          <Confetti />
          {/* Modal for registration */}
          <Modal
            opened={openModal}
            onClose={toggleModal}
            size="34rem"
            withCloseButton
            title="Đăng ký thuê phòng"
            overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
            classNames={{
              title: "font-bold text-base text-foreground text-center",
            }}
          >
            <div className="mt-4 w-full flex gap-5 flex-col">
              <TextInput placeholder="Họ và tên" />
              <TextInput placeholder="Số điện thoại" />
              <TextInput placeholder="Email" />
              <TextInput placeholder="Số lượng học sinh trong một lớp" />
              <Textarea placeholder="Yêu cầu thêm" minRows={4} />
            </div>
            <div className="mt-8 w-full flex justify-end gap-3">
              <Button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full"
                onClick={toggleModal}
              >
                ĐĂNG KÝ NGAY
              </Button>
            </div>
          </Modal>
          {/* Header section */}
          <div className="text-center mb-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {data?.product?.name || "Đang tải..."}
            </h1>
          </div>
          {/* Content section */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <CarouselWithThumb items={[`${URL_API}${data?.product?.image.replace(/\\/g, "/")}`]} />
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
          <div className="mt-8 w-full border-b-2 border-[#003a6a] flex justify-start">
            <span className="px-4 py-2 bg-[#003a6a] text-white">Chi tiết</span>
          </div>
          <div className="mt-4 text-sm md:text-base text-left">
            {get(data, "product.content", "")}
          </div>
          <div id="room">
            <div className="w-full mx-auto px-8 relative">
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
      </div>
    </div>
  );
};

export default ClassroomInterface;
