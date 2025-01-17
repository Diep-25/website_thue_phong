import React from "react";

const textLine = {
  title: "look no farther!",
  description:
    "I love creating websites for small businesses. Particularly for crafters, photographers, bakers, stay at home moms with their side hustles. Anything cute and fun. But, I understand that spending thousands on a custom website is unlikely to fit in the budget. I can offer deep discounts for those who are willing to give up the reins on the design decisions. You give me your content (photos, text, etc.) and I will build you a beautiful, custom website. Something that will make you stand out from the crowd. Get in touch to find out more.",
  img: "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/tina.jpg"
}
const Describe = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-4 justify-center items-center">
      <div className="container p-6">
        <h2 className="text-left text-5xl pacifico-regular pb-4">
          {textLine.title}
        </h2>
        <span className="text-lg text-left text-gray-600 ">
          {textLine.description}
        </span>
      </div>

      <div className="container p-6 md:divide-none lg:divide-none">
        <img
          className="w-full my-4 "
          src={textLine.img}
          alt="ẢNH ĐẠI DIỆN"
        />
      </div>
    </div>
  );
};

export default Describe;
