import React from "react";
import style from "./TrendingCard.module.css";
const TrendingCard = () => {
  return (
    <div className={style.trendingCard}>
      <span>Trending</span>
      <div className={style.pCircle}>
        <span>#2</span>
      </div>
    </div>
  );
};

export default TrendingCard;
