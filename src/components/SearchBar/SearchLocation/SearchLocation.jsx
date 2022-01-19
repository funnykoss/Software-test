import React from 'react'
// import s from './SearchLocation.module.css'
import { GrMapLocation } from 'react-icons/gr'
import Input from '../../Input/Input'
 import locationList from '../../../JSON/locationList.json'

const SearchLocation = ({value,
   changeSelect}) => {
    return (
        <>
             <>
            <GrMapLocation />
           <Input value={ value} langs={locationList} onChange={changeSelect}/> 
        </>
        </>
    )
}

export default SearchLocation