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
import { handleUserRating } from "../../services/handleDefaultRating";

const TrackCard = ({ track, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClickedTrack, setClickedTrack] = useState(false);
  const [isClickedLike, setClickedLike] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const { setSelectedTrack } = useContext(SelectedTrackContext);
  const { show, setShow } = useContext(ClickOutsideContext);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setIsVisible(false);
  }, [show]);

  useEffect(() => {
    const handleDefaultRating = async () => {
      const defaultRating = await handleUserRating("zythee", track?.id);
    };

    handleDefaultRating();
  }, []);

  return (
    <div className={style.cardContainer}>
      <div
        className={style.trackCover}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => {
          setIsVisible(false), setOverlayIsVisible(false);
        }}
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
          <div className={style.extraOverlay}>
            <div className={style.overlayOptions}>
              <button className={style.overlayOptionReview}>
                <Rating
                  value={rating}
                  setValue={setRating}
                  color={"#1A1B1E"}
                  size={16}
                  xsize={13}
                  left={"-16px"}
                  top={"2px"}
                />
              </button>
              <button
                onClick={() => {
                  setShow(true);
                  setSelectedTrack(track);
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
          src={track.album.images[0].url}
          alt=""
        />
      </div>
      <div className={style.trackInfo}>
        <span>{track?.name}</span>
        <div className={style.rating}>#{index}</div>
      </div>
    </div>
  );
};

export default TrackCard;
