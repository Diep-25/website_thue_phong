import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Cookies from 'js-cookie';

export const cn = (...input) => {
    return twMerge(classNames(input));
};


export const handleInvalidToken = (navigate) => {

    Cookies.remove("token");
    Cookies.remove("user");

    navigate("/admin/login");
};
