import React, { useEffect, useState } from "react";
import style from "./SearchItem.module.css";
import plusIcon from "../../assets/icons/more-icon.svg";
import defaultImg from "../../assets/img/defautImage.png";
import TrendingCard from "../TrendingCard/TrendingCard";
import starIcon from "../../assets/icons/star-icon.svg";

const SearchItem = ({ music }) => {
  const [track, setTrack] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);

  useEffect(() => {
    setTrack(music);
    setReleaseDate(track?.album.release_date.split("-")[0]);
  }, [music]);
  return (
    <>
      <div className={style.SearchItemContainer}>
        <div className={style.CoverImage}>
          <img src={track?.album.images[0].url} alt="" />
        </div>
        <div className={style.trackInfo}>
          <div className={style.sideinfo}>
            <div className={style.topTrackInfo}>
              <div className={style.nameRelease}>
                <span className={style.trackName}>{track?.name}</span>
                <span className={style.trackReleaseDate}>{releaseDate}</span>
              </div>
              <div>
                <span className={style.trackArtistName}>
                  {track?.album.artists[0].name}
                </span>
              </div>
              <div className={style.rating}>
                <div className={style.ratingStar}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src={starIcon} alt={`Star ${index + 1}`} />
                  ))}
                </div>
                <span>4.4</span>
              </div>
            </div>
          </div>
          <div className={style.sideinfo}>
            <TrendingCard />
            <div className={style.friendsListened}>
              <span>Friends Listened</span>
              <img src={defaultImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
