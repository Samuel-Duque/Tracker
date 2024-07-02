import React from "react";
import style from "./HomeCards.module.css";
import TrackCard from "../TrackCard/TrackCard";
import Title from "../Title/Title";
import TrackCardTracked from "../TrackCardTracked/TrackCardTracked";

const HomeCards = () => {
  return (
    <div className={style.homeCards}>
      <div className={style.trending}>
        <Title title={"Trending"} />
        <div className={style.tredingCards}>
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
        </div>
      </div>
      <div className={style.homeCards}>
        <Title title={"New from friends"} />
        <div className={style.tredingCards}>
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
