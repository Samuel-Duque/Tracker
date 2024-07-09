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
      <div className={style.footer}>
        <div className={style.footinfo}>
          <div className={style.navbar}>
            <Link to={"/"}>
              <div className={style.logo}>Tracker</div>
            </Link>
            <div className={style.navItens}>
              <Link to="/">Songs</Link>
              <Link to="/">Lists</Link>
              <Link to="/">Artists</Link>
              <Link to="/">Trackers</Link>
              <Link to="/">Contact</Link>
              <Link to="/">About</Link>
              <Link to="/">Help</Link>
              <Link to="/">Pro</Link>
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
      </div>
    </>
  );
};

export default Footer;
