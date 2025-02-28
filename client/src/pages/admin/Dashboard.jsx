import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "../../components/admin/widget/Widget";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Tổng số phòng"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"số phòng trống"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"số phòng đã đang sử dụng"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"số lương truy cấp"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
