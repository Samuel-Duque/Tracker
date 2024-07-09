import React, { useEffect, useState } from "react";
import style from "./Search.module.css";
import { HandleSearch } from "../../services/HandleSearch";
import SearchItem from "./SearchItem";
const Search = () => {
  const [searchSongs, setSearchSongs] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {
      const songs = await HandleSearch();
      setSearchSongs(songs);
    };
    handleSearch();
  }, []);
  return (
    <>
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
