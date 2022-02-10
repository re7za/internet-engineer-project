import { createElement } from "react";

const MainLayout = (props) => {
  const { className, component, ...otherProps } = props;
  return createElement(component || "div", {
    className: `px-4 md:px-10 ${className}`,
    ...otherProps,
  });
};

export default MainLayout;
