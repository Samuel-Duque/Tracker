import axios from "axios";

export const handleDefaultRating = async (user, trackid) => {
  const { data: logs } = await axios.get(
    `https://trackerapi-8n4dl.ondigitalocean.app/logs/user/${user}/${trackid}`
  );

  if (logs.length === 0) {
    return 0;
  }

  const { rating: defaultRating } = logs[logs.length - 1];
  const { liked: defaultLiked } = logs[logs.length - 1];
  const { listened: defaultViewed } = logs[logs.length - 1];

  return {
    rating: defaultRating,
    liked: defaultLiked,
    listened: defaultViewed,
  };
};
