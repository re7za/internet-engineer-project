import MainLayout from "layout/MainLayout";
import Item from "./Item";

const Gallery = ({ data, title }) => {
  return (
    <MainLayout className={`my-20 lg:px-4 xl:px-0 `}>
      {title && <h4 className="mb-8 text-center text-xl font-bold">{title}</h4>}
      <div className="grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {data?.map((el, i) => (
          <Item key={i} data={el} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Gallery;
