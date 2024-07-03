// src/services/musicBrainzService.js
import axios from "axios";

const BASE_URL = "https://musicbrainz.org/ws/2/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

export const fetchArtistImage = async (artistName) => {
  try {
    const response = await api.get("artist", {
      params: {
        query: artistName,
        fmt: "json",
      },
    });

    const artist = response.data.artists[0];
    if (artist) {
      const mbid = artist.id;
      const releaseResponse = await api.get(`artist/${mbid}?inc=url-rels`);
      const relations = releaseResponse.data.relations;
      const imageUrlRelation = relations.find((rel) => rel.type === "image");

      return imageUrlRelation ? imageUrlRelation.url.resource : null;
    }
    return null;
  } catch (error) {
    console.error("Erro ao buscar imagem do artista:", error);
    throw error;
  }
};
