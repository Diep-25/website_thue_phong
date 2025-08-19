import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useConfigContentByKey from "../hooks/useConfigContentByKey";


const URL_API = import.meta.env.VITE_URL_API;


const Backdrop = (props) => {
  const imgDrop = {
    imgIcon: useConfigContentByKey("logo"),
    imgBackDrop: useConfigContentByKey("logo_big"),
    imgBackdropMobile: useConfigContentByKey("bgTitleMobile"),
  };


  const [isMobile, setIsMobile] = useState(window.innerWidth < 655);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 655);
    };


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const backdropSrc = isMobile
    ? imgDrop.imgBackdropMobile
    : imgDrop.imgBackDrop;


  return (
    <div
      className={`flex flex-col justify-center items-center px-2 my-0 sm:my-2 z-20 h-[90vh] sm:h-auto relative ${
        isMobile ? "-top-8" : "-top-2"
      }`}
    >
      {" "}
      <img
        src={`${URL_API}${imgDrop.imgIcon?.replace(/\\/g, "/")}`}
        alt="logo"
        className="size-40 w-[77px] h-[86px] sm:w-[124px] sm:h-[140px]"
      />
      {!props.withoutBackdrop && (
        <img
          src={`${URL_API}${backdropSrc?.replace(/\\/g, "/")}`}
          alt="backdrop"
          className={isMobile ? "w-[218px]" : "w-[903px]"}
        />
      )}
    </div>
  );
};


Backdrop.propTypes = {
  withoutBackdrop: PropTypes.bool,
};


export default Backdrop;