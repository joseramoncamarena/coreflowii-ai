"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const current = document.body.classList.contains("light");
    setIsLight(current);
  }, []);

  const toggleTheme = () => {
    const nextState = !document.body.classList.contains("light");
    document.body.classList.toggle("light", nextState);
    window.localStorage.setItem("coreflow-theme", nextState ? "light" : "dark");
    setIsLight(nextState);
  };

  return (
    <button className="toggle" onClick={toggleTheme} aria-label="Cambiar tema" type="button">
      <span>{isLight ? "Claro" : "Oscuro"}</span>
      <span>{isLight ? "Dark" : "Light"}</span>
    </button>
  );
}
