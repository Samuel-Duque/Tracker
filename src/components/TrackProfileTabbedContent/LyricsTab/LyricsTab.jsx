import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import style from "./LyricsTab.module.css";
import { fetchTrackLyrics } from "../../../services/FetchTrackLyrics";

const LyricsTab = ({ lyrics }) => {
  return (
    <div className={style.TabbedContentFixLyrics}>
      <span className={style.lyrics}>
        <ReactMarkdown breaks>{lyrics}</ReactMarkdown>
      </span>
    </div>
  );
};

export default LyricsTab;
