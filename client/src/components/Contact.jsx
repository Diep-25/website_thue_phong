import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import useConfigContentByKey from "../hooks/useConfigContentByKey";
import { showToastSuccess, showToastError } from '../helpers/toast'
import fetchData from "../axios";

const URL_API = import.meta.env.VITE_URL_API;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      subject: message,
    };

    // Kiểm tra xem các giá trị có hợp lệ không trước khi gửi
    if (!name || !email || !message || !phone) {
      toast.error("Làm ơn điền đầy đủ thông tin."); // Thông báo lỗi khi thiếu thông tin
      setIsSubmitting(false);
      return;
    }

    try {
      await fetchData(`${URL_API}api/contact`, "POST", templateParams)

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast.success("Gửi thông báo thành công!");
      
    } catch {  
      toast.error("Gửi thông báo thất bại!"); 
    } finally {
      setIsSubmitting(false)
    }

  };

  return (
    <div className="mt-6 sm:mt-36 mb-6 sm:mb-12 w-full p-6 px-[40px] sm:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center justify-items-center">
      <img
        className="p-0 sm:p-6 w-full flex justify-center items-center"
        src={`${URL_API}${useConfigContentByKey("imgContact")?.replace(
          /\\/g,
          "/"
        )}`}
        alt=""
      />

      <div className="w-full p-4 px-0 sm:px-4 flex items-center">
        <form onSubmit={handleSubmit} className="w-full">
          <label className="block mb-2 ">
            <input
              type="text"
              placeholder="Họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="text-xs sm:text-lg mt-1 block w-full border border-[#b8c7b0] placeholder:text-[#abb8c3] rounded-[5px] p-2 text-black px-4"
            />
          </label>
          <label className="block mb-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-xs sm:text-lg mt-1 block w-full border border-[#b8c7b0] placeholder:text-[#abb8c3] rounded-[5px] p-2 text-black px-4"
            />
          </label>
          <label className="block mb-2">
            <input
              type="tel"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="text-xs sm:text-lg mt-1 block w-full border border-[#B8C7B0] placeholder:text-[#abb8c3] rounded-[5px] p-2 text-black px-4"
            />
          </label>
          <label className="block mb-2">
            <textarea
              placeholder="Nội dung"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 h-[100px] text-xs sm:text-lg block w-full border border-[#b8c7b0] rounded-[5px] p-2 placeholder:text-[#abb8c3] text-black px-4"
            ></textarea>
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-auto bg-[#b8c7b0] px-[15px] sm:px-[20px] text-white rounded-tl-xl text-xs sm:text-lg rounded-br-xl py-2 hover:bg-[#e57f7f] max-sm:mt-0"
          >
            {isSubmitting ? "ĐANG GỬI..." : "GỬI THÔNG BÁO"}
          </button>
        </form>
      </div>

      {/* Thêm ToastContainer vào đây */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
