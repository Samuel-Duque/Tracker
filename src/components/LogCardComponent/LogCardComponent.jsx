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
import { handleLog } from "../../services/HandleLog";
import { handleDefaultRating } from "../../services/HandleDefaultRating";
import { UserLoggedContext } from "../../contexts/UserLoggedContext";

const LogCardComponent = ({ track }) => {
  const { userLogged } = useContext(UserLoggedContext);

  const { selectedTrack, setSelectedTrack } = useContext(SelectedTrackContext);
  const {
    defaultRatingData,
    setDefaultRatingData,
    defaultLikedData,
    setDefaultLikedData,
    defaultListenedData,
    setDefaultListenedData,
  } = useContext(DefaultRatingContext);

  const [rating, setRating] = useState(defaultRatingData);
  const [liked, setLiked] = useState(defaultLikedData);
  const [listened, setListened] = useState(defaultListenedData);
  const [isClickedTrack, setClickedTrack] = useState(false);
  const [isClickedLike, setClickedLike] = useState(false);
  const [isClickedPlaylist, setClickedPlaylist] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { show, setShow } = useContext(ClickOutsideContext);
  const [countRating, setCountRating] = useState(0);
  const [countLiked, setCountLiked] = useState(0);

  useEffect(() => {
    setIsVisible(false);
  }, [show]);

  useEffect(() => {
    const fetchDefaultRating = async () => {
      const defaultInfo = await handleDefaultRating(
        userLogged?.username,
        track?.id
      );
      setRating(defaultInfo?.rating);
      setLiked(defaultInfo?.liked);
      setListened(defaultInfo?.listened);
    };
    if (track) {
      fetchDefaultRating();
    }
  }, [track]);

  useEffect(() => {
    console.log("Rating: ", rating, countRating);
    setCountRating(countRating + 1);

    const handleReviewSubmit = async () => {
      const response = await handleLog(
        userLogged?.username,
        track,
        0,
        liked,
        listened,
        rating,
        ""
      );
      setDefaultRatingData(rating);
    };
    countRating > 1 && handleReviewSubmit();
  }, [rating]);

  useEffect(() => {
    setCountLiked(countLiked + 1);

    console.log("liked", liked, countLiked);
    console.log("listened", listened, countLiked);
    const handleReviewSubmit = async () => {
      console.log("Rating: ", rating, track?.name);
      setOverlayIsVisible(false);
      const response = await handleLog(
        userLogged?.username,
        track,
        0,
        liked,
        listened,
        rating,
        ""
      );
    };
    countLiked > 1 && handleReviewSubmit();
  }, [liked, listened]);

  return (
    <>
      <div className={style.mainComponent}>
        <div className={style.threeIcons}>
          <img
            src={listened ? activetrackIcon : trackIcon}
            alt="Track Icon"
            onClick={() => setListened(!listened)}
          />
          <img
            src={liked ? activelikeIcon : likeIcon}
            alt="Like button"
            onClick={() => setLiked(!liked)}
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
        <div
          className={style.reviewOrLog}
          onClick={() => {
            console.log("Clicado"),
              setSelectedTrack(track),
              setOverlayIsVisible(false),
              setShow(true),
              setDefaultRatingData(rating),
              setDefaultLikedData(liked),
              setDefaultListenedData(listened);
          }}
        >
          <span>Review or Log</span>
        </div>
        <div className={style.addToLists}>Add to lists</div>
        <div className={style.share}>Share</div>
      </div>
      {show && <ReviewsOverlay />}
    </>
  );
};

export default LogCardComponent;
