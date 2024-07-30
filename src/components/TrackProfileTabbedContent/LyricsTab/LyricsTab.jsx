import React from "react";
import style from "./LyricsTab.module.css";
const LyricsTab = ({ track }) => {
  return (
    <div className={style.TabbedContentFixLyrics}>
      <div className={style.TabbedContentLyrics}>
        {/* {Track.lyrics.split("\n").map((line, index) => (
          <div key={index}>
            {line}
            <br />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default LyricsTab;
