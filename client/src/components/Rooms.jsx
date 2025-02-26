import React from "react";
import { useState, useEffect } from "react";
import fetchData from "../axios";
import { useNavigate } from "react-router-dom";
const URL_API = import.meta.env.VITE_URL_API;

const Rooms = () => {
  const [data, setData] = useState([]);

  const naigate = useNavigate();

  const handleDetailProduct = (id) => () => {
    naigate(`/detail/${id}`);
  };

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchData(`${URL_API}api/product`);

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

    fetchDataFromAPI();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
      {data.map((product) => (
        <div
          key={product.id}
          className=" p-6 text-center overflow-hidden"
          onClick={handleDetailProduct(product.id)}
        >
          <div className="w-full h-44 overflow-hidden">
            <img
              className="w-full h-44 object-cover my-4 cursor-pointer duration-500 hover:scale-110  flex justify-center items-center"
              src={`${URL_API}${product.image.replace(/\\/g, "/")}`}
              alt=""
            />
          </div>
          <div className="text-lg  text-center font-sans font-bold text-black">
            {product.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
