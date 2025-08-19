import { useMemo } from "react";
import { useConfig } from "../context/ConfigProvider";
import { data } from "react-router-dom";

const useConfigContentByKey = (key) => {
  const { dataConfig } = useConfig();
  if (!dataConfig || !Array.isArray(dataConfig)) return null; // Kiểm tra tránh lỗi

  const item = dataConfig.find((item) => item.key === key);

  console.log("useConfigContentByKey", dataConfig); // Debugging log

  return item ? item.content : null;
};

export default useConfigContentByKey;