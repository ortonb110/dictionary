import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import axios from "axios";
import Word from "../Components/Word";
import Meanings from "../Components/Meanings";
import linkIcon from "../assets/images/icon-new-window.svg";
import NoDefinitionFound from "../Components/NoDefinitionFound";

const Home = () => {
  const [fontValue, setFontValue] = useState("inter");
  const [fontName, setFontName] = useState("sans serif");
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [audioSrc, setAudioSrc] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [source, setSource] = useState("");

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
    setAudioSrc("");
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
            setMeaning(data[i].meanings);
            setSource(data[i].sourceUrls);
            
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
      {fetchError ? (
        <NoDefinitionFound />
      ) : (
        <section>
          <div>
            {result && (
              <Word {...result} audioSrc={audioSrc} setAudioSrc={setAudioSrc} />
            )}
          </div>
          <div>
            {meaning &&
              meaning.map((res, index) => {
                return <Meanings key={index} {...res} />;
              })}
          </div>
          {source && (
            <div className="flex gap-[2rem] mt-[1.9rem] flex-col md:flex-row">
              <span className="capitalize h3 text-lightGray underline-offset-4 underline md:no-underline md:underline-offset-0">
                source
              </span>
              <a
                href={source}
                className="flex gap-[9px]  hover:text-lightPurple"
                target="_blank"
                rel="noreferrer"
              >
                <span>{source}</span>
                <img src={linkIcon} aria-hidden />
              </a>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default Home;
