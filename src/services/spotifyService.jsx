// src/services/spotifyService.js
import axios from "axios";
const BASE_URL = "https://api.spotify.com/v1/";

const getSpotifyToken = async () => {
  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const authString = `${client_id}:${client_secret}`;
  const base64AuthString = btoa(authString);

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
    return data.access_token;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const fetchArtistImage = async (artistName) => {
  try {
    const token = await getSpotifyToken();
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        type: "track",
        q: artistName,
        decorate_restrictions: "false",
        best_match: "true",
        include_external: "audio",
        limit: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const artist = response.data.tracks.items[0];
    if (artist && artist.album.images.length > 0) {
      return artist.album.images[0].url;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar imagem do artista:", error);
    throw error;
  }
};
