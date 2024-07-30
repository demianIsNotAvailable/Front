import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const useAthorization = () => {
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
  
    const passport = JSON.parse(localStorage.getItem("passport"));
    useEffect(() => {
      if (passport) {
        setToken(passport.token);
        setIsLoggedIn(true);
        setIsAdmin(passport.tokenData.role === "super_admin");
      }
    }, []);
  
    useEffect(() => {
      console.log(token, isLoggedIn, isAdmin, "somos contexto")
    })
  
    const setSessionData = (passport) => {
      setToken(passport.token)
      setIsLoggedIn(true)
      setIsAdmin(passport.tokenData.role === "super_admin")
      localStorage.setItem("passport", JSON.stringify(passport))
    }
  
    const logout = () => {
      setToken(null)
      setIsLoggedIn(false)
      setIsAdmin(false)
      localStorage.removeItem("passport")
    }
    
    return {token, isLoggedIn, isAdmin, setSessionData, logout}
}

export const useAuth = () => {
  return useContext(AuthContext)
}