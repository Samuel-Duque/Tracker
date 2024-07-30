import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./TrackProfile.module.css";
import trackImg from "../../assets/img/artistimg.svg";
import RatingReview from "../../assets/icons/RatingReview";
import WhereToListen from "../WhereToListen/WhereToListen";
import TrendingSheet from "../TrackProfileHeroSection/TrendingSheet/TrendingSheet";
import HeroTrackInfo from "../TrackProfileHeroSection/HeroTrackInfo/HeroTrackInfo";
import TabbedContent from "../TrackProfileTabbedContent/TrackProfileTabbedContent";
import { trackLyrics } from "../../assets/data/Lyrics";
import LogCardComponent from "../LogCardComponent/LogCardComponent";
import ReviewBarChart from "../ReviewBarChart/ReviewBarChart";
import { fetchTrack } from "../../services/FetchTrack";
import { SelectedTrackContext } from "../../contexts/SelectedTrackContext";
import { handleDefaultRating } from "../../services/HandleDefaultRating";
import { DefaultRatingContext } from "../../contexts/DefaultRatingContext";

const TrackProfile = () => {
  const { trackQuery } = useParams();
  const { selectedTrack, setSelectedTrack } = useContext(SelectedTrackContext);
  const { setDefaultRatingData } = useContext(DefaultRatingContext);

  useEffect(() => {
    const handleFetchTrack = async () => {
      const track = await fetchTrack(trackQuery);
      setSelectedTrack(track);
    };
    handleFetchTrack();
  }, [trackQuery]);

  useEffect(() => {
    const fetchDefaultRating = async () => {
      const defaultRating = await handleDefaultRating(
        "zythee",
        selectedTrack?.id
      );
      setDefaultRatingData(defaultRating);
    };
    fetchDefaultRating();
  }, [selectedTrack]);

  return (
    <>
      <div className={style.TrackPage}>
        {/* Sessão HeroSection - INICIO */}
        <div className={style.HeroSection}>
          {/* Sessão HeroTrackContent (Foto, titulo e tags)- INICIO */}
          <div className={style.HeroTrackContent}>
            <div className={style.HeroTrackContentTrackImg}>
              <img
                src={selectedTrack?.album?.images[1]?.url}
                alt="Track Image"
              />
            </div>
            <div className={style.HeroTrackContentTrackInfo}>
              <HeroTrackInfo track={selectedTrack} />
            </div>
          </div>
          {/* Sessão HeroTrackContent (Foto, titulo e tags) - FIM */}
          {/* Sessão Trending Sheets - INICIO */}

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
            <WhereToListen Track={selectedTrack} />
          </div>
          <div className={style.TrackDetails_right}>
            <div className={style.TrackDetailsTabAndLog}>
              <div className={style.TrackDetailsTab}>
                <TabbedContent Track={selectedTrack} />
              </div>
              <div className={style.TrackDetailsLogAndReview}>
                <div className={style.TrackDetailsLog}>
                  <LogCardComponent track={selectedTrack} />
                </div>
                <div className={style.TrackDetailsReviewCounter}>
                  {/* <ReviewBarChart reviews={selectedTrack?.reviewCounter} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackProfile;
