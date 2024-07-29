import React, { useContext } from "react";
import axios from "axios";

export const handleLog = async (
  user,
  timestamp,
  selectedTrack,
  selectedDate,
  rating,
  review
) => {
  console.log("Rating: ", rating);
  try {
    const { data: musicAlreadyAdded } = await axios.get(
      `https://trackerapi-8n4dl.ondigitalocean.app/tracks/${selectedTrack?.id}`
    );

    if (musicAlreadyAdded == 0) {
      await axios.post("https://trackerapi-8n4dl.ondigitalocean.app/tracks/", {
        track_id: selectedTrack?.id,
        track_name: selectedTrack?.name,
        rating: "0",
        total_reviews: "0",
      });
    }
    const { data: logAlreadyAdded } = await axios.get(
      "https://trackerapi-8n4dl.ondigitalocean.app/logs"
    );

    const lastLog = logAlreadyAdded[logAlreadyAdded.length - 1];
    if (selectedDate) {
      console.log("Long review");
      const response = await axios.post(
        "https://trackerapi-8n4dl.ondigitalocean.app/logs/",
        {
          track_id: selectedTrack?.id,
          username: "zythee",
          date: timestamp,
          rating: rating,
          comment: review,
          selected_date: selectedDate,
          liked: 0,
          listened: 0,
        }
      );
      console.log(response);
    } else {
      console.log("Short review: ", lastLog);
      if (lastLog?.selected_date == 0) {
        const response = await axios.put(
          `https://trackerapi-8n4dl.ondigitalocean.app/logs/${lastLog?.id}`,
          {
            track_id: lastLog?.track_id,
            username: lastLog?.username,
            date: timestamp,
            rating: rating,
            comment: lastLog?.comment,
            selected_date: lastLog?.selected_date,
            liked: 0,
            listened: 0,
          }
        );
        console.log(response);
      } else {
        const response = await axios.post(
          "https://trackerapi-8n4dl.ondigitalocean.app/logs/",
          {
            track_id: selectedTrack?.id,
            username: "zythee",
            date: timestamp,
            rating: rating,
            comment: review,
            selected_date: 0,
            liked: 0,
            listened: 0,
          }
        );
        console.log(response);
      }
    }
  } catch (e) {
    console.error(e);
  }
};
