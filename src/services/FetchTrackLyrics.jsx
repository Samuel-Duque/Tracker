import axios from "axios";

const apiKey = import.meta.env.VITE_MUSIXMATCH_API_KEY;

export const fetchTrackLyrics = async (artist, trackname) => {
  console.log("Artist:", artist);
  console.log("Trackname:", trackname);

  if (!artist || !trackname) {
    console.error("Artist or trackname is undefined");
    return "";
  }

  try {
    const {
      data: { lyrics },
    } = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${trackname}`);

    // Remover qualquer texto antes do primeiro \r\n
    const cleanedLyrics = lyrics.includes("\r\n")
      ? lyrics.split("\r\n").slice(1).join("\r\n")
      : lyrics;
    return cleanedLyrics;
  } catch (e) {
    console.error(e);
    return `We don't know how to sing ${trackname} yet...`;
  }
};
