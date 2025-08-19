import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
import fetchData from "../axios";
const URL_API = import.meta.env.VITE_URL_API;

const Describe = () => {
  const textLine = {
    title: useConfigContentByKey("bgTitle"),
    description: useConfigContentByKey("textDecription"),
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSliderAPI = async () => {
      try {
        const response = await fetchData(`${URL_API}api/slider`);
        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length
        ) {
          setData(response.data);
        } else {
          setData([]);
        }
      } catch (err) {
        setData([]);
      }
    };
    fetchSliderAPI();
  }, []);

  return (
    <div className="my-6 mb-20 sm:mb-0 sm:my-36 px-0 sm:px-[75px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-center sm:text-left justify-center items-center leading-[15px]">
      <div className="container p-6 px-[40px] sm:px-6 sm:pl-0">
        {/* <h2 className=" text-4xl sm:text-5xl pacifico-regular pb-4">{textLine.title}</h2>
         */}
         <img
        src={`${URL_API}${textLine.title?.replace(/\\/g, "/")}`}
        alt="bg"
        className="w-[80%] m-auto"
      />
        <span className="text-[12px] sm:text-base text-center text-gray-700 raleway !font-normal sm:!text-left">
          {textLine.description}
        </span>
      </div>

      <div className="container w-full p-6 max-sm:pt-0 md:divide-none lg:divide-none sm:pr-0">
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
          {data.map((fadeImage, index) => (
            <div key={index}>
              <img
                className="w-full my-4"
                style={{ width: "100%" }}
                src={`${URL_API}${fadeImage.image?.replace(/\\/g, "/")}`}
              />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Describe;
