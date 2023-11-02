import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  const [fontValue, setFontValue] = useState('inter');
  const [fontName, setFontName] = useState('sans serif')

  const toggleColorScheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  const getFontVal = () => {
    if(localStorage.fontVal && localStorage.fontName) {
      setFontValue(localStorage.fontVal);
      setFontName(localStorage.fontName)
    } 
  }

  const darkModeSupport = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    darkModeSupport();
    getFontVal(); //This will load font name and value from local storage if one exist already
  }, []);

  return (
    <main className={`dark:bg-defaultDark bg-white text-defaultDark dark:text-white home ${fontValue}`}>
      <NavBar toggleColorScheme={toggleColorScheme} setFontValue={setFontValue} fontValue={fontValue} setFontName={setFontName} fontName={fontName}/>
      <SearchBar/>
      
    </main>
  );
};

export default Home;
