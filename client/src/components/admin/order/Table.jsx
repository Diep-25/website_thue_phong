import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../card";
import Dialog from "../dialog";
import Confirm from "../confirm";

import Loading from "../loading";
import fetchData from "../../../axios"
import { handleInvalidToken } from "../../../utils/helpers"

import { showToastSuccess, showToastError } from '../../../helpers/toast'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const URL_API = import.meta.env.VITE_URL_API

// const columns = columnsDataCheck;
export default function ComplexTable(props) {

  const [sorting, setSorting] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [id, setId] = React.useState(null);
  const [dataEdit, setDataEdit] = useState(null);

  const navigate = useNavigate();

  const handleOpen = (id = null, dataEdit = null) => {
    setId(id);

    setDataEdit(dataEdit)
    setOpen((cur) => !cur)
  };

  const handleOpenConfirm = (id = null) => {
    setId(id);
    setOpenConfirm((cur) => !cur)
  };

  const handleConfirm = () => {

    handleRemoveData()

  }



  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    setIsLoading(true);
    try {
      const response = await fetchData(`${URL_API}api/order`);
      console.log(response);

      if (response.data && Array.isArray(response.data) && response.data.length) {
        setData(response.data)
      } else {
        setData([])
      }
    } catch (error) {
      if (error.response.data.message === "Invalid token") {
        handleInvalidToken(navigate);
      }
      setData([])
    } finally {
      setIsLoading(false);

    }

  };

  const handleRemoveData = async () => {
    const idProduct = id
    handleOpenConfirm();
    setIsLoading(true);
    try {
      await fetchData(`${URL_API}api/product/delete/${idProduct}`, 'delete');

      showToastSuccess("Xóa phòng thành công")
    } catch (error) {
      if (error.response.data.message === "Invalid token") {
        handleInvalidToken(navigate);
      }
      showToastError("Xóa phòng thất bại")
    } finally {
      setIsLoading(false);
      fetchDataFromAPI();
    }
  }


  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    // Định dạng ngày thành DD/MM/YYYY HH:ss
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${seconds}`;
  };

  const handleSaveData = async (data) => {

    // setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });


    if (id) {
      try {

        await fetchData(`${URL_API}api/product/update/${id}`, 'PUT', formData, {
          "Content-Type": "multipart/form-data",
        });

        showToastSuccess("Cập nhật phòng thành công")

      } catch (error) {
        if (error.response.data.message === "Invalid token") {
          handleInvalidToken(navigate);
        }
        showToastError("Cập nhật phòng thất bại")
      } finally {
        setIsLoading(false);
        fetchDataFromAPI();
      }

    } else {

      try {

        await fetchData(`${URL_API}api/product/insert`, 'POST', formData, {
          "Content-Type": "multipart/form-data",
        });

        showToastSuccess("Thêm phòng thành công")

      } catch (error) {
        if (error.response.data.message === "Invalid token") {
          handleInvalidToken(navigate);
        }
        showToastError("Thêm phòng thất bại")
      } finally {
        setIsLoading(false);
        fetchDataFromAPI();
      }

    }
    setOpen(false);
  };

  const columns = [
    columnHelper.accessor("full_name", {
      id: "full_name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Tên</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("email", {
      id: "email",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Email</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("phone", {
      id: "phone",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Số điện thoại</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("student_number", {
      id: "student_number",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Số học sinh</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("product.name", {
      id: "product.name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Phòng</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("product.image", {
      id: "product.image",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Ảnh</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          <img className="w-[100px] h-[60px]" src={`${URL_API}${info.getValue().replace(/\\/g, '/')}`} alt="logo" />
        </p>
      ),
    }),
    columnHelper.accessor("note", {
      id: "note",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Lưu ý</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Ngày đặt
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {formatDate(info.getValue())}
        </p>
      ),
    }),
    columnHelper.accessor("action", {
      id: "action",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Action</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          <button
            onClick={() => handleOpen(info.row.original.id, info.row.original)}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-primary transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                className="w-4 h-4">
                <path
                  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                </path>
              </svg>
            </span>
          </button>
          <button
            onClick={() => handleOpenConfirm(info.row.original.id)}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-red transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </p>
      ),
    }),
  ]; // eslint-disable-next-line

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      {isLoading && <Loading />}
      <div className="w-full flex justify-between items-center mt-3 pl-3">
        
      </div>
      {data.length ? (
        <div className="mt-8 overflow-x-scroll">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="!border-px !border-gray-400">
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                      >
                        <div className="items-center justify-between text-xs text-gray-200">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: "",
                            desc: "",
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, 5)
                .map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className="min-w-[150px] border-white/0 py-3  pr-4"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>

        </div>
      ) : (
        <p>Không có dữ liệu</p>
      )}

      <Dialog open={open} id={id} handleOpen={handleOpen} onSave={handleSaveData} dataEdit={dataEdit} />
      <Confirm open={openConfirm} id={id} handleOpen={handleOpenConfirm} onConfirm={handleConfirm} />
    </Card>
  );
}
