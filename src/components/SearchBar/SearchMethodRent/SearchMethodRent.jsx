import React from 'react'
import s from './SearchMethodRent.module.css'
import { MdOutlineSort } from 'react-icons/md'
import Input from '../../Input/Input';
import method from '../../../JSON/methodRent.json'

const SearchMethodRent = ({value,
   changeSelect}) => {
    return (
        <div className={s.inputThumb}>
            <MdOutlineSort className={s.icn}/>
            <Input
                value={value}
                langs={method}
                onChange={changeSelect}
                color='#98A7B3'
                width='180px'
            /> 
        </div>
    )
}

export default SearchMethodRent