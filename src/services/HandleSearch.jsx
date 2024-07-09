import axios from "axios";
import { getSpotifyToken } from "./GetSpotifyToken";

export const HandleSearch = async (trackQuery) => {
  const token = await getSpotifyToken();
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=track&q=${trackQuery}&decorate_restrictions=false&best_match=true&include_external=audio&limit=10`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const searchSongs = response.data.tracks.items;
    return searchSongs;
  } catch (error) {
    console.error("Error fetching top tracks:", error);
  }
};
