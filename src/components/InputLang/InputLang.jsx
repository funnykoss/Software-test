import React from "react";
import { useState } from "react";
import Input from "../Input/Input";


const InputLang = () => {
    const [value, setValue] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue(value)
    };
    const handleChange = (event) => {
    setValue(event.target.value)
}

    
    return (
        <>
            <Input onSubmit={handleSubmit} onChange={handleChange}/>
        </>
    )
    
}
export default InputLang