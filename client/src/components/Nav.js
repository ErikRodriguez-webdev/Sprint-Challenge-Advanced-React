import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Nav = () => {
  const [darkMode, setDarkmode] = useDarkMode(false);

  return (
    <header>
      <h1>Women's World Cup Football Players</h1>
      <nav>
        <button
          data-testid="darkModeBtn"
          onClick={() => {
            setDarkmode(!darkMode);
          }}
        >
          Dark Mode
        </button>
      </nav>
    </header>
  );
};

export default Nav;
