import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import s from './HeaderLogo.module.css'

const HeaderLogo = () => {
    return (
        <>
            <Link
                to="/"
                className={s.link}>
                <img src={logo} alt="logo" />
                <p className={s.logoTitle}>Портал оренды и проката
                    товаров и услуг
                </p>
           </Link>
        </>
    )

}

export default HeaderLogo