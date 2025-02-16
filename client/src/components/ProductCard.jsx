import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import fetchData from "../axios";
import { useNavigate } from "react-router-dom";
const URL_API = import.meta.env.VITE_URL_API;
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleDetailProduct = (id) => () => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchData("http://localhost:3001/api/product");

        if (response.data && Array.isArray(response.data) && response.data.length) {
          setData(response.data);
        } else {
          setData([]);
        }
      } catch (err) {
        setData([]);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className="w-full mx-auto px-8 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1240: { slidesPerView: 4, spaceBetween: 40 }
        }}
        className="w-full h-auto"
      >
        {data.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="h-[300px] mx-auto shadow-md overflow-hidden group relative rounded-3xl">
              <img src={`${URL_API}${product.image.replace(/\\/g, "/")}`} alt="ảnh" className="w-full h-[300px] object-cover" />
              <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex flex-col items-start px-4 py-2 text-white transform translate-y-100 group-hover:translate-y-0 transition-transform duration-500">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <ul className="list-disc ml-5 text-base mt-2 space-y-1">
                  <li>{product.content}</li>
                </ul>
                <button onClick={handleDetailProduct(product.id)} className="my-4 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors">
                  Xem thêm
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <FontAwesomeIcon className="swiper-button-next-custom color-pink" icon={faCircleRight}  />
      <FontAwesomeIcon className="swiper-button-prev-custom color-pink "icon={faCircleLeft} />
    </div>
  );
};

export default ProductCard;
