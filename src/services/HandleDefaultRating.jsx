import axios from "axios";

export const handleDefaultRating = async (user, trackid) => {
  console.log("trackid: ", trackid);

  const { data: logs } = await axios.get(
    `https://trackerapi-8n4dl.ondigitalocean.app/logs/user/${user}/${trackid}`
  );

  if (logs.length === 0) {
    return 0;
  }

  const { rating: defaultRating } = logs[logs.length - 1];

  return defaultRating;
};
