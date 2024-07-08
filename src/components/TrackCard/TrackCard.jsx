import React from "react";
import style from "./TrackCard.module.css";
import starIcon from "../../assets/icons/star-icon.svg";
import songIcon from "../../assets/icons/song-icon.svg";

const TrackCard = ({ trackName, trackImage }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.trackCover}>
        <div className={style.trackType}>
          <img src={songIcon} alt="" />
        </div>
        <img src={trackImage} alt="" />
      </div>
      <div className={style.trackInfo}>
        <span>{trackName}</span>
        <div className={style.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <img key={index} src={starIcon} alt={`Star ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
