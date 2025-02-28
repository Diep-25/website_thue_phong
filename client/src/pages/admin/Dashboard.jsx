import React, { useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Widget from "../../components/admin/widget/Widget";
const dataFake = {
  totalRoom: 50,
  emptyRoom: 20,
  usingRoom: 30,
  totalAccess: 1000,
  newTasks: 145,
  totalProjects: 2433,
};
const Dashboard = () => {
  useEffect(() => {
    document.title = "Admin | Dashboard";
  }, []);

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomAPI = async () => {
      try {
        const response = await fetchData(`${URL_API}api/dashboard`);
        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length
        ) {
          setData(response.data);
        } else {
          setData([]);
        }
      } catch (err) {
        setData([]);
      }
    };
    fetchRoomAPI();
  }, []);

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Tổng số phòng"}
          subtitle={dataFake.totalRoom}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Số phòng trống"}
          subtitle={dataFake.emptyRoom}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Số phòng đang sử dụng"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Số lương truy cấp"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Tổng số đơn đã đặt phòng"}
          subtitle={"145"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
