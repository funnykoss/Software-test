import React from "react";
import { useState } from "react";
import s from './Input.module.css'

const Input = ({langs, color, width,}) => {
  const [value, setValue] = useState('');

   function changeSelect(event) {
      setValue(event.target.value);
   }

    return (
        <div >

            <select
                value={value}
                onChange={changeSelect}
                className={s.thumb}
            style={{color:`${color}`, width:`${width}`}}
            >
            {
                langs.map(({ id, title }) => (
                    <option key={id} className={s.title}>{title}</option>
                ))
           } 
        </select>
        </div>)
}


export default Input