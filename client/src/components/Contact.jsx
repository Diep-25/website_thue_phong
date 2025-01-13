import React from 'react'

const Contact = () => {
  return (
    <div className="w-full p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <img
            className="p-6"
            src="https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/contact.jpg"
            alt=""
          />

          <div className="w-full p-4 bg-white rounded-lg shadow-lg">
            <form>
              <label className="block mb-2 ">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  required
                  className="text-lg mt-1 block w-full boder-green-gray rounded-md p-4"
                />
              </label>
              <label className="block mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className=" text-lg mt-1 block w-full boder-green-gray  rounded-md p-4"
                />
              </label>
              <label className="block mb-2">
                <textarea
                  placeholder="Nội dung"
                  rows="4"
                  className="mt-1 text-lg block w-full boder-green-gray rounded-md p-4"
                ></textarea>
              </label>
              <button className="mt-4 w-full bg-green-gray text-white rounded-tl-xl rounded-br-xl py-2 font-bold hover:bg-red-500">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
  )
}

export default Contact