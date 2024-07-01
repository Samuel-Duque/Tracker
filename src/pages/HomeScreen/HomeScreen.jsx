import React from "react";
import style from "./HomeScreen.module.css";
import Header from "../../components/Header/Header";
import TrackCard from "../../components/TrackCard/TrackCard";
import Footer from "../../components/Footer/Footer";
import Trending from "../../components/Trending/Trending";

const HomeScreen = () => {
  return (
    <div className={style.homePage} data-theme="light">
      <div>
        <Header />
        <Trending />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
