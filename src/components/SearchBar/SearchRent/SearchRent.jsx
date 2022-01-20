import React from 'react'
import s from './SearchRent.module.css';
import { BiSearch } from 'react-icons/bi';
import Input from '../../Input/Input';
import rent from '../../../JSON/rent.json'

const SearchRent = ( {value,
   changeSelect}) => {
    return (
        <div className={s.inputThumb}>
            <BiSearch className={s.icn}/>
            <Input
                value={value}
                langs={rent}
                onChange={changeSelect}
                color='#98A7B3'
                width='180px'
            /> 
        </div>
    )
}

export default SearchRent