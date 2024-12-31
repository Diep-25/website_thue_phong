import React from 'react';

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
  return (
    <div className="container mx-auto p-4 font-sans max-w-4xl">
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold">{fakeData.title}</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <img
            className="w-full rounded-lg"
            src={fakeData.images[0]}
            alt="Main Classroom"
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 rounded-full p-2 shadow hover:bg-gray-200">
            &#8249;
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-700 rounded-full p-2 shadow hover:bg-gray-200">
            &#8250;
          </button>
        </div>
        <div className="flex-1 p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Mô tả</h3>
          <ul className="list-disc pl-6 mb-4">
            {fakeData.description.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-base font-semibold text-red-500 mb-4">Giá: {fakeData.price}</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full">
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 justify-center">
        {fakeData.images.slice(0).map((image, index) => (
          <img
            key={index}
            className="w-full h-32 rounded-lg cursor-pointer border hover:border-blue-500 object-cover"
            src={image}
            alt={`Classroom View ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassroomInterface;
