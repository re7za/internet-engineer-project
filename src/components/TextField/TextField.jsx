import { createElement } from "react";

const TextField = (props) => {
  const { className, component, ...otherProps } = props;
  return createElement(component || "input", {
    type: "text",
    className: `py-2 px-4 border-2 border-grey-300 outline-none focus:border-indigo-600 rounded-lg transition ease-in-out ${className}`,
    ...otherProps,
  });
};

export default TextField;
