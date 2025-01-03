import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...input) => {
    return twMerge(classNames(input));
};
