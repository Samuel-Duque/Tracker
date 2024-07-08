import React from "react";
import style from "./LoadingTrackCard.module.css";

const LoadingTrackCard = () => {
  return (
    <>
      <div className={style.cardContainer}></div>
      <div className={style.cardContainer}></div>
      <div className={style.cardContainer}></div>
      <div className={style.cardContainer}></div>
      <div className={style.cardContainer}></div>
    </>
  );
};

export default LoadingTrackCard;
