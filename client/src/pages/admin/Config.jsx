import React, {useEffect} from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Card, CardBody, Typography } from "@material-tailwind/react"

import Slider from "../../components/admin/slider";

import Other from "../../components/admin/other";

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
  ]

  useEffect(() => {
    document.title = 'Admin | Config';
  }, []);
return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Tabs Card */}
      <Card className="shadow-lg">
        <CardBody className="p-0">
          <Tabs value={activeTab} className="w-full">
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-gray-400 p-0 shadow-none"
              indicatorProps={{
                className:
                  "bg-gradient-to-r from-blue-500 to-blue-600 border-b-2 shadow-none rounded-none h-1 bottom-0",
              }}
            >
              {data.map(({ label, value, icon: Icon }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`
                    relative px-6 py-2 font-medium transition-all duration-300 ease-in-out
                    ${
                      activeTab === value
                        ? "text-blue-600 bg-blue-50/50"
                        : "text-blue-gray-600 hover:text-blue-600 hover:bg-blue-50/30"
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    <span>{label}</span>
                  </div>
                </Tab>
              ))}
            </TabsHeader>

            <TabsBody
              className="min-h-[400px]"
              animate={{
                initial: { y: 250, opacity: 0 },
                mount: { y: 0, opacity: 1 },
                unmount: { y: 250, opacity: 0 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="p-6">
                  <div className="animate-fade-in">{desc}</div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}
