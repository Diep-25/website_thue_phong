import { createContext, useContext, useEffect, useState } from "react";
import fetchData from "../axios"
const ConfigContext = createContext(null);
const URL_API = import.meta.env.VITE_URL_API

export const ConfigProvider = ({ children }) => {
  const [dataConfig, setDataConfig] = useState([]);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetchData(`${URL_API}api/config`, 'GET');
        if (res.data) {
          setDataConfig(res.data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy config:", error);
      }
    };

    fetchConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ dataConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error("❌ useConfig phải được sử dụng bên trong ConfigProvider!");
    }
    return context;
};
