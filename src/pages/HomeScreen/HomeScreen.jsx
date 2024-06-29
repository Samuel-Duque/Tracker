import React from "react";
import "./HomeScreen.module.css";
import Header from "../../components/Header/Header";
import TrackCard from "../../components/TrackCard/TrackCard";

const HomeScreen = () => {
  return (
    <div className="home-page">
      <Header />
      <TrackCard />
    </div>
  );
};

export default HomeScreen;
