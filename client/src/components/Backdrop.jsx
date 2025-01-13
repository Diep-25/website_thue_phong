import React from 'react'

const imgDrop = {
  imgIcon: "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/Birds_and_nest.gif",
  imgBackDrop: "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/small_business.png"
};

const Backdrop = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
          <img
            src={imgDrop.imgIcon}
            alt=""
            className="size-40"
          />
          <img
            src={imgDrop.imgBackDrop}
            alt=""
            className="w-4/6"
          />
        </div>
  )
}

export default Backdrop