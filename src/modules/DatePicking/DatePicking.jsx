import DatePicker from "components/DatePicker";
import { useState } from "react";

const DatePicking = () => {
  const [open, setOpen] = useState(0);

  const openModal = (e) => setOpen(e);
  const closeModal = () => setOpen(0);

  return (
    <div className="my-10 flex">
      <div className="flex items-center">
        <div className="ml-2">از تاریخ</div>
        <DatePicker
          open={open === 1}
          openModal={() => openModal(1)}
          closeModal={closeModal}
          name="jalaali-date-picker"
        />
      </div>
      <div className="mr-3 flex items-center">
        <div className="ml-2">تا تاریخ</div>
        <DatePicker
          open={open === 2}
          openModal={() => openModal(2)}
          closeModal={closeModal}
          name="jalaali-date-picker"
        />
      </div>
    </div>
  );
};

export default DatePicking;
