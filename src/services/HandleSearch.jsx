import axios from "axios";
import { getSpotifyToken } from "./GetSpotifyToken";

export const HandleSearch = async () => {
  const token = await getSpotifyToken();
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?query=espresso&type=track&locale=pt-BR%2Cpt%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const searchSongs = response.data.tracks.items;
    console.log(searchSongs);
    return searchSongs;
  } catch (error) {
    console.error("Error fetching top tracks:", error);
  }
};
