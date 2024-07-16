import React from "react";
import style from "./TrackProfileScreen.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TrackProfile from "../TrackProfile/TrackProfile";

const TrackProfileScreen = () => {
  return (
    <>
      <div className={style.TrackProfileScreen}>
        <Header />
        <div className={style.TrackProfile}>
          <TrackProfile />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TrackProfileScreen;
