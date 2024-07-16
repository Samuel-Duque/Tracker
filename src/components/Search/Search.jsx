import React, { useContext, useEffect, useState } from "react";
import style from "./Search.module.css";
import { HandleSearch } from "../../services/HandleSearch";
import SearchItem from "./SearchItem";
import { useParams } from "react-router-dom";
import { ClickOutsideContext } from "../../contexts/ClickOutsideContext";
import ReviewsOverlay from "../Reviews/ReviewsOverlay";
import { SelectedTrackContext } from "../../contexts/SelectedTrackContext";
const Search = () => {
  const { trackQuery } = useParams();
  const [searchSongs, setSearchSongs] = useState(null);
  const { show, setShow } = useContext(ClickOutsideContext);
  const { selectedTrack } = useContext(SelectedTrackContext);

  useEffect(() => {
    const handleSearch = async () => {
      const songs = await HandleSearch(trackQuery);
      const uniqueTracks = [];

      songs.forEach((track) => {
        const isDuplicate = uniqueTracks.some(
          (uniqueTrack) =>
            track.name.toLowerCase().includes(uniqueTrack.name.toLowerCase()) &&
            uniqueTrack.album.artists[0].name === track.album.artists[0].name
        );

        if (!isDuplicate) {
          uniqueTracks.push(track);
        }
      });

      setSearchSongs(uniqueTracks);
    };
    handleSearch();
  }, [trackQuery]);

  return (
    <>
      <div>{show && <ReviewsOverlay track={selectedTrack} />}</div>
      <div className={style.seachTracks}>
        {searchSongs &&
          searchSongs.map((track, index) => {
            return <SearchItem key={index} music={track} />;
          })}
      </div>
    </>
  );
};

export default Search;
