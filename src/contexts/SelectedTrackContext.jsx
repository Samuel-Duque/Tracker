import React, { useEffect, useState } from "react";

export const SelectedTrackContext = React.createContext();

export const SelectedTrackProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  useEffect(() => {
    console.log(selectedTrack);
  }, [selectedTrack]);
  return (
    <SelectedTrackContext.Provider value={{ selectedTrack, setSelectedTrack }}>
      {children}
    </SelectedTrackContext.Provider>
  );
};
