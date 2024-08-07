import React, { useContext } from "react";
import style from "./TrackCardReview.module.css";
import starIcon from "../../assets/icons/star-icon.svg";
import songIcon from "../../assets/icons/song-icon.svg";
import profilePic from "../../assets/icons/profile-pic-dark.svg";
import { UserLoggedContext } from "../../contexts/UserLoggedContext";

const TrackCardTracked = ({ track }) => {
  const { userLogged } = useContext(UserLoggedContext);

  const review = {
    user: userLogged?.username,
    userImg: profilePic,
    track: track?.name,
    coverImg: track.album.images[1].url,
    type: "song",
    rating: 3,
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.trackCover}>
        <div className={style.trackType}>
          <img src={songIcon} alt="" />
        </div>
        <img src={review.coverImg} alt="Track Cover" />
      </div>
      <div className={style.trackInfo}>
        <div className={style.userInfo}>
          <img src={review.userImg} alt="" />
          <span>{review.user}</span>
        </div>
        <div className={style.rating}>
          {Array.from({ length: review.rating }).map((_, index) => (
            <img key={index} src={starIcon} alt={`Star ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackCardTracked;
