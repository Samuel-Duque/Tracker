import style from "./LogCardComponent.module.css";
import likeIcon from "../../assets/icons/like-icon.svg";
import trackIcon from "../../assets/icons/track-icon.svg";
import addToPlaylistIcon from "../../assets/icons/add-to-playlist-icon.svg";
import activelikeIcon from "../../assets/icons/active-like-icon.svg";
import activetrackIcon from "../../assets/icons/active-track-icon.svg";
import activeplaylistIcon from "../../assets/icons/active-add-to-playlist-icon.svg";
import React, { useContext, useEffect, useState } from "react";
import Rating from "../RatingStar/RatingStar";
import { DefaultRatingContext } from "../../contexts/DefaultRatingContext";
import ReviewsOverlay from "../Reviews/ReviewsOverlay";
import { SelectedTrackContext } from "../../contexts/SelectedTrackContext";
import { ClickOutsideContext } from "../../contexts/ClickOutsideContext";
const LogCardComponent = ({ track, index }) => {
  const { defaultRatingData } = useContext(DefaultRatingContext);
  const [rating, setRating] = useState(defaultRatingData);
  const [isClickedTrack, setClickedTrack] = useState(false);
  const [isClickedLike, setClickedLike] = useState(false);
  const [isClickedPlaylist, setClickedPlaylist] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const { selectedTrack, setSelectedTrack } = useContext(SelectedTrackContext);
  const [isVisible, setIsVisible] = useState(false);
  const { show, setShow } = useContext(ClickOutsideContext);
  const { setDefaultRatingData } = useContext(DefaultRatingContext);
  const [todayDate, setTodayDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedTodayDate = today
      .toLocaleDateString("en-US", options)
      .replace(",", "");
    setTodayDate(formattedTodayDate);
    console.log(todayDate);
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
      const response = await handleLog(
        "zythee",
        todayDate,
        track,
        0,
        rating,
        ""
      );
      setOverlayIsVisible(false);
    };
    if (overlayIsVisible) {
      handleReviewSubmit();
    }
  }, [rating]);
  return (
    <>
      <div className={style.mainComponent}>
        <div className={style.threeIcons}>
          <img
            src={isClickedTrack ? activetrackIcon : trackIcon}
            alt="Track Icon"
            onClick={() => setClickedTrack(!isClickedTrack)}
          />
          <img
            src={isClickedLike ? activelikeIcon : likeIcon}
            alt="Like button"
            onClick={() => setClickedLike(!isClickedLike)}
          />
          <img
            src={isClickedPlaylist ? activeplaylistIcon : addToPlaylistIcon}
            alt="Add to playlist"
            onClick={() => setClickedPlaylist(!isClickedPlaylist)}
          />
        </div>
        <div className={style.rating}>
          <Rating
            value={rating}
            setValue={setRating}
            color={"#1A1B1E"}
            size={24}
            xsize={16}
            left={"-20px"}
            top={"5px"}
            defaultRating={rating}
          />
        </div>
        <div className={style.reviewOrLog}>
          <span
            onClick={() => {
              setSelectedTrack(track), setOverlayIsVisible(true), setShow(true);
            }}
          >
            Review or Log
          </span>
        </div>
        <div className={style.addToLists}>Add to lists</div>
        <div className={style.share}>Share</div>
      </div>
      {overlayIsVisible && <ReviewsOverlay track={track} ClickOutsideContext />}
    </>
  );
};

export default LogCardComponent;
