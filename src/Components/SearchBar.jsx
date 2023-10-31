import searchIcon from "../assets/images/icon-search.svg";
import { BiLoader } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
const SearchBar = () => {
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form className="w-[73.6rem]">
      <div className="relative h-[6.4rem] w-full">
        <motion.input
          type="text"
          placeholder="Search for any word..."
          className={`h-full rounded-[1.6rem] text-[2rem] py-[2rem] pl-[2.4rem] font-bold font-inter w-full focus:outline-none bg-offWhite dark:bg-lightDark dark:text-white focus:ring-[0.8px] ${
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
