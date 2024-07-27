import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import EmptyRatingIcon from "../../assets/icons/StarComponents/EmptyRatingIcon";
import FillRatingIcon from "../../assets/icons/StarComponents/FillRatingIcon";
import style from "./RatingStar.module.css";
const RatingComponent = ({
  value,
  setValue,
  color,
  size,
  xsize,
  left,
  top,
}) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.rating}>
      {value > 0 && (
        <button
          className={style.buttonX}
          style={{ left: left, top: top }}
          onClick={() => {
            setRatingValue(0);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={xsize}
            height={xsize}
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
            />
          </svg>
        </button>
      )}
      <StyledRating
        name="customized-color"
        icon={<FillRatingIcon size={size} />}
        emptyIcon={<EmptyRatingIcon size={size} color={color} />}
        onChange={handleRatingChange}
        value={value}
      />
    </div>
  );
};

export default RatingComponent;
