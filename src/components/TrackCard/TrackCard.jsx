import React from "react";
import style from "./TrackCard.module.css";
import starIcon from "../../assets/icons/star-icon.svg";

const TrackCard = ({ trackId }) => {
  const track = {
    title: "Please Please Please",
    coverImg:
      "https://i.scdn.co/image/ab67616d0000b273659cd4673230913b3918e0d5",
    type: "song",
    rating: 5,
  };
  return (
    <div className={style.cardContainer}>
      <div className={style.trackCover}>
        <img src={track.coverImg} alt="Track Cover" />
      </div>
      <div className={style.trackInfo}>
        <span>{track.title}</span>
        <div className={style.rating}>
          {Array.from({ length: track.rating }).map((_, index) => (
            <img key={index} src={starIcon} alt={`Star ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
