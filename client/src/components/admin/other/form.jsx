import React, { useState, useEffect } from "react";
import {
    Dialog,
    Card,
    CardBody,
    CardFooter,
    DialogHeader,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";

const URL_API = import.meta.env.VITE_URL_API

function FormSliderComponent({ open, id, handleOpen, onSave, dataEdit }) {
    const [configContent, setConfigContent] = useState("");
    const [singleImage, setSingleImage] = useState(null);
    const [type, setType] = useState('text');

    const handleSingleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSingleImage(file);
        }
    };

    const removeSingleImage = () => {
        setSingleImage(null);
    };

    useEffect(() => {

        if (open) {
            setConfigContent("")
            setSingleImage(null)
        }

        if (open && dataEdit) {
            setType(dataEdit.type || "text")

            if (dataEdit.type == 'image' && dataEdit.content) {
                setSingleImage(`${URL_API}${dataEdit.content.replace(/\\/g, '/')}`);
            } else {
                setConfigContent(dataEdit.content)
            }
        }

    }, [open, dataEdit]);


    const handleConfigContentChange = (event) => {
        setConfigContent(event.target.value);
    };

    const handleSave = () => {
        if (type == 'image') {
            onSave({ key: dataEdit.key, content: singleImage, type: dataEdit.type})
        } else {
            onSave({key: dataEdit.key, content: configContent, type: dataEdit.type})
        }
    };

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
                            {id ? 'Chỉnh sửa slider' : 'Thêm slider'}
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
                    {type == "text" &&
                        <>
                            <Typography className="-mb-2" variant="h6">
                                Nội dung
                            </Typography>
                            <Input
                                size="lg"
                                className="px-2"
                                value={configContent}
                                onChange={handleConfigContentChange}
                            />
                        </>
                    }

                    {type == "image" &&
                        <>
                            <Typography className="-mb-2 mt-4" variant="h6">
                                Ảnh
                            </Typography>
                            <div className="flex flex-col gap-4">
                                <Input
                                    type="file"
                                    size="lg"
                                    className="file-input px-2"
                                    onChange={handleSingleImageChange}
                                    accept="image/*"
                                />
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
                        </>
                    }




                </CardBody>

                {/* Save Button */}
                <CardFooter >
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

export default FormSliderComponent