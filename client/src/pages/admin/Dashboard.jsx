import React, { useEffect, useState } from "react";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard, MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { handleInvalidToken } from "../../utils/helpers"
import { showToastSuccess, showToastError } from '../../helpers/toast'
import fetchData from "../../axios"
import Widget from "../../components/admin/widget/Widget";
const URL_API = import.meta.env.VITE_URL_API

const Dashboard = () => {
  useEffect(() => {
    document.title = "Admin | Dashboard";
  }, []);

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoomAPI();
  }, []);

  const fetchRoomAPI = async () => {
    try {
      const response = await fetchData(`${URL_API}api/dashboard`, 'GET');
      if (response.data) {
        setData(response.data)
      } else {
        setData([])
      }
      
    } catch (error) {
      if (error.response?.data?.message === "Invalid token") {
        handleInvalidToken(navigate);
      }
      showToastError("Lấy config thất bại")
      setData([]);
    }
  };

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Tổng số phòng"}
          subtitle={data.totalRoom || 0}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Số phòng trống"}
          subtitle={data.emptyRoom || 0}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Số phòng đang sử dụng"}
          subtitle={data.usingRoom || 0}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Số lượng truy cập"}
          subtitle={data.totalAccess || 0}
        />
        <Widget
          icon={<MdShoppingCart className="h-7 w-7" />}
          title={"Tổng số đơn đã đặt phòng"}
          subtitle={data.totalOrder || 0}
        />
      </div>
    </div>
  );
};

export default Dashboard;
