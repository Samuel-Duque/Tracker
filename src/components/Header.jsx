import React from "react";
import "./Header.css";
import "../styles/global.css";
import downArrow from "../assets/down-arrow.svg";
import plusIcon from "../assets/more-icon.svg";
function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">Tracker</div>
        <div className="nav-itens">
          <div className="profile">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="profile"
              className="profile-img"
            />
            <span className="username">Zythee</span>
            <img src={downArrow} alt="" />
          </div>

          <a href="/">Songs</a>
          <a href="/">Lists</a>
          <a href="/">Artists</a>
          <a href="/">Trackers</a>
          <a href="/">
            <img src="" alt="" />
          </a>
          <div className="btn-log">
            <img src={plusIcon} alt="" /> Log
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
