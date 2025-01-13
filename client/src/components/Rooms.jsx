import React from "react";
import { useState, useEffect } from "react";
import fetchData from "../axios";
const URL_API = import.meta.env.VITE_URL_API;

const Rooms = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchData("http://localhost:3000/api/product");
        console.log("data", response);
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
        <div  className=" p-6 text-center">
        <img
          className="w-full h-44 object-cover my-4 transform cursor-pointer bg-blue-400 transition duration-500 ring-green-200 hover:scale-110 hover:ring-2 rounded-md flex justify-center items-center"
          src={`${URL_API}${product.image.replace(/\\/g, '/')}`}
          alt=""
        />
        <span className="text-lg text-center text-gray-700">{product.name}</span>
      </div>
      ))}
      
    </div>
  );
};

export default Rooms;
