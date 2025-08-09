import React from "react";
import useConfigContentByKey from "../hooks/useConfigContentByKey";

const URL_API = import.meta.env.VITE_URL_API;
const Backdrop = () => {
  const imgDrop = {
    imgIcon: useConfigContentByKey("logo"),
    imgBackDrop: useConfigContentByKey("logo_big"),
  };

  return (
    <div className="flex flex-col justify-center items-center px-2 sm:px-0 my-0 sm:my-2 z-20 mt-0 sm:mt-[-5px] h-[90vh] sm:h-auto">
      <img
        src={`${URL_API}${imgDrop.imgIcon?.replace(/\\/g, "/")}`}
        alt="logo"
        className="size-40 w-[77px] h-[86px] sm:w-[110px] sm:h-[120px]"
      />
      <img
        src={`${URL_API}${imgDrop.imgBackDrop?.replace(/\\/g, "/")}`}
        alt="logo"
        className="w-[90%] sm:w-[68%] sm:h-[275px]"
      />
    </div>
  );
};

export default Backdrop;
