import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";

const DatePickerCompo = () => {
  const [value, setValue] = useState(null)
  const [time, setTime] = useState(null)
  console.log({value: value?.$d}, {time: time?.$d})
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={value} onChange={(newValue)=>setValue(newValue)} label="Basic date picker" />
      <br /><br />
      <TimePicker value={time} onChange={(newTime)=>setTime(newTime)} label="Basic time picker" />
    </LocalizationProvider>
  );
};
export default DatePickerCompo;
