import React from "react";
import style from "./LyricsTab.module.css";
const LyricsTab = ({ Track }) => {
  return (
    <div className={style.TabbedContentFixLyrics}>
      <div className={style.TabbedContentLyrics}>
        {Track.lyrics.split("\n").map((line, index) => (
          <>
            {line}
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default LyricsTab;
