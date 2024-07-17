import React, { useContext, useEffect, useState } from "react";
import style from "./ReviewsOverlay.module.css";
import { ClickOutsideContext } from "../../contexts/ClickOutsideContext";
import { SelectedTrackContext } from "../../contexts/SelectedTrackContext";
import CalendarUI from "../Calendar/Calendar";
import { handleLog } from "../../services/HandleLog";

const ReviewsOverlay = () => {
  const { setShow } = useContext(ClickOutsideContext);
  const { selectedTrack } = useContext(SelectedTrackContext);
  const [releaseDate, setReleaseDate] = useState(null);
  const [todayDate, setTodayDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
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
    console.log(selectedDate);
  }, [selectedDate]);

  const handleReviewSubmit = async () => {
    const response = await handleLog(
      todayDate,
      selectedTrack,
      selectedDate,
      rating,
      review
    );
  };

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
              src={selectedTrack?.album?.images[0]?.url}
              alt=""
            />
          </div>
          <div className={style.reviewContent}>
            <div className={style.topInfo}>
              <div className={style.topTrackInfo}>
                <div className={style.nameRelease}>
                  <span className={style.trackName}>{selectedTrack?.name}</span>
                  <span className={style.trackReleaseDate}>{releaseDate}</span>
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
                />
                <span>Listened on</span>
                <div
                  className={style.choseDate}
                  onClick={() => {
                    setShowCalendar(true);
                  }}
                >
                  <span>{selectedDate}</span>
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
              <button onClick={handleReviewSubmit}>Send Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsOverlay;
