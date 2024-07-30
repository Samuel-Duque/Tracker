import React, { useEffect } from "react";
import style from "./HeroTrackInfo.module.css";
import upArrow from "../../../assets/icons/up-arrow-thin.svg";

const HeroTrackInfo = ({ track }) => {
  useEffect(() => {
    console.log(track);
  }, [track]);

  return (
    <>
      <div className={style.HeroTrackContentTrackInfoWrap}>
        <span className={style.TrackName}>{track?.name}</span>
        <div className={style.HeroTrackContentTrackInfoSub}>
          <span className={style.TrackArtist}>{track?.artists[0]?.name}</span>
          <span className={style.TrackType}>
            {track &&
              track?.album?.album_type?.charAt(0)?.toUpperCase() +
                track?.album?.album_type?.slice(1)}
          </span>
        </div>
      </div>
      <div className={style.HeroTrackContentTrackInfoTags}>
        {/* {track.tags.map((tag, index) => {
          const tagName = Object.keys(tag)[0];
          const tagValue = tag[tagName];
          return (
            tagValue <= 5 && (
              <div key={index}>
                <span className={style.Tags}>
                  <img src={upArrow} alt="Up Arrow" />
                  {tagName} {tagValue}
                </span>
              </div>
            )
          );
        })} */}
      </div>
    </>
  );
};

export default HeroTrackInfo;
