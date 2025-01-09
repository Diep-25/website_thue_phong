/* eslint-disable no-unused-vars */
import React from "react";
import CarouselWithThumb from "../components/carousel/CarouselWithThumb";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Textarea, TextInput } from "@mantine/core";

const fakeData = {
  title: "P2B MỘT PHÒNG DẠY MÁT MẺ TRONG MÙA HÈ NÓNG BỨC",
  description: [
    "Sức chứa: 30 học viên",
    "Trang bị: Tivi - Điều hòa - Bảng trắng - Kệ sách - Bàn ghế",
  ],
  price: "1.020k/tháng",
  images: [
    "https://trungtamhoahoctro.com/wp-content/uploads/2023/04/IMG_9776-2048x1536.jpg",
    "https://trungtamhoahoctro.com/wp-content/uploads/2023/04/HHT2-Trang-tri-3-2048x1536.jpg",
    "https://trungtamhoahoctro.com/wp-content/uploads/2023/04/HHT2-Trang-tri-5-2048x1536.jpg",
  ],
};

const ClassroomInterface = () => {
  const [openModal, { toggle: toggleModal }] = useDisclosure();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans max-w-4xl">
      <Modal
        opened={openModal}
        onClose={toggleModal}
        size="34rem"
        withCloseButton={true}
        title="Đăng ký thuê phòng"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
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
            onClick={() => toggleModal()}
          >
            ĐĂNG KÝ NGAY
          </Button>
        </div>
      </Modal>
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          {fakeData.title}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <CarouselWithThumb items={fakeData.images || []} />
        </div>
        <div className="flex-1 p-4 rounded-lg text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Mô tả</h3>
          <ul className="list-disc pl-6 mb-4 text-sm md:text-base">
            {fakeData.description.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-base font-semibold text-red-500 mb-4">
            Giá: {fakeData.price}
          </h3>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full md:w-auto"
            onClick={() => toggleModal()}
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>

      <div className="mt-8 w-full border-b-2 border-[#003a6a] flex justify-start">
        <span className="px-4 py-2 bg-[#003a6a] text-white relative">
          Chi tiết
        </span>
      </div>

      <div className="mt-4 text-sm md:text-base">
        <p className="font-bold text-lg md:text-xl text-start">
          BỎ TÚI NGAY ĐỊA ĐIỂM THUÊ PHÒNG DẠY UY TÍN, GIÁ RẺ ĐÀ NẴNG 45 HỌC VIÊN
        </p>
        <p className="text-[#555555] mt-4 text-justify">
          Tối giản, decor chill chill từ sảnh đến cửa phòng, thiết bị đầy đủ là
          những gì cần thiết mà bạn cần có trong một địa điểm cho thuê phòng
          dạy.
        </p>
        <p className="text-[#555555] mt-4 text-justify">
          Như khi bạn chọn một quán cà phê để vào, bố trí decor hợp nhãn cũng
          cho bạn sự thoải mái, vậy nên tại địa điểm cho thuê phòng dạy chúng
          mình luôn kèm theo những tiện ích tạo cảm xúc vô hình nhằm giải tỏa
          căng thẳng cho bạn – Người giáo viên và cho học viên của bạn.
        </p>
        <div className="flex flex-col items-center mt-4">
          <img
            className="w-full md:w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2023/04/IMG_1408-768x768.jpg"
            alt=""
          />
          <p className="text-[#555555] text-sm md:text-base mt-2">
            Trang trí khu cầu thang cho thuê phòng dạy học tại Đà Nẵng
          </p>
        </div>
        <p className="text-[#555555] mt-4 text-justify">
          Những khu vực ngoài <b>căn phòng dạy cho thuê</b> được trang trí đan
          xen các mảng tạo hiệu ứng đèn hắt sáng vừa chiếu sáng lại vừa trang
          trí đẹp mắt cho lối đi vào.
        </p>
      </div>
      <div className="mt-4 text-sm md:text-base">
        <p className="font-bold text-lg md:text-xl text-start">
          CĂN PHÒNG DẠY HỌC CHO THUÊ
        </p>
        <p className="text-[#555555] mt-4 text-justify">
          Như bạn đã biết, <b>một căn phòng dạy học</b> chuẩn là một căn phòng
          bố trí đơn giản, không rối mắt, đủ độ sáng (độ lux) và phân bổ đều,
          cách âm thanh bên ngoài tốt.
        </p>
        <p className="text-[#555555] mt-4 text-justify">
          Trang bị đầy đủ và có khoảng không gian không quá thưa cũng không quá
          chật chội gây bí bách. Khác biệt với không gian bên ngoài được decord
          mang phong cách sống động, vui tươi, không gian bên trong căn phòng
          phải cực kì tối giản, nếu có thể trang hoàng thì nên bố trí kệ sách,
          những câu châm ngôn để khích lệ tinh thần người học.
        </p>
        <div className="flex flex-col items-center mt-4">
          <img
            className="w-full md:w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-p2b-2-768x576.jpg"
            alt=""
          />
          <p className="text-[#555555] text-sm md:text-base mt-2">
            Cho Thuê Phòng Học Đà Nẵng
          </p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <img
            className="w-full md:w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-p2b-1-768x576.jpg"
            alt=""
          />
          <p className="text-[#555555] text-sm md:text-base mt-2">
            Cho Thuê Phòng Học Đà Nẵng
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="h-[300px] overflow-hidden rounded-sm relative group">
          <img
            src="https://trungtamhoahoctro.com/wp-content/uploads/2023/04/IMG_9719-2048x1536.jpg"
            className="size-full"
            alt=""
          />
          <div className="absolute top-[228px] w-full bg-[rgba(0,0,0,.7)] h-[300px] transition-all duration-300 group-hover:top-0 cursor-pointer p-2 flex flex-col justify-start">
            <p className="text-white text-lg font-bold uppercase relative text-start">
              P1 TOP PHÒNG DẠY HỌC CHO THUÊ ĐÀ NẴNG 5/2023
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-[1000ms] group-hover:w-full"></span>
            </p>
            <ul className="list-disc pl-6 mt-4 text-sm">
              <li className="text-white">22 bạn</li>
              <li className="text-white">
                Tivi, điều hòa, bảng trắng, kệ sách, bàn ghế
              </li>
              <li className="text-white">1.020k/ tháng</li>
            </ul>

            <Button className="mt-4 mx-2 hover:text-white">Xem thêm</Button>
          </div>
        </div> 
        {/* Add more cards similarly */}
      </div>
    </div>
  );
};

export default ClassroomInterface;
