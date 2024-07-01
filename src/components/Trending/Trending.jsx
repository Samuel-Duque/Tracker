import React from "react";
import style from "./Trending.module.css";

import TrackCard from "../TrackCard/TrackCard";
import Title from "../Title/Title";

const Trending = () => {
  return (
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
  );
};

export default Trending;
