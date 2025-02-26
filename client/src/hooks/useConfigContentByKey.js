import { useConfig } from "../context/ConfigProvider";

const useConfigContentByKey = (key) => {
  const { dataConfig } = useConfig();
  if (!dataConfig || !Array.isArray(dataConfig)) return null;  // Kiểm tra tránh lỗi

  const item = dataConfig.find((item) => item.key === key);
  return item ? item.content : null;
};

export default useConfigContentByKey;