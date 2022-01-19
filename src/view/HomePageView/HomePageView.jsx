import React from "react";
import s from './HomePageView.module.css'
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";


const HomePageView = () => {
    
    return (
    <>
          <Header />
        <div className={s.main}>
          <SearchBar />
        </div> 
    </>
       
    )
}
export default HomePageView