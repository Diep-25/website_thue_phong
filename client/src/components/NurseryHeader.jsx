import React from "react";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
const URL_API = import.meta.env.VITE_URL_API;
const NurseryHeader = () => {
  return (
    <div
      className="bg-cover object-fill bg-center h-[450px] mt-32"
      style={{
        backgroundImage: `url('${URL_API}${useConfigContentByKey(
          "nurseryImg"
        )?.replace(/\\/g, "/")}')`,
      }}
    >
      <div className="h-full bg-black bg-opacity-50 relative">
        <span className=" absolute -translate-x-4/5 ml-10 bottom-20 mr-4 text-white mb-4 w-1/2 text-xl font-serif">
          {useConfigContentByKey("nurseryTitle")}
        </span>
      </div>
    </div>
  );
};

export default NurseryHeader;
