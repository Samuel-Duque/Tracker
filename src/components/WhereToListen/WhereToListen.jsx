import React from "react";
import style from "./WhereToListen.module.css";
import WhereToListenItem from "../../components/WhereToListenItem/WhereToListenItem";

const WhereToListen = ({ Track }) => {
  return (
    <div className={style.WhereToListen}>
      <div className={style.WhereToListen_Title}>
        <span>Where to listen</span>
      </div>
      <div className={style.WhereToListen_List}>
        {Track.avaiblePlataforms.map((plataform, index) => {
          return (
            <WhereToListenItem key={index} plataform={plataform.plataform} />
          );
        })}
      </div>
    </div>
  );
};

export default WhereToListen;
