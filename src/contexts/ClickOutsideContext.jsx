import React, { useState } from "react";

export const ClickOutsideContext = React.createContext();

export const ClickOutsideProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ClickOutsideContext.Provider value={{ show, setShow }}>
      {children}
    </ClickOutsideContext.Provider>
  );
};
