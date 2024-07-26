import axios from "axios";

export const handleUserRating = async (user, trackid) => {
  console.log(trackid);
  const { data: logs } = axios.get(
    `https://trackerapi-8n4dl.ondigitalocean.app/logs/user/${user}/${trackid}`
  );

  logs.forEach((currentTrack) => {
    if (currentTrack?.id == trackid) {
      console.log("Achado");
    }
  });
};
