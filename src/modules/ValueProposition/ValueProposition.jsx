import Item from "./Item";
import icon1 from "public/img/icon1.png";
import icon2 from "public/img/icon2.png";
import icon3 from "public/img/icon3.png";
import icon4 from "public/img/icon4.png";
import MainLayout from "layout/MainLayout";

const data = [
  {
    src: icon1,
    label: "هدفمند",
    description: "عملکرد شرکت کاملا هدفمند است",
  },
  {
    src: icon2,
    label: "مقرون به صرفه",
    description: "خدمات ما کاملا به صرفه است",
  },
  {
    src: icon3,
    label: "رضایت بخش",
    description: "اینجا، همیشه اولویت با مشتری است",
  },
  {
    src: icon4,
    label: "پشتیبان",
    description: "شرکت در تمام موارد ممکن حامی مشتری است",
  },
];

const ValueProposition = () => {
  return (
    <MainLayout className="grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
      {data?.map((el, i) => (
        <Item key={i} data={el} />
      ))}
    </MainLayout>
  );
};

export default ValueProposition;
