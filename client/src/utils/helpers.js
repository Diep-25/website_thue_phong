import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import { toString } from "lodash";
import dataConfig from "../data/data.json";

export const cn = (...input) => {
  return twMerge(classNames(input));
};

export const handleInvalidToken = (navigate) => {
  Cookies.remove("token");
  Cookies.remove("user");
  navigate("/admin/login");
};

export const formatNumber = (val) => {
  return toString(val).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const getConfigByKey = (key) => {
  return dataConfig.find((item) => item.key === key) || null;
};

