import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import downArrow from "../../assets/icons/down-arrow.svg";
import plusIcon from "../../assets/icons/more-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import profilePicDark from "../../assets/icons/profile-pic-dark.svg";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    const searchBar = document.querySelector(`.${style.searchBar}`);
    const btnLog = document.querySelector(`.${style.btnLog}`);
    const searchIcon = document.querySelector(`.${style.searchIconSvg}`);
    if (isSearchActive) {
      searchBar.classList.add(`${style.searchBarVisible}`);
      searchBar.style.display = "flex";
      btnLog.style.display = "none";
      searchIcon.style.display = "none";
    } else {
      searchBar.classList.remove(`${style.searchBarVisible}`);
      searchBar.style.display = "none";
      btnLog.style.display = "flex";
      searchIcon.style.display = "flex";
    }
  }, [isSearchActive]);

  return (
    <>
      <div className={style.navbar}>
        <div className={style.logo}>Tracker</div>
        <div className={style.navItens}>
          <div className={style.profile}>
            <img
              src={profilePicDark}
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
          <fieldset className={style.searchBar}>
            <a href="#" onClick={toggleSearch}>
              <img src={cancelIcon} alt="" className={style.cancelIconSvg} />
            </a>
            <input type="text" placeholder="" className={style.searchInput} />
          </fieldset>
          <a href="#" onClick={toggleSearch}>
            <img src={searchIcon} alt="" className={style.searchIconSvg} />
          </a>
          <a href="/" className={style.btnLog}>
            <img src={plusIcon} alt="" />
            Log
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
