import { useState } from "react";
import moment from "moment-jalaali";
import Calendar from "./Calendar";
import Button from "components/Button";

const DatePiker = (props) => {
  const { onSubmitDate, name, open, openModal, closeModal } = props;
  const [newDate, setNewDate] = useState(moment().format("jYYYY/jMM/jDD"));
  const [saveDate, setSaveDate] = useState(moment().format("jYYYY/jMM/jDD"));

  const handleChange = (date) => {
    setSaveDate(date);
  };

  const changeDate = () => {
    setNewDate(saveDate);
    onSubmitDate && onSubmitDate({ target: { name: name, value: saveDate } });
    closeModal();
  };

  return (
    <div className="relative">
      <div
        className="w-max rounded-lg border-2 px-3 py-1 hover:border-indigo-600"
        onClick={openModal}
      >
        {newDate}
      </div>

      {open && (
        <div
          className="absolute w-max rounded-lg border-2 border-gray-200 bg-white p-5"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-sm">
            <div className="modal-content">
              <div className="modal-body">
                <Calendar
                  changeSaveDate={handleChange}
                  value={newDate?.split("/")}
                />
              </div>
              <div className="modal-footer mt-3 flex">
                <Button
                  className="ml-2 w-full py-0"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  لغو
                </Button>
                <Button
                  className="w-full py-0"
                  data-bs-dismiss="modal"
                  onClick={changeDate}
                >
                  تایید
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePiker;
