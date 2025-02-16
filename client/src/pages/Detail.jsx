/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CarouselWithThumb from "../components/carousel/CarouselWithThumb";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import fetchData from "../axios";
import { get, isEmpty, isNil, map, take } from "lodash";
import { formatNumber } from "../utils/helpers";
import { useNavigate, useParams } from "react-router-dom";

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

          `http://localhost:3000/api/product/detail/${id}`

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

  const productImage = data?.product?.image
    ? `${URL_API}${data.product.image.replace(/\\/g, "/")}`
    : "";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans">
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
          <CarouselWithThumb items={[get(data, "product.image", "")]} />
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
            <li className="mb-2">Trang bị: {get(data, "product.equipment")}</li>
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

      {/* Other products section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {map(take(get(data, "otherProducts", []), 3), (item, index) => (
          <div
            className="h-[300px] overflow-hidden rounded-sm relative group"
            key={item.id || index}
          >
            <img
              src={`http://localhost:3001/${get(item, "image", "")}`}
              className="size-full"
              alt={item.name || "Product"}
            />
            <div className="absolute top-[250px] w-full bg-[rgba(0,0,0,.7)] h-[300px] transition-all duration-300 group-hover:top-0 cursor-pointer p-2">
              <p className="text-white text-lg font-bold uppercase">
                {item.name || "Sản phẩm khác"}
              </p>
              <ul className="list-disc pl-6 mt-4 text-sm">
                <li className="text-white text-left">
                  {get(item, "capacity", 0)} bạn
                </li>
                <li className="text-white text-left">
                  {get(item, "contains", "Còn trống")}
                </li>
                <li className="text-white text-left">
                  {formatNumber(get(item, "price", 0))}/ tháng
                </li>
              </ul>
              <Button
                className="mt-4 mx-2 hover:text-white"
                onClick={() => {
                  const productId = get(item, "id", null);
                  !isNil(productId) &&
                    !isEmpty(productId) &&
                    console.log(`/detail/${productId}`);

                  navigate(`/detail/${productId}`, { replace: true });
                }}
              >
                Xem thêm
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassroomInterface;
