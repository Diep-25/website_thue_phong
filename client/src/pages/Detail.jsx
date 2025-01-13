/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CarouselWithThumb from "../components/carousel/CarouselWithThumb";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import fetchData from "../axios";
import { get, isNil, map, take } from "lodash";

const URL_API = import.meta.env.VITE_URL_API;

const ClassroomInterface = () => {
  const [openModal, { toggle: toggleModal }] = useDisclosure();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchData("http://localhost:3000/api/product/detail/7");
        setData(response.data || null);
      } catch (err) {
        setData(null);
      }
    };

    fetchDataFromAPI();
  }, []);

  const productImage = data?.product?.image ? `${URL_API}${data.product.image.replace(/\\/g, '/')}` : "";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans max-w-4xl">
      {/* Modal for registration */}
      <Modal
        opened={openModal}
        onClose={toggleModal}
        size="34rem"
        withCloseButton
        title="Đăng ký thuê phòng"
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
        classNames={{ title: "font-bold text-base text-foreground text-center" }}
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
          <CarouselWithThumb items={[productImage]} />
        </div>
        <div className="flex-1 p-4 rounded-lg text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Mô tả</h3>
          <h3 className="text-base font-semibold text-red-500 mb-4">
            Giá: {data?.product?.price || "Liên hệ"}
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

      <div className="mt-4 text-sm md:text-base">
        <div className="text-center sm:text-left">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#333]">
            BỎ TÚI NGAY ĐỊA ĐIỂM THUÊ PHÒNG DẠY UY TÍN, GIÁ RẺ ĐÀ NẴNG
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#555555] mt-2 sm:mt-4 leading-relaxed">
            Tối giản, decor chill chill từ sảnh đến cửa phòng, thiết bị đầy đủ là
            những gì cần thiết mà bạn cần có trong một địa điểm cho thuê phòng dạy.
          </p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <img
            className="w-full md:w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2023/04/IMG_1408-768x768.jpg"
            alt="Trang trí khu cầu thang"
          />
          <p className="text-[#555555] text-sm md:text-base mt-2">Trang trí khu cầu thang cho thuê phòng dạy học tại Đà Nẵng</p>
        </div>
      </div>

      {/* Other products section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {map(take(get(data, "otherProducts", []), 3), (item, index) => (
          <div
            className="h-[300px] overflow-hidden rounded-sm relative group"
            key={item.id || index}
          >
            <img
              src={`http://localhost:3000/${item.image || ""}`}
              className="size-full"
              alt={item.name || "Product"}
            />
            <div className="absolute top-[228px] w-full bg-[rgba(0,0,0,.7)] h-[300px] transition-all duration-300 group-hover:top-0 cursor-pointer p-2">
              <p className="text-white text-lg font-bold uppercase">
                {item.name || "Sản phẩm khác"}
              </p>
              <Button className="mt-4 mx-2 hover:text-white">Xem thêm</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassroomInterface;
