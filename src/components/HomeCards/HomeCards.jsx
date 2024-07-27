import React, { useContext, useEffect, useState } from "react";
import style from "./HomeCards.module.css";
import TrackCard from "../TrackCard/TrackCard";
import Title from "../Title/Title";
import TrackCardTracked from "../TrackCardReview/TrackCardReview";
import { handleTopTracks } from "../../services/HandleTopTracks";
import LoadingTrackCard from "../LoadingTrackCard/LoadingTrackCard";
import { ClickOutsideContext } from "../../contexts/ClickOutsideContext";
import ReviewsOverlay from "../Reviews/ReviewsOverlay";

const HomeCards = () => {
  const [topSongs, setTopSongs] = useState(null);
  const { show } = useContext(ClickOutsideContext);
  const [defaultRating, setDefaultRating] = useState(0);

  useEffect(() => {
    const getTopTracks = async () => {
      const result = await handleTopTracks();
      result ? setTopSongs(result.response) : console.log(result);
    };
    getTopTracks();
  }, []);

  return (
    <div className={style.homeCards}>
      <div className={style.cards}>
        <Title title={"Trending"} />
        <div className={style.trackCards}>
          {topSongs ? null : <LoadingTrackCard />}
          {topSongs &&
            topSongs.map((item, index) => (
              <TrackCard key={index} track={item.track} index={index + 1} />
            ))}
        </div>
      </div>
      <div className={style.cards}>
        <Title title={"New from friends"} more={true} />
        <div className={style.trackCards}>
          {topSongs ? null : <LoadingTrackCard />}
          {topSongs &&
            topSongs.map((item, index) => (
              <TrackCardTracked key={index} track={item.track} />
            ))}
        </div>
      </div>
      <div>{show && <ReviewsOverlay defaultRating={defaultRating} />}</div>
    </div>
  );
};

export default HomeCards;
