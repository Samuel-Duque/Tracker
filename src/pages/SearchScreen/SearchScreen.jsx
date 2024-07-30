import React from "react";
import style from "../SearchScreen/SearchScreen.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

const SearchScreen = () => {
  return (
    <>
      <div className={style.searchScreen}>
        <div>
          <Header />
          <Search />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SearchScreen;
