import React, { useEffect } from "react";
import style from "./HomeCards.module.css";
import TrackCard from "../TrackCard/TrackCard";
import Title from "../Title/Title";
import TrackCardTracked from "../TrackCardReview/TrackCardReview";
import { handleTopTracks } from "../../services/HandleTopTracks";

const HomeCards = () => {
  useEffect(() => {
    const getTopTracks = async () => {
      handleTopTracks();
    };
    getTopTracks();
  }, []);

  return (
    <div className={style.homeCards}>
      <div className={style.cards}>
        <Title title={"Trending"} />
        <div className={style.trackCards}>
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
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
