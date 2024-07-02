import React from "react";
import style from "./TrackCardTracked.module.css";
import starIcon from "../../assets/icons/star-icon.svg";
import songIcon from "../../assets/icons/song-icon.svg";

const TrackCardTracked = ({ trackId }) => {
  const track = {
    title: "Please Please Please",
    coverImg:
      "https://cdns-images.dzcdn.net/images/cover/0fd6e3b346b959a8781ccfa89b63607a/1900x1900-000000-80-0-0.jpg",
    type: "song",
    rating: 5,
  };
  return (
    <div className={style.cardContainer}>
      <div className={style.trackCover}>
        <div className={style.trackType}>
          <img src={songIcon} alt="" />
        </div>
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

export default TrackCardTracked;
