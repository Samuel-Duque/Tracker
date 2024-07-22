import React from "react";
import style from "./HeroTrackInfo.module.css";
import upArrow from "../../../assets/icons/up-arrow-thin.svg";

const HeroTrackInfo = ({ Track }) => {
  return (
    <>
      <div className={style.HeroTrackContentTrackInfoWrap}>
        <span className={style.TrackName}>{Track.name}</span>
        <div className={style.HeroTrackContentTrackInfoSub}>
          <span className={style.TrackArtist}>{Track.artist}</span>
          <span className={style.TrackType}>{Track.type}</span>
        </div>
      </div>
      <div className={style.HeroTrackContentTrackInfoTags}>
        {Track.tags.map((tag, index) => {
          const tagName = Object.keys(tag)[0];
          const tagValue = tag[tagName];
          return (
            <>
              {tagValue <= 5 && (
                <div>
                  <span key={index} className={style.Tags}>
                    <img src={upArrow} />
                    {tagName} {tagValue}
                  </span>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default HeroTrackInfo;
