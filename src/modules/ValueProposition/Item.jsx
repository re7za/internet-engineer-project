import VisibleByScrollWrapper from "layout/VisibleByScrollWrapper";

const Item = ({ data }) => {
  return (
    <VisibleByScrollWrapper className="my-5 flex grow justify-center duration-1000 sm:my-10">
      <div className="flex w-max flex-col items-center">
        <div className="flex w-full justify-center" style={{ height: "100px" }}>
          <img src={data.src} alt={data.label} />
        </div>
        <div className="pt-4 text-sm font-semibold">{data.label}</div>
        <p className="pt-2 text-sm text-gray-600">{data.description}</p>
      </div>
    </VisibleByScrollWrapper>
  );
};

export default Item;
