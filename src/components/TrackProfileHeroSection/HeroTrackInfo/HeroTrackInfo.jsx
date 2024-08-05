import React, { useEffect } from "react";
import style from "./HeroTrackInfo.module.css";
import upArrow from "../../../assets/icons/up-arrow-thin.svg";
import explicitIcon from "../../../assets/icons/explicit-icon.svg";
const HeroTrackInfo = ({ track }) => {
  useEffect(() => {}, [track]);

  return (
    <>
      <div className={style.HeroTrackContentTrackInfoWrap}>
        <div className={style.trackHeroInfo}>
          <div className={style.trackHeroTitle}>
            <span className={style.TrackName}>{track?.name}</span>
            {track?.explicit && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 6h-3v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1"
                />
              </svg>
            )}
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
