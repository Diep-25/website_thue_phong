import React, { useState, useEffect } from "react";
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  DialogHeader,
  Typography,
  Input,
  Textarea,
  Button,
  Checkbox,
} from "@material-tailwind/react";

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";

// Đăng ký module ImageResize
Quill.register("modules/imageResize", ImageResize);

const URL_API = import.meta.env.VITE_URL_API;

function DialogComponent({ open, id, handleOpen, onSave, dataEdit }) {
  const [roomName, setRoomName] = useState("");
  const [roomContent, setRoomContent] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomEquipment, setRoomEquipment] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const [roomContains, setRoomContains] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isStatus, setIsStatus] = useState(true);
  const [singleImage, setSingleImage] = useState(null);
  const [multipleImages, setMultipleImages] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSingleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSingleImage(file);
    }
    setErrors((prev) => ({ ...prev, image: "" }));
  };

  useEffect(() => {
    if (open) {

      if (dataEdit) {
        setRoomName(dataEdit.name || "");
        setRoomContent(dataEdit.content || "");
        setRoomDescription(dataEdit.description || "");
        setRoomEquipment(dataEdit.equipment || "");
        setRoomPrice(dataEdit.price || "");
        setRoomContains(dataEdit.contains || "");
        setIsChecked(dataEdit.isSpecial || false);
        if (dataEdit.status == 1) {
          setIsStatus(true)
        } else {
          setIsStatus(false)
        }
        setCapacity(dataEdit.capacity || 0);

        if (dataEdit.image) {
          setSingleImage(`${URL_API}${dataEdit.image.replace(/\\/g, "/")}`);
        }
        if (dataEdit.images) {
          const images = []
          dataEdit.images.forEach(image => {
            images.push(`${URL_API}${image?.image_detail?.replace(/\\/g, "/")}`);
          });

          setMultipleImages(images)
        }

      } else {
        setRoomName("");
        setRoomContent("");
        setRoomDescription("");
        setRoomEquipment("");
        setRoomPrice("");
        setRoomContains("");
        setIsChecked(false);
        setIsStatus(false);
        setSingleImage(null);
        setMultipleImages([]);
      }
    }

  }, [open, dataEdit]);

  const handleMultipleImagesChange = (event) => {
    const files = Array.from(event.target.files);
    setMultipleImages((prev) => [...prev, ...files]);
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
    setErrors((prev) => ({ ...prev, roomName: "" }));
  };

  const handleRoomContentChange = (event) => {
    setRoomContent(event.target.value);
  };

  const handleStatusChange = (event) => {
    setIsStatus(event.target.checked)
  }

  const handleRoomEquipmentChange = (event) => {
    setRoomEquipment(event.target.value);
  };

  const handleRoomPriceChange = (event) => {
    setRoomPrice(event.target.value);
  };

  const handleRoomDescriptionChange = (event) => {
    setRoomDescription(event.target.value);
  };

  const setRoomContainsChange = (event) => {
    setRoomContains(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const removeSingleImage = () => {
    setSingleImage(null);
  };

  const removeMultipleImage = (index) => {
    setMultipleImages((prev) => prev.filter((_, i) => i !== index));
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!roomName.trim()) {
      newErrors.roomName = "Tên phòng không được để trống.";
    }
    if (!singleImage) {
      newErrors.image = "Ảnh phòng không được để trống.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateInputs()) {
      const data = {
        name: roomName,
        image: singleImage,
        imageDetail: multipleImages,
        content: roomContent,
        description: roomDescription,
        equipment: roomEquipment,
        price: roomPrice,
        contains: roomContains,
        isSpecial: isChecked,
        status: isStatus ? 1 : 0,
      };

      onSave(data);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      ["image"],
    ],
    imageResize: {
      displaySize: true, // Hiển thị kích thước ảnh khi resize
      modules: ["Resize", "DisplaySize", "Toolbar"], // Các tính năng hỗ trợ
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "image",
  ];

  return (
    <Dialog
      size="lg"
      open={open}
      handler={handleOpen}
      className="fixed inset-0 flex items-center justify-center bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[40rem]">
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              {id ? "Chỉnh sửa phòng" : "Thêm phòng"}
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <CardBody className="flex flex-col gap-4 h-[28rem] overflow-y-auto">
          {/* Room Name Input */}
          <Typography className="-mb-2" variant="h6">
            Tên phòng
          </Typography>
          <Input
            size="lg"
            className="px-2"
            value={roomName}
            onChange={handleRoomNameChange}
            error={!!errors.roomName}
          />
          {errors.roomName && (
            <Typography variant="small" color="red" className="mt-1">
              {errors.roomName}
            </Typography>
          )}
          <Typography className="-mb-2" variant="h6">
            Thiết bị
          </Typography>
          <Input
            size="lg"
            className="px-2"
            value={roomEquipment}
            onChange={handleRoomEquipmentChange}
          />
          <Typography className="-mb-2" variant="h6">
            Giá thuê
          </Typography>
          <Input
            size="lg"
            type="text"
            className="px-2"
            value={roomPrice}
            onChange={handleRoomPriceChange}
          />
          <Typography className="-mb-2" variant="h6">
            Chứa
          </Typography>
          <Textarea
            className="px-2"
            value={roomContains}
            onChange={setRoomContainsChange}
          />
          {/* Single Image Upload */}
          <Typography className="-mb-2 mt-4" variant="h6">
            Ảnh phòng
          </Typography>
          <div className="flex flex-col gap-4">
            <Input
              type="file"
              size="lg"
              className="file-input px-2"
              onChange={handleSingleImageChange}
              accept="image/*"
            />
            {errors.image && (
              <Typography variant="small" color="red" className="mt-1">
                {errors.image}
              </Typography>
            )}
            {singleImage && (
              <div className="relative w-40 h-40">
                <img
                  src={
                    typeof singleImage === "string"
                      ? singleImage
                      : URL.createObjectURL(singleImage)
                  }
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-700 focus:outline-none"
                  onClick={removeSingleImage}
                >
                  ✕
                </button>
              </div>
            )}
          </div>
          <Typography className="-mb-2" variant="h6">
            Mô tả ngắn
          </Typography>
          <Textarea
            className="px-2"
            value={roomDescription}
            onChange={handleRoomDescriptionChange}
          />
          <Typography className="-mb-2" variant="h6">
            Mô tả
          </Typography>
          {/* <Textarea className="px-2" value={roomContent}
                        onChange={handleRoomContentChange} /> */}
          <ReactQuill
            theme="snow"
            value={roomContent}
            onChange={setRoomContent}
            modules={modules} // Sử dụng modules có hỗ trợ resize ảnh
            formats={formats}
          />

          {/* Multiple Images Upload */}
          <Typography className="-mb-2 mt-8" variant="h6">
            Ảnh chi tiết
          </Typography>
          <Card className="p-4 border border-gray-200 rounded-lg">
            <div className="flex flex-col gap-4">
              <Input
                type="file"
                accept="image/*"
                multiple
                className="px-2"
                size="lg"
                onChange={handleMultipleImagesChange}
              />
              <div className="grid grid-cols-3 gap-4">
                {multipleImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)}
                      alt={`Preview ${index}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-700 focus:outline-none"
                      onClick={() => removeMultipleImage(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Typography className="-mb-2 mt-4" variant="h6">
            Phòng đặc biệt
          </Typography>
          <Checkbox
            id="checkbox-1"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="text-blue-500"
          />

          <Typography className="-mb-2 mt-4" variant="h6">
            Còn phòng
          </Typography>
          <Checkbox
            id="checkbox-1"
            checked={isStatus}
            onChange={handleStatusChange}
            className="text-blue-500"
          />
        </CardBody>

        {/* Save Button */}
        <CardFooter>
          <Button
            className="linear rounded-[20px] bg-green-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
            onClick={handleSave}
          >
            Lưu
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}

export default DialogComponent;
