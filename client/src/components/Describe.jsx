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
    <div className="my-6 mb-20 sm:mb-0 sm:my-36 px-4 sm:px-0 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-start gap-6 w-full max-w-full lg:max-w-[1100px]">
        {/* Cột ảnh + mô tả */}
        <div className="sm:pr-10 w-full flex flex-col items-center lg:items-start">
          <img
            src={`${URL_API}${textLine.title?.replace(/\\/g, "/")}`}
            alt="bg"
            className="w-3/5 sm:w-auto sm:max-w-[90%] h-[37.625px] sm:h-auto"
          />
          <span className="block mt-4 text-xs sm:text-base text-gray-700 raleway font-normal text-center lg:text-left max-w-[90%]">
            {textLine.description}
          </span>
        </div>


        {/* Cột slider */}
        <div className="w-full px-4 lg:px-0">
          <Fade
            autoplay={true}
            duration={2000}
            transitionDuration={500}
            nextArrow={<button style={{ display: "none" }}></button>}
            prevArrow={<button style={{ display: "none" }}></button>}
          >
            {data.map((fadeImage, index) => (
              <div key={index} className="flex justify-center lg:justify-start">
                <img
                  className="w-full max-w-[620px] h-auto object-cover"
                  src={`${URL_API}${fadeImage.image?.replace(/\\/g, "/")}`}
                  alt={`slide-${index}`}
                />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};


export default Describe;