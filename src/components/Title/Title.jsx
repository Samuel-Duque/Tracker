import React from "react";
import style from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div className={style.title}>
      <span>{title}</span>
    </div>
  );
};

export default Title;
