import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import axios from "axios";
import Word from "../Components/Word";

const Home = () => {
  const [fontValue, setFontValue] = useState("inter");
  const [fontName, setFontName] = useState("sans serif");
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const toggleColorScheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  const getFontVal = () => {
    if (localStorage.fontVal && localStorage.fontName) {
      setFontValue(localStorage.fontVal);
      setFontName(localStorage.fontName);
    }
  };

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

  const fetchWord = async (word) => {
    setLoading(true);
    setFetchError(false);
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setLoading(false);

      for (let i = 0; i < data.length; i++) {
        let temp = data[i].phonetics;
        for (let j = 0; j < temp.length; j++) {
          if (temp[j].audio) {
            setResult(data[i]);
            
            break;
          } else {
            setResult(data[i]);
          }
        }
        if (result) {
          break;
        }
      }
    } catch (error) {
      setFetchError(true);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    darkModeSupport();
    getFontVal(); //This will load font name and value from local storage if one exist already
  }, []);

  return (
    <main
      className={`dark:bg-defaultDark bg-white text-defaultDark dark:text-white home ${fontValue}`}
    >
      <NavBar
        toggleColorScheme={toggleColorScheme}
        setFontValue={setFontValue}
        fontValue={fontValue}
        setFontName={setFontName}
        fontName={fontName}
      />
      <SearchBar
        fetchError={fetchError}
        loading={loading}
        fetchWord={fetchWord}
        setFetchError={setFetchError}
      />
      <div>{result && <Word {...result} />}</div>
    </main>
  );
};

export default Home;
