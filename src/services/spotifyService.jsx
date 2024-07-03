// src/services/spotifyService.js
import axios from "axios";

const BASE_URL = "https://api.spotify.com/v1/";
const TOKEN_URL =
  "BQCRYh5wiqJikjAtrdBXynaEqX6IkJsRjMxbebLLNmzLtrZRXeOzOR-yH2OPqtRjnrR_UMid-PhJwXm9xfG-lj6_kHMabE1qimVYsVqBdhKu4DItBQCqOql_ZtGJmweI9quK2HgtAP3_ZcA5K5ZL3SwLapYA83cgD5-ErYys4JdVjCvxxPXmKpYfJSVJ4rMWiE5GXyL3jD_GG-LRGt7Y20gSXuEIWaNWZcsr9wbeVWcd-UX3aoXFcNLIfSoVxT45tvVWJJ2srTmbpPQynBolxcWAGTiLO_iO22weMh_Nf0Kg7vAXhlRmFVlmiESaNPyudoXiA5M";

const getToken = async () => {
  try {
    const response = await axios.get(TOKEN_URL);
    return response.data.accessToken;
  } catch (error) {
    console.error("Erro ao obter token:", error);
    throw error;
  }
};

export const fetchArtistImage = async (artistName) => {
  try {
    const token = import.meta.env.VITE_SPOTIFY_TOKEN;
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
    console.log(artist);
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