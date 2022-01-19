import React from "react";
import Input from "../Input/Input";
import currency from '../../JSON/currency.json'

const InputCurrency = ({ value,
   changeSelect,}) => {
 
  
    return (
        <>
            <Input value={ value} langs={currency} onChange={changeSelect}/>

            
        </>
    )
    
}
export default InputCurrency