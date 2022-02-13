import Gallery from "components/Gallery";

const data = [
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

const Propjects = () => {
  return <Gallery id="samples" data={data} title="نمونه کار های ما" />;
};

export default Propjects;
