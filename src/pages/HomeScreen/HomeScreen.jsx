import React from "react";
import style from "./HomeScreen.module.css";
import Header from "../../components/Header/Header";
import TrackCard from "../../components/TrackCard/TrackCard";
import Footer from "../../components/Footer/Footer";
import HomeCards from "../../components/HomeCards/HomeCards";
import TopArtists from "../../components/TopArtists";
import ArtistImage from "../../components/ArtistImage";
const HomeScreen = () => {
  return (
    <div className={style.homePage}>
      <div>
        <Header />
        <HomeCards />
        <TopArtists />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
