import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import downArrow from "../../assets/icons/down-arrow.svg";
import plusIcon from "../../assets/icons/more-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import profilePicDark from "../../assets/icons/profile-pic-dark.svg";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };
  const fetchSearch = () => {
    searchQuery ? navigate(`/search/${searchQuery}`) : console.log("vazio");
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
        <Link to={"/"}>
          <div className={style.logo}>Tracker</div>
        </Link>
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
          <Link to={"/songs"}>Songs</Link>
          <Link to={"/lists"}>Lists</Link>
          <Link to={"/artists"}>Artists</Link>
          <Link to={"/trackers"}>Trackers</Link>
          <fieldset className={style.searchBar}>
            <button onClick={toggleSearch}>
              <img src={cancelIcon} alt="" className={style.cancelIconSvg} />
            </button>
            <div className={style.searchInnerBar}>
              <input
                type="text"
                placeholder=""
                className={style.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => {
                  fetchSearch();
                }}
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7314 17.7836L14.8723 13.9244C15.8014 12.6875 16.303 11.182 16.3013 9.635C16.3013 5.68355 13.0864 2.46875 9.135 2.46875C5.18355 2.46875 1.96875 5.68355 1.96875 9.635C1.96875 13.5864 5.18355 16.8013 9.135 16.8013C10.682 16.803 12.1875 16.3014 13.4244 15.3723L17.2836 19.2314C17.4789 19.4061 17.7337 19.4993 17.9956 19.4919C18.2576 19.4846 18.5067 19.3773 18.692 19.192C18.8773 19.0067 18.9846 18.7576 18.9919 18.4956C18.9993 18.2337 18.9061 17.9789 18.7314 17.7836ZM4.01625 9.635C4.01625 8.62261 4.31646 7.63295 4.87891 6.79118C5.44137 5.9494 6.24081 5.29332 7.17614 4.90589C8.11147 4.51847 9.14068 4.4171 10.1336 4.61461C11.1266 4.81211 12.0386 5.29963 12.7545 6.0155C13.4704 6.73137 13.9579 7.64344 14.1554 8.63638C14.3529 9.62932 14.2515 10.6585 13.8641 11.5939C13.4767 12.5292 12.8206 13.3286 11.9788 13.8911C11.1371 14.4535 10.1474 14.7537 9.135 14.7537C7.77792 14.7521 6.47689 14.2123 5.5173 13.2527C4.5577 12.2931 4.01788 10.9921 4.01625 9.635Z"
                    fill="#585858"
                  />
                </svg>
              </button>
            </div>
          </fieldset>
          <button onClick={toggleSearch}>
            <img src={searchIcon} alt="" className={style.searchIconSvg} />
          </button>
          <button className={style.btnLog}>
            <img src={plusIcon} alt="" />
            Log
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
