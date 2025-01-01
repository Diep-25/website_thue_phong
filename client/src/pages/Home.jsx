function Home() {
  return (
    <div className="w-full">
      <div className="text-center my-4">
        <span className="color-pink text-7xl font-bold my-4 pacifico-regular">
          Need a website for you{" "}
        </span>
        <h1 className="color-brown text-9xl uppercase font-bold my-4 tracking-tight">
          small business
        </h1>
        <span className="color-brown text-4xl uppercase font-bold my-4 amatic-sc-bold">
          but don&lsquo;t have a big budget for something custom?
        </span>
      </div>
      <div className="flex flex-nowrap justify-around items-center my-4">
        <div className="w-1/2 p-6">
          <h2 className="text-left text-5xl pacifico-regular pb-4">
            look no farther!
          </h2>
          <span className="text-lg text-left text-gray-600 ">
            I love creating websites for small businesses. Particularly for
            crafters, photographers, bakers, stay-at-home moms with their side
            hustles. Anything cute and fun. But, I understand that spending
            thousands on a custom website is unlikely to fit in the budget. I
            can offer deep discounts for those who are willing to give up the
            reins on the design decisions. You give me your content (photos,
            text, etc.) and I will build you a beautiful, custom website.
            Something that will make you stand out from the crowd. Get in touch
            to find out more.
          </span>
        </div>

        <div className="w-1/2  p-6">
          <img
            className="w-full my-4 "
            src="https://i.pinimg.com/736x/bc/54/a7/bc54a7bc990d6b6730829e493f455775.jpg"
            alt=""
          />
        </div>
      </div>

      <div className=" w-full mx-auto p-4">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
          <div className="w-full p-6">
            <img
              className="w-full my-4 transform cursor-pointer bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600 flex justify-center items-center"
              src="https://i.pinimg.com/736x/bc/54/a7/bc54a7bc990d6b6730829e493f455775.jpg"
              alt=""
            />
            <span className="text xl ">Hi Hello</span>
          </div>
          <div className="w-full p-6">
            <img
              className="w-full my-4 transform bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600 flex justify-center items-center cursor-pointer"
              src="https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/tina.jpg"
              alt=""
            />
          </div>
          <div className="w-full p-6">
            <img
              className="w-full my-4 transform bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600 flex justify-center items-center cursor-pointer"
              src="https://i.pinimg.com/736x/bc/54/a7/bc54a7bc990d6b6730829e493f455775.jpg"
              alt=""
            />
            <span className="text xl ">Hi Hello</span>
          </div>
          <div className="w-full p-6">
            <img
              className="w-full my-4 transform bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600 flex justify-center items-center cursor-pointer"
              src="https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/tina.jpg"
              alt=""
            />
            <span className="text xl ">Hi Hello</span>
          </div>
          <div className="w-full p-6">
            <img
              className="w-full my-4 transform bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600 flex justify-center items-center cursor-pointer"
              src="https://i.pinimg.com/736x/bc/54/a7/bc54a7bc990d6b6730829e493f455775.jpg"
              alt=""
            />
          </div>
          <div className="w-full p-6">
            <img
              className="w-full my-4 transform bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600 flex justify-center items-center cursor-pointer"
              src="https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/tina.jpg"
              alt=""
            />
          </div>
          <div className="w-full p-6">
            <img
              className="w-full my-4 transform bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600 flex justify-center items-center cursor-pointer"
              src="https://i.pinimg.com/736x/bc/54/a7/bc54a7bc990d6b6730829e493f455775.jpg"
              alt=""
            />
          </div>
          <div className="w-full p-6">
            <img
              className="w-full my-4 transform bg-blue-400 transition duration-500 hover:scale-110 hover:bg-blue-600 flex justify-center items-center cursor-pointer"
              src="https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/tina.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full p-12 grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <img
              className=" my-4"
              src="https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/tina.jpg"
              alt=""
            />

        <div className="w-full p-4 bg-white rounded-lg shadow-lg">
          <form>
            <label className="block mb-2 ">
  
              <input
                type="text"
                placeholder="Họ và tên"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-4"
              />
            </label>
            <label className="block mb-2">
              <input
              
                type="email"
                placeholder="Email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-4"
              />
            </label>
            <label className="block mb-2">
              
              <textarea
              placeholder="Nội dung"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md p-4"
              ></textarea>
            </label>
            <button className="mt-4 w-full bg-gray-400 text-white rounded-tl-xl rounded-br-xl py-2 font-bold hover:bg-red-500">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
