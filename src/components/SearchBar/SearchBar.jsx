
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
                    <ul className={s.searchList}>
                        <li className={s.searchBarItem}>
                           <SearchRent />
                        </li>
                        <li className={s.searchBarItem}>
                           <SearchMethodRent />
                        </li>
                        <li className={s.searchBarItem}>
                           <SearchPeriodRent /> 

                        </li>
                        <li className={s.searchBarItem}>
                          <SearchLocation />
                        </li>
                    </ul>
                
                
                <button type="submit" className={s.searchButton}>Найти</button>
            </form> 
                </Container>
        </>
    )
}

export default SearchBar