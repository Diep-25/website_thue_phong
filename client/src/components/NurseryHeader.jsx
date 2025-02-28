import React from "react";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
const NurseryHeader = () => {
  return (
    <div
      className="bg-cover object-fill bg-center h-100"
      style={{
        backgroundImage: `url('${useConfigContentByKey("nurseryImg")}')`,
      }}
    >
      <div className="flex flex-col justify-center justify-items-center h-full bg-black bg-opacity-50">
        <span className="ml-24 mr-4 mt-36 text-white font-bold mb-4 w-50 text-xl ">
          {useConfigContentByKey("nurseryTitle")}
        </span>
      </div>
    </div>
  );
};

export default NurseryHeader;
