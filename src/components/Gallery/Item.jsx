import VisibleByScrollWrapper from "layout/VisibleByScrollWrapper";

const Item = ({ data }) => {
  return (
    <VisibleByScrollWrapper className="flex justify-center duration-1000">
      <div className="w-max">
        <div
          className="flex w-full overflow-hidden rounded-lg"
          style={{ height: "280px" }}
        >
          <img
            src={data.src}
            alt={data.label}
            className="cursor-pointer rounded-lg bg-black transition duration-500 hover:scale-125"
          />
        </div>
        <div className="pt-4 text-sm font-semibold">{data.label}</div>
        {data.description && (
          <p className="pt-2 text-sm text-gray-600">{data.description}</p>
        )}
      </div>
    </VisibleByScrollWrapper>
  );
};

export default Item;
