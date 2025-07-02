import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
import fetchData from "../axios";
const URL_API = import.meta.env.VITE_URL_API;

const Describe = () => {
  const textLine = {
    title: useConfigContentByKey("textTitle"),
    description: useConfigContentByKey("textDecription"),
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSliderAPI = async () => {
      try {
        const response = await fetchData(`http://localhost:3000/api/slider`);
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

  console.log(data);

  return (
    <div className=" my-36 px-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-center justify-center items-center">
      <div className="container p-6">
        <h2 className=" text-5xl pacifico-regular pb-4">{textLine.title}</h2>
        <span className="text-base text-left text-gray-600 raleway">
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
          {data.map((fadeImage, index) => (
            <div key={index}>
              <img
                className="w-full my-4 shadow-lg rounded-2xl "
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
