import React, { useEffect, useState } from "react";
import ComplexTable from "../../components/admin/product/ComplexTable"
import fetchData from "../../axios";

function Product() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchData('http://localhost:3000/api/product');
      
        if (response.data && Array.isArray(response.data) && response.data.length) {
          setData(response.data)
        } else {
          setData([])
        }
      } catch (err) {
        setData([])
      }

    };

    fetchDataFromAPI();
  }, []);

  const columnsDataComplex = [
    {
      Header: "Tên phòng",
      accessor: "name",
    },
    {
      Header: "Ảnh",
      accessor: "image",
    },
    {
      Header: "Mô tả",
      accessor: "content",
    },
    {
      Header: "Tình trạng",
      accessor: "status",
    },
    {
      Header: "Action",
      accessor: "action",
    },
  ];

  return (
    <div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5">
      {data.length ? (
        <ComplexTable columnsData={columnsDataComplex} tableData={data} />
      ) : (
        <p>Không có dữ liệu</p>
      )}
      </div>
      
    </div>
  );
}

export default Product