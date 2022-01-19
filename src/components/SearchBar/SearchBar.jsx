
import React from 'react'
import s from './SearchBar.module.css'
import SearchMethodRent from './SearchMethodRent'
import SearchPeriodRent from './SearchPeriodRent'
import SearchRent from './SearchRent'

const SearchBar = () => {
    return (
        <>
            <form>
                <SearchRent />
                <SearchMethodRent />
                <SearchPeriodRent /> 
                <button type="submit">Найти</button>
            </form> 
        </>
    )
}

export default SearchBar