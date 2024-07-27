import React, { useContext, useEffect, useState } from "react";
import style from "./HomeCards.module.css";
import TrackCard from "../TrackCard/TrackCard";
import Title from "../Title/Title";
import TrackCardTracked from "../TrackCardReview/TrackCardReview";
import { handleTopTracks } from "../../services/HandleTopTracks";
import LoadingTrackCard from "../LoadingTrackCard/LoadingTrackCard";
import { ClickOutsideContext } from "../../contexts/ClickOutsideContext";
import ReviewsOverlay from "../Reviews/ReviewsOverlay";
import { SelectedTrackContext } from "../../contexts/SelectedTrackContext";
import { handleDefaultRating } from "../../services/HandleDefaultRating";

const HomeCards = () => {
  const [topSongs, setTopSongs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { show } = useContext(ClickOutsideContext);
  const { selectedTrack } = useContext(SelectedTrackContext);
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
              <TrackCardTracked
                key={index}
                trackName={item.track.name}
                trackArtist={item.track.artists[0].name}
                trackImage={item.track.album.images[0].url}
              />
            ))}
        </div>
      </div>
      <div>{show && <ReviewsOverlay defaultRating={defaultRating} />}</div>
    </div>
  );
};

export default HomeCards;
