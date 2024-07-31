import React, { useContext } from "react";
import axios from "axios";

export const handleLog = async (
  user,
  selectedTrack,
  selectedDate,
  liked,
  listened,
  rating,
  review
) => {
  let todayDate;
  const today = new Date();
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedTodayDate = today
    .toLocaleDateString("en-US", options)
    .replace(",", "");
  todayDate = formattedTodayDate;

  console.log(todayDate);
  console.log("Liked:", liked);
  console.log("Listened:", listened);
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
      await axios.post("https://trackerapi-8n4dl.ondigitalocean.app/logs/", {
        track_id: selectedTrack?.id,
        username: "zythee",
        date: todayDate,
        rating: rating,
        comment: review,
        selected_date: selectedDate,
        liked: liked ? 1 : 0,
        listened: listened ? 1 : 0,
      });
    } else {
      console.log("Short review: ", lastLog);
      if (
        lastLog?.selected_date == 0 &&
        lastLog?.track_id == selectedTrack?.id
      ) {
        console.log("Short review update: ", lastLog);

        const response = await axios.put(
          `https://trackerapi-8n4dl.ondigitalocean.app/logs/${lastLog?.id}`,
          {
            track_id: lastLog?.track_id,
            username: lastLog?.username,
            date: todayDate,
            rating: rating,
            comment: lastLog?.comment,
            selected_date: lastLog?.selected_date,
            liked: liked ? 1 : 0,
            listened: listened ? 1 : 0,
          }
        );
        console.log(response);
      } else {
        console.log("Short review create: ", lastLog);
        console.log(liked);
        console.log(listened);

        const response = await axios.post(
          "https://trackerapi-8n4dl.ondigitalocean.app/logs/",
          {
            track_id: selectedTrack?.id,
            username: "zythee",
            date: todayDate,
            rating: rating,
            comment: review,
            selected_date: 0,
            liked: liked ? 1 : 0,
            listened: listened ? 1 : 0,
          }
        );
        console.log(response);
      }
    }
  } catch (e) {
    console.error(e);
  }
};
