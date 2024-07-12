import axios from "axios";

export const handleReview = async (songID) => {
  try {
    const response = await axios.get(
      `https://trackerapi-8n4dl.ondigitalocean.app/tracks/${songID}`
    );

    const track = response.data;

    if (track.length < 1) {
      await axios
        .post("https://trackerapi-8n4dl.ondigitalocean.app/tracks", {
          track_url: songID,
          rating: "0.0",
          total_reviews: "0",
        })
        .catch((error) => {
          console.error("Error creating track:", error);
        });
    }
  } catch (e) {
    console.error("Cannot handleReview: ", e);
  }
};
