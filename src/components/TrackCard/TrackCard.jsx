import React, { useState, useContext, useEffect } from "react";
import style from "./TrackCard.module.css";
import songIcon from "../../assets/icons/song-icon.svg";
import likeIcon from "../../assets/icons/like-icon.svg";
import trackIcon from "../../assets/icons/track-icon.svg";
import activelikeIcon from "../../assets/icons/active-like-icon.svg";
import activetrackIcon from "../../assets/icons/active-track-icon.svg";
import threedotsIcon from "../../assets/icons/threedots-icon.svg";
import { SelectedTrackContext } from "../../contexts/SelectedTrackContext";
import { ClickOutsideContext } from "../../contexts/ClickOutsideContext";
import Rating from "../RatingStar/RatingStar";
import { handleDefaultRating } from "../../services/HandleDefaultRating";
import { DefaultRatingContext } from "../../contexts/DefaultRatingContext";
import { handleLog } from "../../services/HandleLog";
import { useNavigate } from "react-router-dom";

const TrackCard = ({ track, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClickedTrack, setClickedTrack] = useState(false);
  const [isClickedLike, setClickedLike] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const { selectedTrack, setSelectedTrack } = useContext(SelectedTrackContext);
  const { show, setShow } = useContext(ClickOutsideContext);
  const [rating, setRating] = useState(0);
  const { setDefaultRatingData } = useContext(DefaultRatingContext);
  const [todayDate, setTodayDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedTodayDate = today
      .toLocaleDateString("en-US", options)
      .replace(",", "");
    setTodayDate(formattedTodayDate);
  }, []);

  useEffect(() => {
    setIsVisible(false);
  }, [show]);

  useEffect(() => {
    const fetchDefaultRating = async () => {
      const defaultRating = await handleDefaultRating("zythee", track?.id);
      setRating(defaultRating);
    };
    if (track) {
      fetchDefaultRating();
    }
  }, [track]);

  useEffect(() => {
    const handleReviewSubmit = async () => {
      console.log("Rating: ", rating, track?.name);
      setOverlayIsVisible(false);
      const response = await handleLog(
        "zythee",
        todayDate,
        track,
        0,
        rating,
        ""
      );
    };
    if (overlayIsVisible) {
      handleReviewSubmit();
    }
  }, [rating]);

  const handleTrackPage = () => {
    console.warn("Clicado - ", track?.id);
    navigate(null);
    navigate(`/track/${track?.id}`);
  };
  return (
    <div className={style.cardContainer} onClick={handleTrackPage}>
      <div
        className={style.trackCover}
        onMouseEnter={() => {
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsVisible(false), setOverlayIsVisible(false);
        }}
      >
        {isVisible && (
          <div className={style.overlay} onClick={(e) => e.stopPropagation()}>
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
                onClick={() => {
                  {
                    setSelectedTrack(track), setOverlayIsVisible(true);
                  }
                }}
              />
            </div>
            {!overlayIsVisible && (
              <div className={style.overlayTagname}>
                <span>{track?.name}</span>
                <span style={{ fontSize: "12px" }}>
                  {track.artists[0].name}
                </span>
              </div>
            )}
          </div>
        )}
        {overlayIsVisible && (
          <div
            className={style.extraOverlay}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={style.overlayOptions}>
              <div className={style.overlayOptionReview}>
                <Rating
                  track={track}
                  value={rating}
                  setValue={setRating}
                  color={"#1A1B1E"}
                  size={16}
                  xsize={13}
                  left={"-16px"}
                  top={"2px"}
                />
              </div>
              <button
                onClick={() => {
                  setShow(true);
                  setDefaultRatingData(rating);
                  setOverlayIsVisible(false);
                  setIsVisible(false);
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
        <div className={`${!isVisible ? style.trackType : style.trackTypeOff}`}>
          <img src={songIcon} alt="" />
        </div>
        <img
          className={style.coverImage}
          src={track.album.images[1].url}
          alt=""
        />
      </div>
      <div className={style.trackInfo}>
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
        <div className={style.rating}>#{index}</div>
      </div>
    </div>
  );
};

export default TrackCard;
