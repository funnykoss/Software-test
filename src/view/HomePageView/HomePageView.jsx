import React from "react";
import s from './HomePageView.module.css'
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import MyMap from '../../components/MyMap/MyMap'

const HomePageView = () => {
    
    return (
    <>
          <Header />
        <div className={s.main}>
          <SearchBar />
        </div> 
        <MyMap/>
    </>
       
    )
}
export default HomePageView