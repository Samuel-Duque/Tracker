import React, { useState } from "react"; // Importe useState
import style from "./Header.module.css";
import downArrow from "../../assets/down-arrow.svg";
import plusIcon from "../../assets/more-icon.svg";
import searchIcon from "../../assets/search-icon.svg";

function Header() {
  // Estado para controlar a visibilidade da barra de pesquisa
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Função para alternar a visibilidade da barra de pesquisa
  const toggleSearch = () => setIsSearchActive(!isSearchActive);

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
          {/* Altere para renderizar condicionalmente a barra de pesquisa ou o ícone de pesquisa */}
          {isSearchActive ? (
            <fieldset className={style.searchBar}>
              <a href="#" onClick={toggleSearch}>
                <img src={searchIcon} alt="" className={style.searchIconSvg} />
              </a>
              <input type="text" placeholder="" className={style.searchInput} />
            </fieldset>
          ) : (
            <a href="#" onClick={toggleSearch}>
              <img src={searchIcon} alt="" className={style.searchIconSvg} />
            </a>
          )}
          {/* Renderize condicionalmente o botão + Log baseado no estado isSearchActive */}
          {!isSearchActive && (
            <div className={style.btnLog}>
              <img src={plusIcon} alt="" /> Log
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
