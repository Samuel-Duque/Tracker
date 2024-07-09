import axios from "axios";

export const getSpotifyToken = async () => {
  try {
    const response = await axios.get(
      "https://tracker-api-production-9679.up.railway.app/spotifydata"
    );
    const spotifyData = response.data[0];

    const client_id = spotifyData.SPOTIFY_CLIENT_ID;
    const client_secret = spotifyData.SPOTIFY_CLIENT_SECRET;
    const authString = `${client_id}:${client_secret}`;
    const base64AuthString = btoa(authString);

    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=10`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${spotifyData.SPOTIFY_TOKEN}`,
          },
        }
      );
      if (!res.data) {
        console.log("Here");
        throw new Error("Token inválido ou expirado.");
      } else {
        console.info("Token still active: ", spotifyData.SPOTIFY_TOKEN);
        return spotifyData.SPOTIFY_TOKEN;
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const newTokenResponse = await fetch(
          "https://accounts.spotify.com/api/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${base64AuthString}`,
            },
            body: "grant_type=client_credentials",
          }
        );
        if (!newTokenResponse.ok) {
          throw new Error(`HTTP error! status: ${newTokenResponse.status}`);
        }
        const data = await newTokenResponse.json();
        const newToken = data.access_token;
        console.log(newToken);
        await axios.put(
          "https://tracker-api-production-9679.up.railway.app/spotifydata/1",
          JSON.stringify({
            LAST_FM_API_KEY: spotifyData.LAST_FM_API_KEY,
            SPOTIFY_CLIENT_ID: spotifyData.SPOTIFY_CLIENT_ID,
            SPOTIFY_CLIENT_SECRET: spotifyData.SPOTIFY_CLIENT_SECRET,
            SPOTIFY_TOKEN: newToken,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return newToken;
      } else {
        throw error;
      }
    }
  } catch (e) {
    console.error("Error fetching or refreshing the Spotify token: ", e);
    throw e;
  }
};
