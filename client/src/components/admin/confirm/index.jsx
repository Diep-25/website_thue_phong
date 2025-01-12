import React from "react";
import {
    Button,
    Card,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function Confirm({ open, handleOpen, onConfirm }) {

    return (
        <>
            <Dialog
                open={open}
                size="xs"
                handler={handleOpen}
                className="fixed inset-0 flex items-center justify-center bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[20rem]">
                    <div className="flex items-center justify-between">
                        <DialogHeader>Xác nhận</DialogHeader>
                    </div>
                    <DialogBody>
                        Bạn có muốn xóa dữ liệu này không ?
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={() => handleOpen(false)}
                            className="mr-1"
                        >
                            <span>Hủy</span>
                        </Button>
                        <Button
                            onClick={onConfirm}
                            className="linear rounded-[20px] bg-red-600 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                        >
                            Xóa
                        </Button>

                    </DialogFooter>
                </Card>
            </Dialog>
        </>
    );
}