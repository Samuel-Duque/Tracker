import React, { useState } from "react";

export const UserLoggedContext = React.createContext();

export const UserLoggedProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState();

  return (
    <UserLoggedContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserLoggedContext.Provider>
  );
};
