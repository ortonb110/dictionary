import NavBar from "../Components/NavBar";
import { useEffect } from "react";

const Home = () => {
  const toggleColorScheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
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

  useEffect(() => {
    darkModeSupport();
  }, []);

  return (
    <main className="dark:bg-defaultDark bg-white text-defaultDark dark:text-white home inter">
      <NavBar toggleColorScheme={toggleColorScheme} />
      <h1>hello world</h1>
    </main>
  );
};

export default Home;
