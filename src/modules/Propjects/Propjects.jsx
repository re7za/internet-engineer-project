import Gallery from "components/Gallery";
import s1 from "public/samples/s1.jpg";
import s2 from "public/samples/s2.jpg";
import s3 from "public/samples/s3.jpg";
import s4 from "public/samples/s4.jpg";

const data = [
  {
    src: s1,
    label: "پروژه اول ما",
  },
  {
    src: s2,
    label: "پروژه دوم ما",
  },
  {
    src: s3,
    label: "پروژه سوم ما",
  },
  {
    src: s4,
    label: "پروژه چهارم ما",
  },
];

const Propjects = () => {
  return <Gallery id="samples" data={data} title="نمونه کار های ما" />;
};

export default Propjects;
