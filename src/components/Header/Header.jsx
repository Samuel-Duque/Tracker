import React, { useState } from "react";
import style from "./Header.module.css";
import downArrow from "../../assets/down-arrow.svg";
import plusIcon from "../../assets/more-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import cancelIcon from "../../assets/cancel-icon.svg";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
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
  };

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
