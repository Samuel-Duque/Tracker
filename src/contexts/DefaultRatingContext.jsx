import React, { useContext, useEffect, useState } from "react";

export const DefaultRatingContext = React.createContext();

export const DefaultRatingProvider = ({ children }) => {
  const [defaultRatingData, setDefaultRatingData] = useState(0);
  const [defaultLikedData, setDefaultLikedData] = useState(0);
  const [defaultListenedData, setDefaultListenedData] = useState(0);

  return (
    <DefaultRatingContext.Provider
      value={{
        defaultRatingData,
        setDefaultRatingData,
        defaultLikedData,
        setDefaultLikedData,
        defaultListenedData,
        setDefaultListenedData,
      }}
    >
      {children}
    </DefaultRatingContext.Provider>
  );
};
