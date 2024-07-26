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
  try {
    const { data: musicAlreadyAdded } = await axios.get(
      `https://trackerapi-8n4dl.ondigitalocean.app/tracks/${selectedTrack?.id}`
    );

    console.log("musicAdded: ", musicAlreadyAdded.length);

    if (musicAlreadyAdded == 0) {
      await axios.post("https://trackerapi-8n4dl.ondigitalocean.app/tracks/", {
        track_id: selectedTrack?.id,
        track_name: selectedTrack?.name,
        rating: "0",
        total_reviews: "0",
      });
    }
    const response = await axios.post(
      "https://trackerapi-8n4dl.ondigitalocean.app/logs/",
      {
        track_id: selectedTrack?.id,
        username: "zythee",
        date: timestamp,
        rating: rating,
        comment: review,
        selected_date: selectedDate,
      }
    );

    const { data: trackAdded } = await axios.get(
      `https://trackerapi-8n4dl.ondigitalocean.app/logs/user/${user}/${selectedTrack}`
    );
    if (trackAdded.length < 1) {
      await axios.post(
        "https://trackerapi-8n4dl.ondigitalocean.app/logs/user",
        {
          username: user,
          trackname: selectedTrack?.name,
          trackid: selectedTrack?.id,
          rating: 0.0,
          listened: 1,
          liked: 0,
        }
      );
    }
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};
