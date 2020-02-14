import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (boolean) => {
  const [mode, setMode] = useLocalStorage("dark-mode", boolean);

  const grabBody = document.querySelector("body");

  mode === true
    ? grabBody.classList.add("darkMode")
    : grabBody.classList.remove("darkMode");

  return [mode, setMode];
};
