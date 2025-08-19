import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fetchData from "../axios";
const URL_API = import.meta.env.VITE_URL_API;


const ProductCard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  const handleDetailProduct = (id) => () => {
    navigate(`/detail/${id}`);
  };


  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchData(`${URL_API}api/product`);


        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length
        ) {
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


  const handleHover = (hovering) => {
    const nextBtn = document.querySelector(".swiper-button-next-custom");
    const prevBtn = document.querySelector(".swiper-button-prev-custom");
    if (nextBtn && prevBtn) {
      if (hovering) {
        nextBtn.style.opacity = "0.3";
        prevBtn.style.opacity = "0.3";
      } else {
        nextBtn.style.opacity = "1";
        prevBtn.style.opacity = "1";
      }
    }
  };


  return (
    <div className="w-full mx-auto px-6 sm:px-20 relative my-6 sm:my-36">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={12}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 13 },
          480: { slidesPerView: 1, spaceBetween: 13 },
          640: { slidesPerView: 1, spaceBetween: 13 },
          768: { slidesPerView: 3, spaceBetween: 13 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1240: { slidesPerView: 4, spaceBetween: 27 },
        }}
        className="w-full h-auto"
      >
        {data.map((product, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <div className="h-[300px] mx-auto overflow-hidden group relative">
              <img
                src={`${URL_API}${product.image.replace(/\\/g, "/")}`}
                alt="ảnh"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex flex-col items-start px-4 py-2 text-white transform translate-y-100 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <ul className="list-disc ml-5 text-base mt-2 space-y-1">
                  {/* chỗ này cần sửa */}
                  <li>{product.equipment}</li>
                  <li>{product.contains}</li>
                </ul>
                <button
                  onClick={handleDetailProduct(product.id)}
                  className="my-4 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition-colors"
                >
                  Xem thêm
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
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
  );
};


export default ProductCard;