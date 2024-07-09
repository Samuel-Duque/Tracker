import React, { useEffect, useState } from "react";
import style from "./SearchItem.module.css";
import { fetchTrack } from "../../services/FetchTrack";
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
          <div className={style.nameRelease}>
            <span className={style.trackName}>{track?.name}</span>
            <span className={style.trackReleaseDate}>{releaseDate}</span>
          </div>
          <div>
            <span className={style.trackArtistName}>
              {track?.album.artists[0].name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
