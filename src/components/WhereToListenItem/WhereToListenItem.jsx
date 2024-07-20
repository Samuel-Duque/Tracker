import React from "react";
import style from "./WhereToListenItem.module.css";
import spotifyIcon from "../../assets/icons/spotify-icon.svg";
import youtubeMusicIcon from "../../assets/icons/youtube-music-icon.svg";
import appleMusicIcon from "../../assets/icons/apple-music-icon.svg";
import amazonMusicIcon from "../../assets/icons/amazon-music-icon.svg";
import deezerMusicIcon from "../../assets/icons/deezer-music-icon.svg";
import { Link } from "react-router-dom";

const WhereToListenItem = ({ plataform }) => {
  let icon;
  let link;
  switch (plataform) {
    case "Spotify":
      icon = spotifyIcon;
      link = "https://open.spotify.com/";
      break;
    case "Youtube Music":
      icon = youtubeMusicIcon;
      link = "https://music.youtube.com/";
      break;
    case "Apple Music":
      icon = appleMusicIcon;
      link = "https://music.apple.com/";
      break;
    case "Amazon Music":
      icon = amazonMusicIcon;
      link = "https://music.amazon.com/";
      break;
    case "Deezer":
      icon = deezerMusicIcon;
      link = "https://www.deezer.com/";
      break;
    default:
      icon = null;
      link = null;
  }

  return (
    <>
      <div className={style.WhereToListenItem}>
        <a href={link} target="_blank" className={style.WhereToListenItem}>
          {icon && <img src={icon} alt={plataform} />}
          <span>{plataform}</span>
        </a>
      </div>
    </>
  );
};

export default WhereToListenItem;
