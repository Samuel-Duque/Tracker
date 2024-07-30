import React, { useEffect, useState } from "react";
import style from "./TrackProfileTabbedContent.module.css";
import LyricsTab from "./LyricsTab/LyricsTab";
const TrackProfileTabbedContent = ({ track }) => {
  const [activeTab, setActiveTab] = useState("Lyrics");

  const renderContent = () => {
    switch (activeTab) {
      case "Lyrics":
        return <LyricsTab track={track} />;
      case "Statistics":
        return <div>Statistics</div>;
      case "Badges":
        return <div>Badges</div>;
      case "About":
        return <div>About</div>;
      default:
        return <LyricsTab track={track} />;
    }
  };
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
        <div className={style.tabbedContentBody}>{renderContent()}</div>
      </div>
    </>
  );
};

export default TrackProfileTabbedContent;
