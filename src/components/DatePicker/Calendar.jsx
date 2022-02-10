import { useState, useEffect } from "react";
import moment from "moment-jalaali";
import _ from "lodash";
import { MdToday } from "react-icons/md";
import "./style.css";

const cd = Array(35).fill(<li> </li>);
const jm = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const Calendar = ({ changeSaveDate, value }) => {
  moment().local("fa");
  const [selectYear, setSelectYear] = useState(
    value[0] || moment().format("jYYYY")
  );
  const [selectMonth, setSelectMonth] = useState(
    value[1] || moment().format("jM")
  );
  const [selectDay, setSelectDay] = useState(value[2] || moment().format("jD"));
  const [daysInMonth, setDaysInMonth] = useState(0);

  const updateDays = () => {
    cd.fill(<li className="li-empty">&nbsp;</li>);
    _.range(0, daysInMonth).forEach((d) => {
      cd[d] =
        d + 1 === Number(selectDay) ? (
          <li className="li-calendar border-1 flex justify-center rounded-lg bg-indigo-300 text-center">
            {d + 1}
          </li>
        ) : (
          <li
            className="li-calendar border-1 flex cursor-pointer justify-center rounded-lg text-center hover:bg-indigo-100"
            onClick={() => handleSelectDay(d + 1)}
          >
            {d + 1}
          </li>
        );
    });
  };

  useEffect(() => {
    const newDate = `${selectYear}/${selectMonth}/${selectDay}`;
    const m = moment(newDate);
    setDaysInMonth(Number(m.format("M")) < 7 ? 31 : 30);
    changeSaveDate(m.format("YYYY/MM/DD"));
    updateDays();
  }, [selectYear, selectMonth]);

  useEffect(() => {
    const newDate = `${selectYear}/${
      selectMonth < 10 ? `0${selectMonth}` : selectMonth
    }/${selectDay < 10 ? `0${selectDay}` : selectDay}`;
    changeSaveDate(newDate);
  }, [selectDay]);

  updateDays();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "j_year") setSelectYear(value);
    else setSelectMonth(value);
    setSelectDay(1);
  };

  const handleSelectDay = (day) => {
    setSelectDay(day);
  };

  const handleToday = () => {
    const m = moment();
    setSelectDay(m.format("jD"));
    setSelectMonth(m.format("jM"));
    setSelectYear(m.format("jYYYY"));
  };

  return (
    <div>
      <ul className="justify-content-between">
        <li>
          <select
            className="form-select cursor-pointer content-center justify-center rounded-lg bg-indigo-100 py-2 px-4"
            name="j_year"
            value={selectYear}
            onChange={handleChange}
          >
            {_.range(moment().format("jYYYY"), 1320).map((y) => (
              <option className="bg-white py-1" key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </li>
        <li>
          <select
            className="form-select cursor-pointer content-center justify-center rounded-lg bg-indigo-100 py-2 px-4"
            name="j_month"
            value={selectMonth}
            onChange={handleChange}
          >
            {_.range(0, 12).map((m) => {
              return (
                <option className="bg-white py-1" key={m} value={m + 1}>
                  {jm[m]}
                </option>
              );
            })}
          </select>
        </li>
      </ul>
      <div className="mt-4">
        <ul>
          {cd[0]}
          {cd[1]}
          {cd[2]}
          {cd[3]}
          {cd[4]}
          {cd[5]}
          {cd[6]}
        </ul>

        <ul>
          {cd[7]}
          {cd[8]}
          {cd[9]}
          {cd[10]}
          {cd[11]}
          {cd[12]}
          {cd[13]}
        </ul>

        <ul>
          {cd[14]}
          {cd[15]}
          {cd[16]}
          {cd[17]}
          {cd[18]}
          {cd[19]}
          {cd[20]}
        </ul>

        <ul>
          {cd[21]}
          {cd[22]}
          {cd[23]}
          {cd[24]}
          {cd[25]}
          {cd[26]}
          {cd[27]}
        </ul>

        <ul>
          {cd[28]}
          {cd[29]}
          {cd[30]}
          {cd[31]}
          {cd[32]}
          {cd[33]}
          <li
            className="rounded-lg px-3 pt-1 pb-2 hover:cursor-pointer hover:bg-indigo-50"
            onClick={handleToday}
          >
            امروز
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
