import React from "react";
import EmptyRatingIcon from "../../assets/icons/StarComponents/EmptyRatingIcon";
import FillRatingIcon from "../../assets/icons/StarComponents/FillRatingIcon";
import HalfRatingIcon from "../../assets/icons/StarComponents/HalfRatingIcon";

const IconContainer = (props) => {
  const { value } = props;

  if (value % 1 === 0.5) {
    return <HalfRatingIcon />;
  } else {
    return <FillRatingIcon />;
  }
};

export default IconContainer;
