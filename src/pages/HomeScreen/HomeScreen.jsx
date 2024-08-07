import React from "react";
import style from "./HomeScreen.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeCards from "../../components/HomeCards/HomeCards";
const HomeScreen = () => {
  return (
    <div className={style.homeScreen}>
      <div>
        <Header />
        <HomeCards />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
