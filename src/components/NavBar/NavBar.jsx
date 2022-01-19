import React from 'react';
import { BiExit } from 'react-icons/bi';
import InputCurrency from '../InputCurrency/InputCurrency';
import InputLang from '../InputLang';
import s from './NavBar.module.css'


const NavBar = () => {
    return (
        <div className={s.navBar}>
            <BiExit />
            <p>Увійти</p>
            <InputLang />
            <InputCurrency/>
        </div>
    )
   
    
}

export default NavBar