import React, { useEffect } from "react";
import style from "./HeroTrackInfo.module.css";
import upArrow from "../../../assets/icons/up-arrow-thin.svg";
import explicitIcon from "../../../assets/icons/explicit-icon.svg";
import Explicit from "../../../components/Explicit/Explicit";
const HeroTrackInfo = ({ track }) => {
  useEffect(() => {}, [track]);

  return (
    <>
      <div className={style.HeroTrackContentTrackInfoWrap}>
        <div className={style.trackHeroInfo}>
          <div className={style.trackHeroTitle}>
            <span className={style.TrackName}>{track?.name}</span>
            {track?.explicit && <Explicit />}
          </div>
          <span className={style.heroReleaseYear}>
            {track?.album?.release_date?.split("-")[0]}
          </span>
        </div>
        <div className={style.HeroTrackContentTrackInfoSub}>
          <span className={style.TrackArtist}>{track?.artists[0]?.name}</span>
          <div>
            <span>
              {track &&
                track?.album?.album_type?.charAt(0)?.toUpperCase() +
                  track?.album?.album_type?.slice(1)}
            </span>
            {track?.album?.album_type != "single" && (
              <>
                <span> - </span>
                <span className={style.TrackType}>{track?.album?.name}</span>
              </>
            )}
          </div>
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
