import axios from "axios";
import { getSpotifyToken } from "./GetSpotifyToken";
const BASE_URL = "https://api.spotify.com/v1/";

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
