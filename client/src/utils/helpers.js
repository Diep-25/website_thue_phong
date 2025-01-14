import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import { toString } from "lodash";

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
