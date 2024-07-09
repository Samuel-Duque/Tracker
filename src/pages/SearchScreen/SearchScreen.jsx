import React from "react";
import style from "../SearchScreen/SearchScreen.module.css";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Search from "src/components/Search/Search";

const SearchScreen = () => {
  return (
    <>
      <div className={style.SearchScreen}>
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
