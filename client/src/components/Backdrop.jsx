import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useConfigContentByKey from "../hooks/useConfigContentByKey";


const URL_API = import.meta.env.VITE_URL_API;


const Backdrop = (props) => {
  const imgDrop = {
    imgIcon: useConfigContentByKey("logo"),
    imgBackDrop: useConfigContentByKey("logo_big"),
<<<<<<< HEAD
    imgBackDropMobile: useConfigContentByKey("logo_big_mobile"),
=======
    imgBackdropMobile: useConfigContentByKey("bgTitleMobile"),
>>>>>>> 52134e2 (update)
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
    <div className="flex flex-col justify-center items-center px-2 sm:px-0 my-0 sm:my-2 z-20 mt-0 sm:mt-[-5px] h-[90vh] sm:h-auto">
      <img
        src={`${URL_API}${imgDrop.imgIcon?.replace(/\\/g, "/")}`}
        alt="logo"
        className="size-40 w-[77px] h-[86px] sm:w-[110px] sm:h-[120px]"
      />
      <img
        src={`${URL_API}${imgDrop.imgBackDrop?.replace(/\\/g, "/")}`}
        alt="logo"
        className="w-[90%] sm:w-[68%] sm:h-[275px] max-md:hidden"
      />
      <img
        src={`${URL_API}${imgDrop.imgBackDropMobile?.replace(/\\/g, "/")}`}
        alt="logo"
        className="w-[75%] sm:w-[68%] sm:h-[275px] md:hidden"
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