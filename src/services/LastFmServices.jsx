// // src/services/lastFmService.js
// import axios from "axios";

// const API_KEY = "3225eb353...";
// const BASE_URL = "http://ws.audioscrobbler.com/2.0/";

// const api = axios.create({
//   baseURL: BASE_URL,
//   params: {
//     api_key: API_KEY,
//     format: "json",
//   },
// });

// export const fetchTopArtists = async () => {
//   try {
//     const response = await api.get("", {
//       params: {
//         method: "chart.gettopartists",
//       },
//     });
//     return response.data.artists.artist.slice(0, 10);
//   } catch (error) {
//     console.error("Erro ao buscar top artistas:", error);
//     throw error;
//   }
// };

// export const fetchArtistInfo = async (artistName) => {
//   try {
//     const response = await api.get("", {
//       params: {
//         method: "artist.getinfo",
//         artist: artistName,
//       },
//     });
//     return response.data.artist;
//   } catch (error) {
//     console.error("Erro ao buscar informações do artista:", error);
//     throw error;
//   }
// };
