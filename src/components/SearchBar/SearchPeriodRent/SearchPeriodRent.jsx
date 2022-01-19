import React, { useState } from "react";
import s from './SearchPeriodRent.module.css'
import { BsCalendar3 } from 'react-icons/bs'
import DatePicker from "react-datepicker";
import 'react-datepicker/src/stylesheets/datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const SearchPeriodRent = () => {
     const [startDate, setStartDate] = useState(new Date());
   return (
        <>
            <BsCalendar3 className={s.icn}/>
       <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={ s.datePicker}/>

        </>
    )
}

export default SearchPeriodRent




