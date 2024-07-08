import axios from "axios";
export const getSpotifyToken = async () => {
  const response = await axios.get(
    "https://tracker-api-production-9679.up.railway.app/spotifydata"
  );
  const spotifyData = response.data[0];

  const client_id = spotifyData.SPOTIFY_CLIENT_ID;
  const client_secret = spotifyData.SPOTIFY_CLIENT_SECRET;
  const authString = `${client_id}:${client_secret}`;
  const base64AuthString = btoa(authString);
  console.log(spotifyData);
  console.log(client_id, client_secret, authString, base64AuthString);

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${base64AuthString}`,
      },
      body: "grant_type=client_credentials",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.access_token);
    return data.access_token;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
