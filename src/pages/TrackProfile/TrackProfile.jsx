import React from "react";
import style from "./TrackProfile.module.css";
import trackImg from "../../assets/img/artistimg.svg";
import RatingReview from "../../assets/icons/RatingReview";
import WhereToListen from "../../components/WhereToListen/WhereToListen";
import TrendingSheet from "../../components/TrackProfileHeroSection/TrendingSheet/TrendingSheet";
import HeroTrackInfo from "../../components/TrackProfileHeroSection/HeroTrackInfo/HeroTrackInfo";
import TabbedContent from "../../components/TrackProfileTabbedContent/TrackProfileTabbedContent";
import { trackLyrics } from "../../assets/data/Lyrics";
const TrackProfile = () => {
  const Track = {
    img: trackImg,
    name: "Espresso",
    artist: "Sabrina Carpenter",
    type: "Single",
    lyrics: trackLyrics,
    tags: [{ Pop: 4 }, { Top: 2 }],
    avaiblePlataforms: [
      {
        plataform: "Spotify",
      },
      {
        plataform: "Youtube Music",
      },
      {
        plataform: "Apple Music",
      },
      {
        plataform: "Amazon Music",
      },
      {
        plataform: "Deezer",
      },
    ],
  };

  return (
    <>
      <div className={style.TrackPage}>
        {/* Sessão HeroSection - INICIO */}
        <div className={style.HeroSection}>
          {/* Sessão HeroTrackContent (Foto, titulo e tags)- INICIO */}
          <div className={style.HeroTrackContent}>
            <div className={style.HeroTrackContentTrackImg}>
              <img src={Track.img} alt="Track Image" />
            </div>
            <div className={style.HeroTrackContentTrackInfo}>
              <HeroTrackInfo Track={Track} />
            </div>
          </div>
          {/* Sessão HeroTrackContent (Foto, titulo e tags) - FIM */}
          {/* Sessão Trending Sheets - INICIO */}
          <div className={style.TrendingSheetSection}>
            <div className={style.TrendingSheet1}>
              <TrendingSheet
                position={4}
                title={"Global"}
                trackName={Track.name}
              />
            </div>
            <div className={style.TrendingSheet2}>
              <TrendingSheet
                position={4}
                title={"Pop"}
                trackName={Track.name}
              />
            </div>
          </div>
          {/* Sessão Trending Sheets - FIM */}
          <div className={style.Review_Trending}>
            <div className={style.NumberAndStars}>
              <span className={style.ReviewNumber}>193K Reviews</span>
              <RatingReview percentage={90} />
            </div>
            <div className={style.TrendingBox}>
              <span className={style.TrendingTitle}>Trending</span>
              <span className={style.TrendingNumber}>#2</span>
            </div>
          </div>
        </div>
        {/* Sessão HeroSection -FIM*/}
        {/* Sessão TrackDetails - INICIO */}
        <div className={style.TrackDetails}>
          <div className={style.TrackDetails_left}>
            <WhereToListen Track={Track} />
          </div>
          <div className={style.TrackDetails_right}>
            <div className={style.TrackDetailsTabAndLog}>
              <div className={style.TrackDetailsTab}>
                <TabbedContent Track={Track} />
              </div>
              <div className={style.TrackDetailsLogAndReview}>
                <div className={style.TrackDetailsLog}>Log</div>
                <div className={style.TrackDetailsReview}>Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackProfile;
