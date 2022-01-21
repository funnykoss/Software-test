import React from "react";
import s from './HomePageView.module.css'
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import SimpleMap from '../../components/SimpleMap/SimpleMap'

const HomePageView = () => {
    
    return (
    <>
          <Header />
        <div className={s.main}>
          <SearchBar />
        </div> 
        <SimpleMap/>
    </>
       
    )
}
export default HomePageView