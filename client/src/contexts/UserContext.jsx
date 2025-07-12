import React, { createContext, useEffect, useState } from 'react';
import { account } from '@/services/appwriteConfig';

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    "name" : null,
    "email" : null,
    "isAuthenticated" : false 
  });

  useEffect(() => {
    const getCurrentUser = async () => {
        try {
          const user = await account.get();
          console.log(user)
          setUser({
            "name" : user?.name,
            "email" : user?.email,
            "isAuthenticated" : user ? true : false
          })
          return user;
        } catch (error) {
          console.error("User not logged in:", error.message);
          return null;
        }
      };
      getCurrentUser()
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};