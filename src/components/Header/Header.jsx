import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavBar from "../NavBar";
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.section}>
            <Container >
                <div className={s.header}>
            <HeaderLogo />
            <div className={s.navigate}>
                <Button/>
                <NavBar />
            </div>
         </div>   
       </Container>

        </div>
       
    )
}

export default Header