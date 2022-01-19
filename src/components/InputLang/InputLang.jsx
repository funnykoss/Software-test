import React from "react";
import Input from "../Input/Input";
import langs from '../../JSON/langs.json'

const InputLang = ({ value,
   changeSelect,}) => {
 
  
    return (
        <>
            <Input value={ value} langs={ langs} onChange={changeSelect}/>

            
        </>
    )
    
}
export default InputLang