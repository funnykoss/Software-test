import React from 'react'
import s from './SearchMethodRent.module.css'
import { MdOutlineSort } from 'react-icons/md'
import Input from '../../Input/Input';
import method from '../../../JSON/methodRent.json'

const SearchMethodRent = ({value,
   changeSelect}) => {
    return (
        <>
            <MdOutlineSort className={s.icn}/>
            <Input value={value} langs={method} onChange={changeSelect} className={ s.input}/> 
        </>
    )
}

export default SearchMethodRent