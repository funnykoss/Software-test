import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import s from './HeaderLogo.module.css'

const HeaderLogo = () => {
    return (
        <div className={s.section}>
            <Link
                to="/"
                className={s.link}>
                <img src={logo} alt="logo" />
            </Link>
            <p className={s.logoTitle}>Портал оренды и проката
                    товаров и услуг
                </p>
        </div>
    )

}

export default HeaderLogo