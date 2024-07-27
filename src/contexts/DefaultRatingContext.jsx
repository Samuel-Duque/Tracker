import React, { useContext, useEffect, useState } from "react";
import { SelectedTrackContext } from "./SelectedTrackContext";
import { handleDefaultRating } from "../services/HandleDefaultRating";

export const DefaultRatingContext = React.createContext();

export const DefaultRatingProvider = ({ children }) => {
  const [defaultRating, setDefaultRating] = useState(0);
  const { selectedTrack } = useContext(SelectedTrackContext);

  useEffect(() => {
    const fetchDefaultRating = async () => {
      const defaultRating = await handleDefaultRating(
        "zythee",
        selectedTrack?.id
      );
      console.log("Default Rating:", defaultRating);
      setDefaultRating(defaultRating);
    };
    if (selectedTrack) {
      fetchDefaultRating();
    }
  }, [selectedTrack]);

  return (
    <DefaultRatingContext.Provider value={{ defaultRating, setDefaultRating }}>
      {children}
    </DefaultRatingContext.Provider>
  );
};
