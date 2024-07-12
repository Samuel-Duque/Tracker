import axios from "axios";

export const handleReview = async (songID) => {
  try {
    console.log("Songid: ", songID);
    const response = await axios.get(
      `https://trackerapi-8n4dl.ondigitalocean.app/tracks/${songID}`
    );

    const track = response.data;
    console.log("Track: ", track.length);

    if (track.length < 1) {
      console.warn("Track not found. Creating a new one.");
      await axios
        .post("https://trackerapi-8n4dl.ondigitalocean.app/tracks", {
          track_url: songID,
          rating: "0.0",
          total_reviews: "0",
        })
        .then((postResponse) => {
          console.log("Track created successfully:", postResponse);
        })
        .catch((error) => {
          console.error("Error creating track:", error);
        });
    } else {
      console.warn("Track found.");
    }
  } catch (e) {
    console.error("Cannot handleReview: ", e);
  }
};
