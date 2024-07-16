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
  <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.3751 3.6375C9.94786 3.14976 9.71242 2.5234 9.7126 1.875H7.78135V9.625C7.76645 10.0444 7.58939 10.4416 7.28745 10.7331C6.98551 11.0245 6.58225 11.1874 6.1626 11.1875C5.2751 11.1875 4.5376 10.4625 4.5376 9.5625C4.5376 8.4875 5.5751 7.68125 6.64385 8.0125V6.0375C4.4876 5.75 2.6001 7.425 2.6001 9.5625C2.6001 11.6438 4.3251 13.125 6.15635 13.125C8.11885 13.125 9.7126 11.5313 9.7126 9.5625V5.63125C10.4957 6.19366 11.436 6.4954 12.4001 6.49375V4.5625C12.4001 4.5625 11.2251 4.61875 10.3751 3.6375Z" fill="#3D3D3D"/>
  </svg>
</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
