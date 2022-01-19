import React from "react";
import { useState } from "react";
import s from './Input.module.css'

const Input = ({langs}) => {
  const [value, setValue] = useState('');

   function changeSelect(event) {
      setValue(event.target.value);
   }

    return <div>
        <select value={value} onChange={changeSelect} className={s.thumb}>
            {
                langs.map(({ id, title }) => (
                    <option key={id}>{title}</option>
                ))
           } 
</select>
     
   </div>;
}


export default Input