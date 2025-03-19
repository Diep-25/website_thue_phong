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
      toast.error("Please fill in all fields."); // Thông báo lỗi khi thiếu thông tin
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
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!"); // Thông báo thành công
          setIsSubmitting(false);
          // Reset form fields
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Failed to send message, please try again later."); // Thông báo lỗi đẹp
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="my-36 w-full p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center justify-items-center">
      <img
        className="p-6 w-full flex justify-center items-center"
        src={`${URL_API}${useConfigContentByKey("imgContact")?.replace(
          /\\/g,
          "/"
        )}`}
        alt=""
      />

      <div className="w-full p-4  rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 ">
            <input
              type="text"
              placeholder="Họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="text-lg mt-1 block w-full border boder-green-gray rounded-md p-4"
            />
          </label>
          <label className="block mb-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-lg mt-1 block w-full border boder-green-gray rounded-md p-4"
            />
          </label>
          <label className="block mb-2">
            <input
              type="tel"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="text-lg mt-1 block w-full border boder-green-gray rounded-md p-4"
            />
          </label>
          <label className="block mb-2">
            <textarea
              placeholder="Nội dung"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 text-lg block w-full border boder-green-gray rounded-md p-4"
            ></textarea>
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full bg-green-gray text-white rounded-tl-xl rounded-br-xl py-2 font-bold hover:bg-red-500"
          >
            {isSubmitting ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>

      {/* Thêm ToastContainer vào đây */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
