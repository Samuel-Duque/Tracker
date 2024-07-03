import React from "react";
import axios from "axios";

export const handleTopTracks = async () => {
  const apiKey = import.meta.env.VITE_LAST_FM_API_KEY;
  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=${apiKey}&format=json`
    );
    const topSongs = response.data.tracks.track.slice(0, 5);
    return { result: true, response: topSongs };
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return { result: false, response: null };
  }
};
