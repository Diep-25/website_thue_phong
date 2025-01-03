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
    <div className="container mx-auto p-4 font-sans max-w-4xl">
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
        <h1 className="text-xl md:text-2xl font-bold">{fakeData.title}</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <CarouselWithThumb items={fakeData.images || []} />
        </div>
        <div className="flex-1 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Mô tả</h3>
          <ul className="list-disc pl-6 mb-4">
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
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full"
            onClick={() => toggleModal()}
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>

      <div className="mt-8 w-full border-b-2 border-[#003a6a]">
        <span className="px-4 py-2 bg-[#003a6a] text-white relative bottom-[5px]">
          Chi tiết
        </span>
      </div>

      <div className="mt-4">
        <p className="font-bold text-lg">
          BỎ TÚI NGAY ĐỊA ĐIỂM THUÊ PHÒNG DẠY UY TÍN, GIÁ RẺ ĐÀ NẴNG 45 HỌC VIÊN
        </p>
        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Tối giản, decor chill chill từ sảnh đến cửa phòng, thiết bị đầy đủ là
          những gì cần thiết mà bạn cần có trong một địa điểm cho thuê phòng
          dạy.
        </p>
        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Như khi bạn chọn một quán cà phê để vào, bố trí decor hợp nhãn cũng
          cho bạn sự thoải mái, vậy nên tại địa điểm cho thuê phòng dạy chúng
          mình luôn kèm theo những tiện ích tạo cảm xúc vô hình nhằm giải tỏa
          căng thẳng cho bạn – Người giáo viên và cho học viên của bạn.
        </p>
        <div className="flex flex-col w-full flex-center mt-4">
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2023/04/IMG_1408-768x768.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Trang trí khu cầu thang cho thuê phòng dạy học tại Đà Nẵng
          </p>
        </div>
        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Những khu vực ngoài <b>căn phòng dạy cho thuê</b> được trang trí đan
          xen các mảng tạo hiệu ứng đèn hắt sáng vừa chiếu sáng lại vừa trang
          trí đẹp mắt cho lối đi vào.
        </p>
        <p className="text-[#ff0000] font-bold mt-4 text-lg">
          CĂN PHÒNG DẠY HỌC CHO THUÊ
        </p>
        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Như bạn đã biết, <b>một căn phòng dạy học</b> chuẩn là một căn phòng
          bố trí đơn giản, không rối mắt, đủ độ sáng (độ lux) và phân bổ đều,
          cách âm thanh bên ngoài tốt.
        </p>
        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Trang bị đầy đủ và có khoảng không gian không quá thưa cũng không quá
          chật chội gây bí bách. Khác biệt với không gian bên ngoài được decord
          mang phong cách sống động, vui tươi, không gian bên trong căn phòng
          phải cực kì tối giản, nếu có thể trang hoàng thì nên bố trí kệ sách,
          những câu châm ngôn để khích lệ tinh thần người học.
        </p>

        <div className="flex flex-col w-full flex-center mt-4">
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-p2b-2-768x576.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Cho Thuê Phòng Học Đà Nẵng
          </p>
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-p2b-1-768x576.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Cho Thuê Phòng Học Đà Nẵng
          </p>
        </div>

        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Đặc biệt lưu ý, khi bạn đi tìm hiểu để thuê một phòng dạy ưng ý. Việc
          quan trọng là bạn nên đến tham khảo tận nơi. Bức ảnh không truyền tải
          đầy đủ cảm xúc khi bạn đặt chân vào căn phòng tham khảo thực tế, cùng
          nhiều yếu tố ngoại cảnh khác góp phần tạo cảm giác phù hợp cho bạn nên
          khuyến khích bạn đi đến tham khảo tận nơi để từ đó có sự đánh giá
          chính xác, phù hợp cho lớp học của bạn!
        </p>

        <img
          className="w-[80%] h-auto mt-4"
          src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-p2b-6-768x576.jpg"
          alt=""
        />

        <div className="flex flex-col w-full flex-center mt-4">
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-p2b-3-768x576.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Phòng Học Cho Thuê Đà Nẵng
          </p>
        </div>

        <p className="text-[#ff0000] font-bold mt-4 text-lg">
          ĐỊA ĐIỂM DI CHUYỂN ĐẾN NƠI THUÊ PHÒNG DẠY
        </p>
        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Vì sao lựa chọn “địa điểm” quan trọng đến vậy?
        </p>
        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Có rất nhiều yếu tố để bạn tiến lên trong con đường tạo lập một lớp
          học đông đảo – bền vững – chất lượng – hạnh phúc. Bạn càng tích lũy
          được càng nhiều yếu tố bao nhiêu bạn càng đến gần với mục tiêu hơn.
          Một trong những yếu tố đó là vị trí chổ dạy học. Việc chọn được địa
          điểm lý tưởng sẽ giúp bạn góp được một số yếu tố tốt như:
        </p>

        <ul className="list-disc pl-6 mt-4">
          <li className="text-[#555555] text-[1rem] font-normal">
            Di chuyển dễ dàng (không gây cản trở trong việc đi lại của học viên)
          </li>
          <li className="text-[#555555] text-[1rem] font-normal">
            Tiện ích xung quanh (học viên có thể ăn uống thuận tiện gần chổ học,
            bãi xe gần, tiệm phô tô in tài liệu gần,…)
          </li>
          <li className="text-[#555555] text-[1rem] font-normal">
            Phong cảnh (cảm giác khu vực hiện đại sẽ góp phần support tinh thần)
          </li>
        </ul>

        <div className="flex flex-col w-full flex-center mt-4">
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2023/05/So-do-HHT2-768x576.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Sơ đồ đến trung tâm cho thuê phòng dạy học
          </p>
        </div>

        <p className="text-[#ff0000] font-bold mt-4 text-lg">
          NHỮNG QUYỀN LỢI KHÁC
        </p>

        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Nước uống – Miễn Phí và nhiều loại lựa chọn
        </p>

        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Bãi xe sát khu vực Phòng Dạy Cho Thuê – Miễn phí có bảo vệ
        </p>

        <div className="flex flex-col w-full flex-center mt-4">
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht2-xe-9-768x576.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            bãi xe cho thuê phòng dạy Đà Nẵng
          </p>
        </div>

        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Khu vực Phòng chờ giao lưu chờ vào lớp.
        </p>

        <div className="flex flex-col w-full flex-center mt-4">
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-trangtri-53-768x1024.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Phòng chờ lối vào Phòng Học cho Thuê
          </p>
        </div>

        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Vệ sinh được dọn 3 lần/tuần luôn giữ căn phòng luôn như mới. Khi căn
          phòng không đủ sạch sẽ, mong bạn hãy report lại trung tâm nhé.
        </p>

        <div className="flex flex-col w-full flex-center mt-4">
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-trangtri-50-768x576.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Phòng chờ lối vào Phòng Học cho Thuê
          </p>
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2024/12/hht1-trangtri-23-768x768.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Phòng chờ lối vào Phòng Học cho Thuê
          </p>
        </div>

        <p className="text-[#ff0000] font-bold mt-4 text-lg">
          NGOÀI RA CÒN CÁC PHÒNG DẠY KHÁC ĐỂ BẠN CHỌN
        </p>

        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          <b>Căn phòng dạy học phù hợp</b> là khi chứa đủ số lượng học viên mà
          không gian phòng không quá chật chội và không quá rộng rãi dư thưa.
          Chật chội không có khu vực trống (quá khít) sẽ làm người học bí bách,
          từ đó ảnh hưởng đến suy nghĩ không thoáng. Còn quá nhiều không gian
          trống lại mang đến cho người học sự mất tập trung, hơn nữa phòng có
          nhiều chổ ngồi còn trống sẽ làm người ta nghĩ rằng bạn tuyển sinh
          không được và lý do là chất lượng sư phạm của bạn kém.
        </p>

        <div className="flex flex-col w-full flex-center mt-4">
          <img
            className="w-[80%] h-auto"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2023/05/photo-output-1-768x768.jpg"
            alt=""
          />
          <p className="text-[#555555] text-[1rem] font-normal mt-2">
            Tập hợp những phòng dạy cho thuê giá rẻ ở Đà Nẵng
          </p>
        </div>

        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Không như những trung tâm khác, trung tâm Hoa Học Trò chúng tôi luôn
          mong muốn tiếp nhận những góp ý tích cực từ giáo viên và học sinh hoạt
          động tại nơi đây để có thể cung cấp dịch vụ với chất lượng tốt nhất
          với chi phí hợp lý ?
        </p>

        <p className="text-[#555555] text-[1rem] font-normal mt-4">
          Khi bạn đăng ký là đồng nghĩa với việc bạn được bàn giao Phòng Học
          ngay, trung tâm đảm bảo thủ tục nhanh, gọn nhẹ và phòng luôn sẵn sàng
          dành cho bạn.
        </p>

        <p className="text-[#ff6600] text-[1rem] font-normal mt-4">
          Thủ tục cho thuê phòng học đơn giản nên bạn yên tâm nhé ^^
        </p>

        <video
          className="wp-video-shortcode mt-4"
          id="video-1133-1_html5"
          width={525}
          height={394}
          preload="metadata"
          src="https://trungtamhoahoctro.com/wp-content/uploads/2023/04/HHT3_trang-tri.mp4?_=1"
          style={{ width: "525px", height: "393.75px" }}
          controls
        >
          <source
            type="video/mp4"
            src="https://trungtamhoahoctro.com/wp-content/uploads/2023/04/HHT3_trang-tri.mp4?_=1"
          />
          <a href="https://trungtamhoahoctro.com/wp-content/uploads/2023/04/HHT3_trang-tri.mp4">
            https://trungtamhoahoctro.com/wp-content/uploads/2023/04/HHT3_trang-tri.mp4
          </a>
        </video>

        <p className="font-bold mt-4 text-lg">Các phòng khác</p>

        <div className="grid grid-cols-3 gap-4 mt-4 w-[100%]">
          <div className="h-[300px] overflow-hidden rounded-sm relative group">
            <img
              src="https://trungtamhoahoctro.com/wp-content/uploads/2023/04/IMG_9719-2048x1536.jpg"
              className="size-full"
              alt=""
            />
            <div className="absolute top-[228px] w-full bg-[rgba(0,0,0,.7)] h-[300px] transition-all duration-300 group-hover:top-0 cursor-pointer p-2">
              <p className="text-white text-lg font-bold uppercase relative">
                P1 TOP PHÒNG DẠY HỌC CHO THUÊ ĐÀ NẴNG 5/2023
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-[1000ms] group-hover:w-full"></span>
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li className="text-white text-[1rem] font-normal">22 bạn</li>
                <li className="text-white text-[1rem] font-normal">
                  Tivi, điều hòa, bảng trắng, kệ sách, bàn ghế
                </li>
                <li className="text-white text-[1rem] font-normal">
                  1.020k/ tháng
                </li>
              </ul>

              <Button className="mt-4 mx-2 hover:text-white">Xem thêm</Button>
            </div>
          </div>
          <div className="h-[300px] overflow-hidden rounded-sm relative group">
            <img
              src="https://trungtamhoahoctro.com/wp-content/uploads/2021/08/3B-4-2048x1536.jpg"
              className="size-full"
              alt=""
            />
            <div className="absolute top-[228px] w-full bg-[rgba(0,0,0,.7)] h-[300px] transition-all duration-300 group-hover:top-0 cursor-pointer p-2">
              <p className="text-white text-lg font-bold uppercase relative leading-5">
                P3A THUÊ PHÒNG DẠY TẶNG KÈM BÃI XE SIÊU TO KHỔNG LỒ UPDATE THÁNG 5 / 2023
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-[1000ms] group-hover:w-full"></span>
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li className="text-white text-[1rem] font-normal">25-30 học viên</li>
                <li className="text-white text-[1rem] font-normal">
                  Tivi, điều hoà, bảng chống lóa, bàn ghế
                </li>
                <li className="text-white text-[1rem] font-normal">
                  1.020k/ tháng (giá tương xứng dịch vụ)
                </li>
              </ul>

              <Button className="mt-4 mx-2 hover:text-white">Xem thêm</Button>
            </div>
          </div>
          <div className="h-[300px] overflow-hidden rounded-sm relative group">
            <img
              src="https://trungtamhoahoctro.com/wp-content/uploads/2021/08/2B-3-2048x1536.jpg"
              className="size-full"
              alt=""
            />
            <div className="absolute top-[228px] w-full bg-[rgba(0,0,0,.7)] h-[300px] transition-all duration-300 group-hover:top-0 cursor-pointer p-2">
              <p className="text-white text-lg font-bold uppercase relative">
                P2B CHO THUÊ PHÒNG DẠY HỌC CHI PHÍ THẤP
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-[1000ms] group-hover:w-full"></span>
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li className="text-white text-[1rem] font-normal">35-42 bạn</li>
                <li className="text-white text-[1rem] font-normal">
                  Ti vi, Điều hoà, Bảng chống lóa, Quạt, Bàn ghế, Thiết bị chiếu sáng
                </li>
                <li className="text-white text-[1rem] font-normal">
                  1.020k/ tháng (giá tương xứng dịch vụ)
                </li>
              </ul>

              <Button className="mt-4 mx-2 hover:text-white">Xem thêm</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomInterface;
