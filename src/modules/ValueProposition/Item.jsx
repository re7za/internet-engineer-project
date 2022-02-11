import { useEffect, useRef, useState } from "react";

const Item = ({ data }) => {
  const elRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleScroll = (_) => {
    if (elRef.current.getBoundingClientRect().top < window.innerHeight / 1.5)
      setVisible(true);
  };

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    if (elRef.current.getBoundingClientRect().top < window.innerHeight / 1.5)
      setVisible(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elRef}
      className={`my-5 flex grow justify-center duration-1000 sm:my-10 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex w-max flex-col items-center">
        <div className="flex w-full justify-center" style={{ height: "100px" }}>
          <img src={data.src} alt={data.label} />
        </div>
        <div className="pt-4 text-sm font-semibold">{data.label}</div>
        <p className="pt-2 text-sm text-gray-600">{data.description}</p>
      </div>
    </div>
  );
};

export default Item;
