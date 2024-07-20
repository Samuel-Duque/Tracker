import React from "react";
import style from "./TrendingSheet.module.css";
import upArrow from "../../assets/icons/up-arrow-thin.svg";

const TrendingSheet = ({ position, title, trackName }) => {
  const Trending = {
    tracks: [
      {
        name: "BIRDS OF A FEATHER",
        position: 1,
      },
      {
        name: "Please Please Please",
        position: 2,
      },
      {
        name: "MILLION DOLLAR BABY",
        position: 3,
      },
      {
        name: "Espresso",
        position: 4,
      },
      {
        name: "Not Like Us",
        position: 5,
      },
    ],
  };
  return (
    <>
      <div className={style.TrendingSheet}>
        {/* Sessão inicio  # TITULO */}
        <div className={style.SheetTitle}>
          #{position}&nbsp;
          {title} Trending
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9012 6.61868C10.8446 6.67549 10.7773 6.72057 10.7032 6.75133C10.6292 6.78208 10.5498 6.79791 10.4696 6.79791C10.3894 6.79791 10.3099 6.78208 10.2359 6.75133C10.1618 6.72057 10.0945 6.67549 10.0379 6.61868L7.4232 4.00396V11.4688C7.4232 11.6304 7.35899 11.7854 7.24471 11.8997C7.13043 12.014 6.97544 12.0782 6.81382 12.0782C6.6522 12.0782 6.49721 12.014 6.38293 11.8997C6.26865 11.7854 6.20445 11.6304 6.20445 11.4688V4.00396L3.5887 6.61868C3.47423 6.73316 3.31896 6.79747 3.15706 6.79747C2.99517 6.79747 2.8399 6.73316 2.72542 6.61868C2.61094 6.50421 2.54663 6.34894 2.54663 6.18704C2.54663 6.02515 2.61094 5.86988 2.72542 5.7554L6.38167 2.09915C6.43829 2.04234 6.50556 1.99727 6.57963 1.96651C6.6537 1.93575 6.73311 1.91992 6.81331 1.91992C6.89352 1.91992 6.97293 1.93575 7.047 1.96651C7.12107 1.99727 7.18834 2.04234 7.24495 2.09915L10.9012 5.7554C10.958 5.81202 11.0031 5.87929 11.0338 5.95336C11.0646 6.02743 11.0804 6.10684 11.0804 6.18704C11.0804 6.26725 11.0646 6.34666 11.0338 6.42073C11.0031 6.4948 10.958 6.56207 10.9012 6.61868Z"
              fill="#2871FF"
            />
          </svg>
        </div>
        {/* FIM Sessão # TITULO */}
        {/* Sessão inicio  # TRACKS */}
        <div className={style.SheetTracks}>
          {Trending.tracks.map((track, index) =>
            track.name === trackName ? (
              <span key={track.name} className={style.SheetTrackMatch}>
                <b>{index + 1}</b>&nbsp;&nbsp;{track.name}
              </span>
            ) : (
              <span key={track.name} className={style.SheetTrackUnitary}>
                <b>{index + 1}</b>&nbsp;&nbsp;{track.name}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default TrendingSheet;
