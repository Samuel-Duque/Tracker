import React, { useContext, useEffect, useState } from "react";

export const DefaultRatingContext = React.createContext();

export const DefaultRatingProvider = ({ children }) => {
  const [defaultRatingData, setDefaultRatingData] = useState(0);

  useEffect(() => {
    console.log("Default Rating: ", defaultRatingData);
  }, [defaultRatingData]);
  return (
    <DefaultRatingContext.Provider
      value={{ defaultRatingData, setDefaultRatingData }}
    >
      {children}
    </DefaultRatingContext.Provider>
  );
};
