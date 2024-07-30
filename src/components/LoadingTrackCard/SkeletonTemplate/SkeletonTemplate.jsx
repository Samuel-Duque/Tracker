import style from "./SkeletonTemplate.module.css";
import React from "react";

const SkeletonTemplate = () => {
  return (
    <div className={style.HeroTrackContent}>
      <div className={style.HeroTrackContentTrackImg}></div>
      <div className={style.HeroTrackContentTrackInfo}>
        <div className={style.HeroTrackContentTrackInfoTitle}></div>
        <div className={style.HeroTrackContentTrackInfoWrap}>
          <div className={style.HeroTrackContentTrackInfoName}></div>
          <div className={style.HeroTrackContentTrackInfoType}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonTemplate;
