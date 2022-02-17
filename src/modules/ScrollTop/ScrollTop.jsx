import { useEffect, useState } from "react";
import { AiOutlineUp } from "react-icons/ai";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = (_) => {
    if (window.scrollY > window.innerHeight) {
      setShow(true);
    } else setShow(false);
  };

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed right-10 bottom-10 rounded-full bg-indigo-600 p-5 transition ${
        show ? "block" : "hidden"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <AiOutlineUp className="text-xl font-bold text-white" />
    </button>
  );
};

export default ScrollTop;
