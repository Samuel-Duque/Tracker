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
import { useNavigate } from "react-router-dom";
import Rating from "../RatingStar/RatingStar";
import { handleDefaultRating } from "../../services/HandleDefaultRating";
import { DefaultRatingContext } from "../../contexts/DefaultRatingContext";
import { handleLog } from "../../services/HandleLog";
import Explicit from "../Explicit/Explicit";

const SearchItem = ({ music }) => {
  const [track, setTrack] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(0);
  const [listened, setListened] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const [isClickedTrack, setClickedTrack] = useState(false);
  const [isClickedLike, setClickedLike] = useState(false);
  const { setShow } = useContext(ClickOutsideContext);
  const { setSelectedTrack } = useContext(SelectedTrackContext);
  const { setDefaultRatingData, setDefaultLikedData, setDefaultListenedData } =
    useContext(DefaultRatingContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTrack(music);
    if (music?.album.release_date) {
      setReleaseDate(music.album.release_date.split("-")[0]);
    }
  }, [music]);

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

  const handleTrackPage = () => {
    navigate(`/track/${music?.id}`);
  };

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

  return (
    <>
      <div
        className={style.SearchItemContainer}
        onClick={() => {
          handleTrackPage();
        }}
      >
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
                <div
                  className={style.overlay}
                  onClick={(e) => e.stopPropagation()}
                >
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
                </div>
              )}
              {overlayIsVisible && (
                <div
                  className={style.extraOverlay}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={style.overlayOptions}>
                    <div className={style.overlayOption}>
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
                        setSelectedTrack(music);
                        setOverlayIsVisible(false);

                        setDefaultRatingData(rating);
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
              <div className={style.trackHeroInfo}>
                <div className={style.trackHeroTitle}>
                  <span className={style.TrackName}>{track?.name}</span>
                  {track?.explicit && <Explicit />}
                </div>
                <span className={style.heroReleaseYear}>
                  {track?.album?.release_date?.split("-")[0]}
                </span>
              </div>
              <div>
                <span className={style.trackArtistName}>
                  {track?.album.artists[0].name}
                </span>
              </div>
              <div className={style.rating}>
                <RatingReview percentage={80} />
                <span>{3.5}</span>
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
