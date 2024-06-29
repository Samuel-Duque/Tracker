import React from "react";
import style from "./TrackCard.module.css";

const TrackCard = ({ trackId }) => {
  const track = {
    title: "Espresso",
    coverImg:
      "https://i.scdn.co/image/ab67616d0000b273659cd4673230913b3918e0d5",
  };
  return (
    <div className={style.cardContainer}>
      <div className={style.trackCover}>
        <span>{track.title}</span>
        <img src={track.coverImg} alt="Track Cover" />
      </div>
      <div className={style.trackInfo}></div>
    </div>
  );
};

export default TrackCard;
