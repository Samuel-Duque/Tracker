import React from "react";
import axios from "axios";
import { getSpotifyToken } from "./GetSpotifyToken";

export const handleTopTracks = async () => {
  const token = await getSpotifyToken();
  try {
    console.log("token top:", token);
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=10`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const topSongs = response.data.items.slice(0, 5);
    return { result: true, response: topSongs };
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return { result: false, response: null };
  }
};
