import React, { useEffect, useState } from "react";
import { fetchUser } from "../services/FetchUser";

export const UserLoggedContext = React.createContext();

export const UserLoggedProvider = ({ children }) => {
  const [userId, setUserId] = useState(2);
  const [userLogged, setUserLogged] = useState();

  useEffect(() => {
    const handleUser = async () => {
      const user = await fetchUser({ userid: userId });
      setUserLogged(user);
    };
    handleUser();
  }, [userId]);

  return (
    <UserLoggedContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserLoggedContext.Provider>
  );
};
