import React, { useEffect, useState } from "react";
import style from "./HomeCards.module.css";
import TrackCard from "../TrackCard/TrackCard";
import Title from "../Title/Title";
import TrackCardTracked from "../TrackCardReview/TrackCardReview";
import { handleTopTracks } from "../../services/HandleTopTracks";

const HomeCards = () => {
  const [topSongs, setTopSongs] = useState(null);
  useEffect(() => {
    const getTopTracks = async () => {
      const result = await handleTopTracks();
      result ? setTopSongs(result.response) : console.log(result);
    };
    getTopTracks();
  }, []);

  return (
    <div className={style.homeCards}>
      <div className={style.cards}>
        <Title title={"Trending"} />
        <div className={style.trackCards}>
          {topSongs &&
            topSongs.map((track, index) => (
              <TrackCard
                key={index} // Adicionado para evitar warnings de 'key' no React
                trackName={track.name}
                trackCover={
                  track.image.find((img) => img.size === "extralarge")["#text"]
                }
              />
            ))}
        </div>
      </div>
      <div className={style.cards}>
        <Title title={"New from friends"} more={true} />
        <div className={style.trackCards}>
          <TrackCardTracked />
          <TrackCardTracked />
          <TrackCardTracked />
          <TrackCardTracked />
          <TrackCardTracked />
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
