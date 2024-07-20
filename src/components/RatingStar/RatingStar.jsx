import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import EmptyRatingIcon from "../../assets/icons/StarComponents/EmptyRatingIcon";
import FillRatingIcon from "../../assets/icons/StarComponents/FillRatingIcon";
import HalfRatingIcon from "../../assets/icons/StarComponents/HalfRatingIcon";
import Typography from "@mui/material/Typography";

const CustomizedRating = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    console.log(`Valor atual da estrela: ${value}`); // Passo 5
  }, [value]);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  const getIcon = (iconValue) => {
    if (iconValue % 1 === 0) {
      return <FillRatingIcon />;
    } else if (iconValue % 1 !== 0) {
      return <HalfRatingIcon />;
    } else {
      return <EmptyRatingIcon />;
    }
  };
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <StyledRating
        name="customized-color"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue); // Passo 4
        }}
        onChangeActive={(event, newHover) => {
          setValue(newHover); // Atualiza o estado conforme o mouse passa sobre as estrelas
        }}
        precision={0.5}
        icon={<FillRatingIcon />} // Ícone para valores inteiros ou meio preenchidos
        emptyIcon={<EmptyRatingIcon />} // Ícone para estrelas não preenchidas
        getLabelText={(value) => `${value} Estrela${value !== 1 ? "s" : ""}`}
        // Customiza o ícone baseado no valor
        IconContainerComponent={({ value: iconValue }) => getIcon(iconValue)}
      />
    </Box>
  );
};

export default CustomizedRating;
