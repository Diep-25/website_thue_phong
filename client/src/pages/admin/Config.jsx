import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Slider from "../../components/admin/slider"

import Other from "../../components/admin/other"
 
export default function Config() {
  const [activeTab, setActiveTab] = React.useState("slider");
  const data = [
    {
      label: "Slider",
      value: "slider",
      desc: <Slider />,
    },
    {
      label: "Khác",
      value: "other",
      desc: <Other />,
    },
    
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`p-[10px] ${activeTab === value ? "text-gray-900" : ""}`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}