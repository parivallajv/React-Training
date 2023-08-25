import { useState, useEffect } from "react";

export default function useAuth2(initialValue) {
  const storedAuth = localStorage.getItem("isAuth");
  const initialAuth = storedAuth ? JSON.parse(storedAuth) : initialValue;

  const [isAuth, setIsAuth] = useState(initialAuth);

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [isAuth]);

  function login() {
    setIsAuth(true);
  }

  function logout() {
    setIsAuth(false);
  }

  return [isAuth, login, logout];
}
