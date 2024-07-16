import React, { useEffect, useState, useRef, useContext } from "react";
import style from "./SearchItem.module.css";
import plusIcon from "../../assets/icons/more-icon.svg";
import defaultImg from "../../assets/img/defautImage.png";
import TrendingCard from "../TrendingCard/TrendingCard";
import RatingReview from "../../assets/icons/RatingReview";
import { handleReview } from "../../services/HandleReview";
import likeIcon from "../../assets/icons/like-icon.svg";
import trackIcon from "../../assets/icons/track-icon.svg";
import activelikeIcon from "../../assets/icons/active-like-icon.svg";
import activetrackIcon from "../../assets/icons/active-track-icon.svg";
import threedotsIcon from "../../assets/icons/threedots-icon.svg";
import { ClickOutsideContext } from "../../contexts/ClickOutsideContext";
import { SelectedTrackContext } from "../../contexts/SelectedTrackContext";

const SearchItem = ({ music }) => {
  const [track, setTrack] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [rating, setRating] = useState(3.5);
  const [isVisible, setIsVisible] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const [isClickedTrack, setClickedTrack] = useState(false);
  const [isClickedLike, setClickedLike] = useState(false);
  const { setShow } = useContext(ClickOutsideContext);
  const { selectedTrack, setSelectedTrack } = useContext(SelectedTrackContext);
  useEffect(() => {
    setTrack(music);
    if (music?.album.release_date) {
      setReleaseDate(music.album.release_date.split("-")[0]);
    }
  }, [music]);

  return (
    <>
      <div className={style.SearchItemContainer}>
        <div
          className={style.CoverInfo}
          onMouseLeave={() => setOverlayIsVisible(false)}
        >
          <div className={style.CardOverlay}>
            <div
              className={style.trackCover}
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              {isVisible && (
                <div className={style.overlay}>
                  <div className={style.moreOptions}>
                    <img
                      src={isClickedTrack ? activetrackIcon : trackIcon}
                      alt=""
                      onClick={() => setClickedTrack(!isClickedTrack)}
                    />
                    <img
                      src={isClickedLike ? activelikeIcon : likeIcon}
                      alt=""
                      onClick={() => setClickedLike(!isClickedLike)}
                    />
                    <img
                      src={threedotsIcon}
                      alt=""
                      onClick={() => setOverlayIsVisible(true)}
                    />
                  </div>
                </div>
              )}
              {overlayIsVisible && (
                <div className={style.extraOverlay}>
                  <div className={style.overlayOptions}>
                    <button className={style.overlayOption}>
                      <RatingReview percentage={80} />
                    </button>
                    <button
                      onClick={() => {
                        setShow(true);
                        setSelectedTrack(music);
                        setOverlayIsVisible(false);
                      }}
                      className={style.overlayOption}
                    >
                      <span>Review or log</span>
                    </button>
                    <button className={style.overlayOption}>
                      <span>Add to lists</span>
                    </button>
                    <button className={style.overlayOption}>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              )}
              <img
                className={style.CoverImage}
                src={track?.album.images[0].url}
                alt=""
              />
            </div>
          </div>
          <div className={style.sideinfo}>
            <div className={style.topTrackInfo}>
              <div className={style.nameRelease}>
                <span className={style.trackName}>{track?.name}</span>
                <span className={style.trackReleaseDate}>{releaseDate}</span>
              </div>
              <div>
                <span className={style.trackArtistName}>
                  {track?.album.artists[0].name}
                </span>
              </div>
              <div className={style.rating}>
                <RatingReview percentage={rating * 20} />
                <span>{rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.trackInfo}>
          <div className={style.sideinfo}>
            <TrendingCard />
            <div className={style.friendsListened}>
              <span>Friends Listened</span>
              <img src={defaultImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
