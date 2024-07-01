import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import twitterIcon from "../../assets/icons/twitter-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import youtubeIcon from "../../assets/icons/youtube-icon.svg";
import tiktokIcon from "../../assets/icons/tiktok-icon.svg";

const Footer = () => {
  return (
    <>
      <div className={style.foot}>
        <div className={style.navbar}>
          <div className={style.logo}>Tracker</div>
          <div className={style.navItens}>
            <a href="/">Songs</a>
            <a href="/">Lists</a>
            <a href="/">Artists</a>
            <a href="/">Trackers</a>
            <a href="/">Contact</a>
            <a href="/">About</a>
            <a href="/">Help</a>
            <a href="/">Pro</a>
          </div>
        </div>

        <div className={style.socialMedia}>
          <a href="/">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="/">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="/">
            <img src={instagramIcon} alt="" />
          </a>
          <a href="/">
            <img src={youtubeIcon} alt="" />
          </a>
          <a href="/">
            <img src={tiktokIcon} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
