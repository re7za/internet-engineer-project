import { createElement } from "react";

const Button = (props) => {
  const { className, component, ...otherProps } = props;
  return createElement(component || "button", {
    className: `bg-indigo-500 hover:bg-indigo-700 text-white active:bg-indigo-600 font-medium pt-2 pb-3 px-6 rounded-lg outline-none disabled:opacity-50 disabled:hover:bg-indigo-500 ${className}`,
    ...otherProps,
  });
};

export default Button;
