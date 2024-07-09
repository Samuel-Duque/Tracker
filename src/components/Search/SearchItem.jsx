import React, { useEffect, useState } from "react";
import style from "./SearchItem.module.css";
import { fetchTrack } from "../../services/FetchTrack";
const SearchItem = ({ musicURL }) => {
  const [track, setTrack] = useState(null);
  useEffect(() => {
    const fetchSong = async () => {
      const track = await fetchTrack((musicURL = { musicURL }));
      setTrack(track);
    };
    fetchSong();
  });
  return (
    <>
      <div className={style.SearchItemContainer}>
        <div className={style.CoverImage}>
          <img src={track?.images[0]} alt="" />
        </div>
      </div>
    </>
  );
};

export default SearchItem;
