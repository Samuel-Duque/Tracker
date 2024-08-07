import React, { useContext, useEffect, useState } from "react";
import style from "./ReviewsOverlay.module.css";
import { ClickOutsideContext } from "../../contexts/ClickOutsideContext";
import { SelectedTrackContext } from "../../contexts/SelectedTrackContext";
import CalendarUI from "../Calendar/Calendar";
import { handleLog } from "../../services/HandleLog";
import Rating from "../RatingStar/RatingStar";
import { DefaultRatingContext } from "../../contexts/DefaultRatingContext";

const ReviewsOverlay = () => {
  const { setShow } = useContext(ClickOutsideContext);
  const { selectedTrack } = useContext(SelectedTrackContext);
  const { defaultRatingData } = useContext(DefaultRatingContext);
  const [releaseDate, setReleaseDate] = useState(null);
  const [todayDate, setTodayDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [rating, setRating] = useState(defaultRatingData);
  const [review, setReview] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const today = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedTodayDate = today
      .toLocaleDateString("en-US", options)
      .replace(",", "");
    setTodayDate(formattedTodayDate);
    setSelectedDate(formattedTodayDate);
    if (selectedTrack?.album.release_date) {
      setReleaseDate(selectedTrack.album.release_date.split("-")[0]);
    }
    console.log("Selected: ", selectedTrack);
  }, [selectedTrack]);

  const handleCardClick = (event) => {
    event.stopPropagation();

    if (showCalendar) {
      setShowCalendar(false);
    }
  };

  const handleDateSelect = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .replace(",", "");
    setSelectedDate(formattedDate);
    setShowCalendar(false);
  };

  useEffect(() => {
    setSelectedDate(todayDate);
  }, [todayDate]);

  const handleReviewSubmit = async () => {
    const response = await handleLog(
      "zythee",
      selectedTrack,
      selectedDate,
      0,
      isChecked ? 1 : 0,
      rating,
      review
    );
    window.location.reload();

    console.log(response);
    setShow(false);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    if (!isChecked) {
      setSelectedDate("0");
    } else {
      setSelectedDate(todayDate);
    }
  }, [isChecked]);

  return (
    <div
      className={style.reviewContainer}
      onClick={() => {
        setShow(false);
      }}
    >
      <div className={style.reviewCard} onClick={handleCardClick}>
        <div className={style.coverInfo}>
          <div className={style.coverImageOptions}>
            <img
              className={style.coverImage}
              src={selectedTrack?.album?.images[1]?.url}
              alt=""
            />
          </div>
          <div className={style.reviewContent}>
            <div className={style.topInfo}>
              <div className={style.topTrackInfo}>
                <div className={style.trackHeroInfo}>
                  <div className={style.trackHeroTitle}>
                    <span className={style.TrackName}>
                      {selectedTrack?.name}
                    </span>
                    {selectedTrack?.explicit && (
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
                  <span className={style.heroReleaseYear}>
                    {selectedTrack.album.release_date.split("-")[0]}
                  </span>
                </div>
                <span className={style.trackArtistName}>
                  {selectedTrack?.album.artists[0].name}
                </span>
              </div>
              <div className={style.listenDate}>
                <input
                  className={style.checkbox}
                  type="checkbox"
                  name=""
                  id=""
                  onChange={handleCheckboxChange}
                  checked={isChecked}
                />
                {isChecked && (
                  <>
                    <span>Listened on</span>
                    <div
                      className={style.choseDate}
                      onClick={() => {
                        setShowCalendar(true);
                      }}
                    >
                      {isChecked == "0" && <span>{todayDate}</span>}
                      {isChecked != "0" && <span>{selectedDate}</span>}

                      {showCalendar && (
                        <div
                          className={style.calender}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <CalendarUI onChange={handleDateSelect} />
                        </div>
                      )}
                    </div>
                  </>
                )}
                {!isChecked && <span>Add track to your playlist?</span>}
              </div>
            </div>
            <div>
              <textarea
                className={style.textarea}
                name="reviewField"
                id="reviewField"
                placeholder="Add a review..."
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            <div className={style.reviewBtn}>
              <div className={style.rating}>
                <span>Rating</span>
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
              <button className={style.sendReview} onClick={handleReviewSubmit}>
                Send Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsOverlay;
