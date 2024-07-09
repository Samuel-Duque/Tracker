import axios from "axios";
import { getSpotifyToken } from "./GetSpotifyToken";

export const fetchTrack = async ({ musicURL }) => {
  const token = getSpotifyToken();
  try {
    console.log("URL", musicURL.musicURL);
    const response = await axios.get(musicURL.musicURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const songData = response.data;
    console.log("Track:", songData);
    return songData;
  } catch (error) {
    console.log(error);
  }
};
