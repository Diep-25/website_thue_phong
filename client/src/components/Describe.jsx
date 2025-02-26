import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getConfigContentByKey } from "../utils/helpers";

const textLine = {
  title: getConfigContentByKey("textTitle"),
  description: getConfigContentByKey("textDecription"),
  fadeImages: [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
  ],
};
const Describe = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-4 text-center justify-center items-center">
      <div className="container p-6">
        <h2 className=" text-5xl pacifico-regular pb-4">{textLine.title}</h2>
        <span className="text-lg text-left text-gray-600 ">
          {textLine.description}
        </span>
      </div>

      <div className="container w-full p-6 md:divide-none lg:divide-none ">
        <Fade
          autoplay={true}
          duration={2000} // Thời gian hiển thị mỗi slide (giảm để chuyển động nhanh hơn)
          transitionDuration={500}
          nextArrow={
            <button
              style={{
                display: "none",
              }}
            ></button>
          }
          prevArrow={
            <button
              style={{
                display: "none",
              }}
            ></button>
          }
        >
          {textLine.fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img
                className="w-full my-4 shadow-lg rounded-2xl "
                style={{ width: "100%" }}
                src={fadeImage.url}
              />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Describe;
