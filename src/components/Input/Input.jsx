import React from "react";

const Input = ({value}) => {
    return (
        <form>
        <select>
            <option value={value}>{value}</option>
            
            <option selected value={value}>{value}</option>
 </select>
        </form>
    )
}

export default Input