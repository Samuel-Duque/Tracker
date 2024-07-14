import React, { useState } from "react";

export const SelectedTrackContext = React.createContext();

export const SelectedTrackProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <SelectedTrackContext.Provider value={{ selectedTrack, setSelectedTrack }}>
      {children}
    </SelectedTrackContext.Provider>
  );
};
