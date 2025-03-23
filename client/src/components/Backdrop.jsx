import React from "react";
import useConfigContentByKey from "../hooks/useConfigContentByKey";

const URL_API = import.meta.env.VITE_URL_API;
const Backdrop = () => {
  const imgDrop = {
    imgIcon: useConfigContentByKey("logo"),
    imgBackDrop: useConfigContentByKey("logo_big"),
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 my-36 z-20 mt-0">
      <img
        src={`${URL_API}${imgDrop.imgIcon?.replace(/\\/g, "/")}`}
        alt="logo"
        className="size-40"
      />
      <img
        src={`${URL_API}${imgDrop.imgBackDrop?.replace(/\\/g, "/")}`}
        alt="logo"
        className="w-4/6"
      />
    </div>
  );
};

export default Backdrop;
