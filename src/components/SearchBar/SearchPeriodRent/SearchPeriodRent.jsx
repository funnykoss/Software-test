import React, { useState } from "react";
import s from './SearchPeriodRent.module.css'
import { BsCalendar3 } from 'react-icons/bs'
import DatePicker from "react-datepicker";
import 'react-datepicker/src/stylesheets/datepicker.css';

const SearchPeriodRent = () => {
     const [startDate, setStartDate] = useState(new Date());
   return (
        <div className={s.inputThumb}>
          <BsCalendar3 className={s.icn}/>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        </div>
    )
}

export default SearchPeriodRent




