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
            topSongs.map((item, index) => (
              <TrackCard
                key={index}
                trackName={item.track.name}
                trackArtist={item.track.artists[0].name}
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
