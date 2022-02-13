import Dialog from "components/Dialog";
import MainLayout from "layout/MainLayout";
import { useState } from "react";
import Item from "./Item";

const Gallery = ({ data, title, id }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const openModalBy = (val) => setSelectedItem(val);
  const closeModal = () => setSelectedItem(null);

  return (
    <>
      <MainLayout id={id} className={`my-20 lg:px-4 xl:px-0 `}>
        {title && (
          <h4 className="mb-8 text-center text-xl font-bold">{title}</h4>
        )}
        <div className="grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {data?.map((el, i) => (
            <Item key={i} data={el} onClick={openModalBy} />
          ))}
        </div>
      </MainLayout>
      <Dialog
        open={selectedItem !== null}
        onClose={closeModal}
        title={selectedItem?.label}
      >
        <img
          alt={selectedItem?.label || "بزرگنمایی شده"}
          src={selectedItem?.src}
          className="h-auto w-full"
        />
      </Dialog>
    </>
  );
};

export default Gallery;
