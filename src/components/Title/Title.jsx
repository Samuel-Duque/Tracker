import React from "react";
import style from "./Title.module.css";

const Title = ({ title, more }) => {
  return (
    <div className={style.title}>
      <span>{title}</span>
      {more && <span className={style.more}>show more</span>}
    </div>
  );
};

export default Title;
