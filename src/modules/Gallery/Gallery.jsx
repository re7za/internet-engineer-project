import MainLayout from "layout/MainLayout";
import Item from "./Item";

const items = [
  {
    src: "https://picsum.photos/280/280",
    label: "پروژه اول ما",
  },
  {
    src: "https://picsum.photos/281/280",
    label: "پروژه دوم ما",
  },
  {
    src: "https://picsum.photos/282/280",
    label: "پروژه سوم ما",
  },
  {
    src: "https://picsum.photos/283/280",
    label: "پروژه چهارم ما",
  },
];

const Gallery = () => {
  return (
    <MainLayout className={`my-10 lg:px-4 xl:px-0 `}>
      <h4 className="mb-8 text-center text-xl font-bold">نمونه کار های ما</h4>
      <div className="grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((el, i) => (
          <Item key={i} data={el} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Gallery;
