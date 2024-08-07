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
import Explicit from "../Explicit/Explicit";

const TrackCard = ({ track, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const { selectedTrack, setSelectedTrack } = useContext(SelectedTrackContext);
  const { show, setShow } = useContext(ClickOutsideContext);
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(0);
  const [listened, setListened] = useState(0);
  const { setDefaultRatingData, setDefaultLikedData, setDefaultListenedData } =
    useContext(DefaultRatingContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(false);
  }, [show]);

  useEffect(() => {
    const fetchDefaultRating = async () => {
      const defaultInfo = await handleDefaultRating("zythee", track?.id);
      setRating(defaultInfo?.rating);
      setLiked(defaultInfo?.liked);
      setListened(defaultInfo?.listened);
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
        track,
        0,
        liked,
        listened,
        rating,
        ""
      );
    };
    if (overlayIsVisible) {
      handleReviewSubmit();
    }
  }, [rating]);

  useEffect(() => {
    const handleReviewSubmit = async () => {
      console.log("Rating: ", rating, track?.name);
      setOverlayIsVisible(false);
      const response = await handleLog(
        "zythee",
        track,
        0,
        liked,
        listened,
        rating,
        ""
      );
    };

    if (isVisible) {
      handleReviewSubmit();
    }
  }, [liked, listened]);

  const handleTrackPage = () => {
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
                src={listened ? activetrackIcon : trackIcon}
                alt=""
                onClick={() => setListened(!listened)}
              />
              <img
                src={liked ? activelikeIcon : likeIcon}
                alt=""
                onClick={() => setLiked(!liked)}
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
                  setDefaultLikedData(liked);
                  setDefaultListenedData(listened);
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
          {track?.explicit && <Explicit />}
        </div>
        <div className={style.rating}>#{index}</div>
      </div>
    </div>
  );
};

export default TrackCard;
