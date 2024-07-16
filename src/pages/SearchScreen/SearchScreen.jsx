import React from "react";
import style from "../SearchScreen/SearchScreen.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import { useParams } from "react-router-dom";

const SearchScreen = () => {
  return (
    <>
      <div className={style.SearchScreen}>
        <Header />
        <div className={style.HeaderSearch}>
          <Search />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SearchScreen;
