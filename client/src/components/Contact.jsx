import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import useConfigContentByKey from "../hooks/useConfigContentByKey";

const URL_API = import.meta.env.VITE_URL_API;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };

    // Kiểm tra xem các giá trị có hợp lệ không trước khi gửi
    if (!name || !email || !message || !phone) {
      toast.error("Làm ơn điền đầy đủ thông tin."); // Thông báo lỗi khi thiếu thông tin
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(
        "service_rzo6lhk", // Service ID của bạn
        "template_xz8o0d9", // Template ID của bạn
        templateParams,
        "X8w8CO4WHLVxBtx_S" // User ID của bạn
      )
      .then(
        (response) => {
          toast.success("Gửi thông báo thành công!"); // Thông báo thành công
          setIsSubmitting(false);
          // Reset form fields
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Gửi thông báo thất bại."); // Thông báo lỗi đẹp
          setIsSubmitting(false);
        }
      );
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

      <div className="w-full p-4 px-0 sm:px-4">
        <form onSubmit={handleSubmit}>
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
            className="mt-4 w-auto bg-[#b8c7b0] px-[15px] sm:px-[20px] text-white rounded-tl-xl text-xs sm:text-lg rounded-br-xl py-2 hover:bg-[#e57f7f]"
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
