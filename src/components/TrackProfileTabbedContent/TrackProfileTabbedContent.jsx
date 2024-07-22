import React, { useState } from "react";
import style from "./TrackProfileTabbedContent.module.css";
const TrackProfileTabbedContent = () => {
  const [activeTab, setActiveTab] = useState("Lyrics");

  const renderContent = () => {
    switch (activeTab) {
      case "Lyrics":
        return <div>Lyrics</div>;
      case "Reviews":
        return <div>Reviews</div>;
      case "Badges":
        return <div>Badges</div>;
      case "About":
        return <div>About</div>;
      default:
        return <div>Lyrics</div>;
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
            className={activeTab === "Reviews" ? style.active : ""}
            onClick={() => setActiveTab("Reviews")}
          >
            Reviews
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
