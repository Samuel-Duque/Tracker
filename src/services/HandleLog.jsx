import React, { useContext } from "react";
import axios from "axios";

export const handleLog = async (
  timestamp,
  selectedTrack,
  selectedDate,
  rating,
  review
) => {
  try {
    const response = await axios.post(
      "https://trackerapi-8n4dl.ondigitalocean.app/logs/",
      {
        track_id: selectedTrack?.id,
        username: "ztyhee",
        date: timestamp,
        rating: rating,
        comment: review,
        selected_date: selectedDate,
      }
    );
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};
