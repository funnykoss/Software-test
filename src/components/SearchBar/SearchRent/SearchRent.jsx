import React from 'react'
// import s from './SearchRent.module.css';
import { BiSearch } from 'react-icons/bi';
import Input from '../../Input/Input';
import rent from '../../../JSON/rent.json'

const SearchRent = ( {value,
   changeSelect}) => {
    return (
        <>
            <BiSearch />
           
           <Input value={ value} langs={rent} onChange={changeSelect}/> 
        </>
    )
}

export default SearchRent