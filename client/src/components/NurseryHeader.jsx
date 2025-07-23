import React from "react";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
const URL_API = import.meta.env.VITE_URL_API;
const NurseryHeader = () => {
  return (
    <div
      className="w-full h-[250px] sm:h-[450px] bg-cover bg-center bg-no-repeat mt-6 sm:mt-32"
      style={{
        backgroundImage: `url('${URL_API}${useConfigContentByKey(
          "nurseryImg"
        )?.replace(/\\/g, "/")}')`,
      }}
    >
      <div className="h-full bg-black bg-opacity-50 relative">
        <span className=" absolute -translate-x-4/5 ml-[20px] -bottom-[11px] sm:ml-10 sm:bottom-10 mr-4 text-white mb-4 w-[80%] sm:w-1/2 text-sm sm:text-xl raleway !font-normal">
          {useConfigContentByKey("nurseryTitle")}
        </span>
      </div>
    </div>
  );
};

export default NurseryHeader;
