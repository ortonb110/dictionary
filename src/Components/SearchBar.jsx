/* eslint-disable react/prop-types */
import searchIcon from "../assets/images/icon-search.svg";
import { BiLoader } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
const SearchBar = ({ fetchError, loading, fetchWord, setFetchError }) => {
  const [word, setWord] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(word.length < 1) {
      setFetchError(true)
    } else {
      fetchWord(word)
      setFetchError(false);
    }
  };

  return (
    <form className=" " onSubmit={handleSubmitForm}>
      <div className="relative h-[6.4rem] w-full">
        <motion.input
          disabled={loading}
          type="text"
          onChange={(e) => setWord(e.target.value)}
          placeholder="Search for any word..."
          className={`caret-lightPurple h-full rounded-[1.6rem] md:text-[2rem] py-[2rem] pl-[2.4rem] font-bold w-full focus:outline-none bg-offWhite dark:bg-lightDark dark:text-white focus:ring-[0.8px] ${
            fetchError ? "focus:ring-lightOrange" : "focus:ring-lightPurple"
          } `}
        />
        <div className="absolute right-[2.4rem] top-[50%] translate-y-[-50%]">
          {fetchError ? (
            <motion.button whileTap={{ scale: 0.9 }}>
              {<IoClose className="text-lightOrange" />}
            </motion.button>
          ) : loading ? (
            <BiLoader className="animate-spin w-[1.55rem] h-[1.55rem] text-lightPurple" />
          ) : (
            <button>
              <motion.img src={searchIcon} alt="" whileTap={{ scale: 0.9 }} />
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
