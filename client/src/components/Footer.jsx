import React from "react";
import {
  faEnvelopeCircleCheck,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useConfigContentByKey from "../hooks/useConfigContentByKey";
const URL_API = import.meta.env.VITE_URL_API;

const Footer = () => {
  return (
    <footer className="bg-green-gray mx-auto text-white  rounded-b-3xl p-4">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 lg:mx-14 place-items-center place-content-center">
        <p className=" text-3xl dancing max-sm:mt-4">
          {useConfigContentByKey("nameBrand")}
        </p>
        <div className="">
          <h2 className="text-2xl font-bold mb-4 underline">LIÊN HỆ</h2>
          <div className="flex items-center my-3 ">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-4 text-center"
            />
            <div>
            {useConfigContentByKey("address")?.split(",").map((line, index) => (
                <p key={index}>{line}</p>
            ))}
            </div>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-3 text-center" />
            <p>Phone: {useConfigContentByKey("phone")}</p>{" "}
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={faEnvelopeCircleCheck}
              className="mr-2 text-center"
            />
            <p>
              Email:{" "}
              <a href={`mailto:${useConfigContentByKey("email")}`}>
                {useConfigContentByKey("email")}
              </a>
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <iframe
            src={useConfigContentByKey("googleMap")}
            className="w-full h-52 rounded-xl "
            loading="lazy"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
