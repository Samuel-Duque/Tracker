import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import style from "./LyricsTab.module.css";
import { fetchTrackLyrics } from "../../../services/FetchTrackLyrics";

const LyricsTab = ({ track }) => {
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    console.log(track);
    const fetchLyrics = async () => {
      const lyrics = await fetchTrackLyrics(
        track?.artists[0]?.name,
        track?.name
      );
      setLyrics(lyrics);
    };
    fetchLyrics();
  }, [track]);

  return (
    <div className={style.TabbedContentFixLyrics}>
      <span className={style.lyrics}>
        <ReactMarkdown breaks>{lyrics}</ReactMarkdown>
      </span>
    </div>
  );
};

export default LyricsTab;
