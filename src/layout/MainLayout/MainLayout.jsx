import { createElement } from "react";

const MainLayout = (props) => {
  const { className, component, ...otherProps } = props;
  return createElement(component || "div", {
    className: `mx-auto max-w-7xl ${className}`,
    ...otherProps,
  });
};

export default MainLayout;
