import axios from "axios";
import { getSpotifyToken } from "./GetSpotifyToken";

export const fetchTrack = async (trackid) => {
  const token = await getSpotifyToken();
  try {
    const { data: track } = await axios.get(
      `https://api.spotify.com/v1/tracks/${trackid}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return track;
  } catch (error) {
    console.log(error);
  }
};
