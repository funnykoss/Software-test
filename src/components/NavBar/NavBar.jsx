import { React } from 'react';
import { Link } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import InputCurrency from '../InputCurrency/InputCurrency';
import InputLang from '../InputLang';
import s from './NavBar.module.css'


const NavBar = () => {
    return (
        
           <ul className={s.navBar}>
                <li className={s.navItem}>
                    <Link to="/"
                className={s.link}>
                 <BiExit />
                Увійти
             </Link>
               </li>
                <li className={s.navItem}>
                     <InputLang />
               </li>
                <li className={s.navItem}>
                     <InputCurrency/>
               </li>
           </ul>
    )
   
    
}

export default NavBar