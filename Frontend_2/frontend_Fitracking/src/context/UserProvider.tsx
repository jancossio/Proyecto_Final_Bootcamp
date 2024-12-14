import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { UserContext } from "./UserContext";

interface User {
  id: number | null;
  name: string | null;
}

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User>({ id: null, name: null });
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const setUser = (user: User) => {
    console.log("setUser called with:", user);
    setUserState(user);
  
    if (user.id && user.name) {
      const userCookie = JSON.stringify(user);
      Cookies.set("user", userCookie, { expires: 7 });
      console.log("Saved user cookie:", userCookie);
    } else {
      Cookies.remove("user");
    }
  };
  const logout = () => {
    setUser({ id: null, name: null });
    Cookies.remove("user"); // Remove cookies on logout
  };
  useEffect(() => {
    const savedUser = Cookies.get("user");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUserState(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from cookies:", error);
      }
    }
    // Simulate a delay with setTimeout
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 1000); // Adjust the delay as needed
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};