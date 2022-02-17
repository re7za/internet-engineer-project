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
  }, [handleScroll]);

  return (
    <button
      className={`fixed right-4 bottom-4 z-20 rounded-full bg-indigo-400 p-5 opacity-70 transition hover:bg-indigo-600 hover:opacity-100 md:bottom-10 md:right-10 ${
        show ? "block" : "hidden"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <AiOutlineUp className="text-xl font-bold text-white" />
    </button>
  );
};

export default ScrollTop;
