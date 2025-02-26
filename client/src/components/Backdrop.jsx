import React from "react";
import { getConfigContentByKey } from "../utils/helpers";
const imgDrop = {
  imgIcon: getConfigContentByKey("logo"),
  imgBackDrop: getConfigContentByKey("logo_big"),
};

const Backdrop = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <img src={imgDrop.imgIcon} alt="" className="size-40" />
      <img src={imgDrop.imgBackDrop} alt="" className="w-4/6" />
    </div>
  );
};

export default Backdrop;
