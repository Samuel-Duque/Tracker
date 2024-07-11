import React from "react";
import style from "./TrackCard.module.css";
import starIcon from "../../assets/icons/star-icon.svg";
import songIcon from "../../assets/icons/song-icon.svg";
import { useState } from "react";
import likeIcon from "../../assets/icons/like-icon.svg";
import trackIcon from "../../assets/icons/track-icon.svg";
import activelikeIcon from "../../assets/icons/active-like-icon.svg";
import activetrackIcon from "../../assets/icons/active-track-icon.svg";
import threedotsIcon from "../../assets/icons/threedots-icon.svg";
const TrackCard = ({ trackName, trackArtist, trackImage, index }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClickedTrack, setClickedTrack] = useState(false);
  const [isClickedLike, setClickedLike] = useState(false);
  return (
    <div className={style.cardContainer}>
      <div
        className={style.trackCover}
        onMouseEnter={() => setIsVisible(false)}
        onMouseLeave={() => setIsVisible(true)}
      >
        {!isVisible && (
          <div className={style.overlay}>
            <div className={style.moreOptions}>
              <img
                src={isClickedTrack ? activetrackIcon : trackIcon}
                alt=""
                onClick={() => setClickedTrack(!isClickedTrack)}
              />
              <img
                src={isClickedLike ? activelikeIcon : likeIcon}
                alt=""
                onClick={() => setClickedLike(!isClickedLike)}
              />
              <img src={threedotsIcon} alt="" />
            </div>
            <div className={style.overlayTagname}>
              <span>
                {trackName}
              </span>
              <span style={{ fontSize: "12px" }}>{trackArtist}</span>
            </div>
          </div>
        )}
        <div className={`${isVisible ? style.trackType : style.trackTypeOff}`}>
          <img src={songIcon} alt="" />
        </div>
        <img src={trackImage} alt="" />
      </div>
      <div className={style.trackInfo}>
        <span>{trackName}</span>
        <div className={style.rating}>#{index}</div>
      </div>
    </div>
  );
};

export default TrackCard;
