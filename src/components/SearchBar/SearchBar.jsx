
import React from 'react'
import s from './SearchBar.module.css'
import SearchLocation from './SearchLocation/SearchLocation'
import SearchMethodRent from './SearchMethodRent'
import SearchPeriodRent from './SearchPeriodRent'
import SearchRent from './SearchRent'
import Container from '../Container'

const SearchBar = () => {
    return (
        <>
            <Container>
            <form className={s.searchForm}>
                <SearchRent />
                <SearchMethodRent />
                <SearchPeriodRent /> 
                <SearchLocation />
                <button type="submit">Найти</button>
            </form> 
                </Container>
        </>
    )
}

export default SearchBar