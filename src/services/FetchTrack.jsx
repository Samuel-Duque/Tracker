import axios from "axios";
import { getSpotifyToken } from "./GetSpotifyToken";

export const fetchTrack = async ({ musicURL }) => {
  const token = getSpotifyToken();
  try {
    console.log("URL", musicURL.musicURL);
    const response = await axios.get(
      "https://api.spotify.com/v1/tracks/4fv9mYzwI3Ww8Hsg33OZXD",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const songData = response.data;
    return songData;
  } catch (error) {
    console.log(error);
  }
};
