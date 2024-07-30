import React, { useEffect, useState } from "react";
import style from "./TrackProfileTabbedContent.module.css";
import LyricsTab from "./LyricsTab/LyricsTab";
import { fetchTrackLyrics } from "../../services/FetchTrackLyrics";
const TrackProfileTabbedContent = ({ track }) => {
  const [activeTab, setActiveTab] = useState("Lyrics");
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
    <>
      <div className={style.tabbedContent}>
        <div className={style.tabbedContentHeader}>
          <button
            className={activeTab === "Lyrics" ? style.active : ""}
            onClick={() => setActiveTab("Lyrics")}
          >
            Lyrics
          </button>
          <button
            className={activeTab === "Statistics" ? style.active : ""}
            onClick={() => setActiveTab("Statistics")}
          >
            Statistics
          </button>
          <button
            className={activeTab === "Badges" ? style.active : ""}
            onClick={() => setActiveTab("Badges")}
          >
            Badges
          </button>
          <button
            className={activeTab === "About" ? style.active : ""}
            onClick={() => setActiveTab("About")}
          >
            About
          </button>
        </div>

        {activeTab == "Lyrics" && <LyricsTab lyrics={lyrics} />}
      </div>
    </>
  );
};

export default TrackProfileTabbedContent;
