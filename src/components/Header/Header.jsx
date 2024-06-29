import React from "react";
import style from "./Header.module.css";
import downArrow from "../../assets/down-arrow.svg";
import plusIcon from "../../assets/more-icon.svg";

function Header() {
  return (
    <>
      <div className={style.navbar}>
        <div className={style.logo}>Tracker</div>
        <div className={style.navItens}>
          <div className={style.profile}>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="profile"
              className={style.profileImg}
            />
            <span className={style.username}>Zythee</span>
            <img src={downArrow} alt="" />
          </div>

          <a href="/">Songs</a>
          <a href="/">Lists</a>
          <a href="/">Artists</a>
          <a href="/">Trackers</a>
          <a href="/">
            <img src="" alt="" />
          </a>
          <div className={style.btnLog}>
            <img src={plusIcon} alt="" /> Log
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
