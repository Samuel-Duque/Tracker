import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import style from "./RatingStar.module.css";
import RatingIcon from "../../assets/icons/RatingIcon";

const RatingStar = () => {
  return (
    <Stack spacing={1} className={style.stack}>
      <Rating
        className={style.rating}
        name="half-rating"
        defaultValue={0}
        precision={0.5}
        icon={<RatingIcon />}
      />
    </Stack>
  );
};

export default RatingStar;
