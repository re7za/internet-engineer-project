import { useEffect, useRef, useState } from "react";

const VisibleByScrollWrapper = (props) => {
  const { className, children } = props;

  const _ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleScroll = (_) => {
    if (_ref.current.getBoundingClientRect().top < window.innerHeight / 1.2)
      setVisible(true);
  };

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    if (_ref.current.getBoundingClientRect().top < window.innerHeight / 1.5)
      setVisible(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={_ref}
      className={`${className} ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default VisibleByScrollWrapper;
