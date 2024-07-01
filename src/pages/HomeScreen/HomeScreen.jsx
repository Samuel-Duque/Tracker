import React from "react";
import "./HomeScreen.module.css";
import Header from "../../components/Header/Header";
import TrackCard from "../../components/TrackCard/TrackCard";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <div className="home-page">
      <Header />
      {/* <TrackCard /> */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
