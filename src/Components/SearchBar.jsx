import searchIcon from "../assets/images/icon-search.svg";
import { BiLoader } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const handleInvalidResponse = () => {
    document.getElementById('bar').focus()
   
  }

  handleInvalidResponse()

  return (
    <form className="w-[73.6rem]">
      <div className="relative h-[6.4rem] w-full">
        <motion.input
           id="bar"
          type="text"
          placeholder="Search for any word..."
          className="h-full rounded-[1.6rem] text-[2rem] py-[2rem] pl-[2.4rem] font-bold font-inter w-full focus:outline-none bg-offWhite focus:ring-[0.5px] focus:ring-lightPurple invalid:ring-lightOrange"
        />
        <button className="absolute right-[2.4rem] top-[50%] translate-y-[-50%]">
          {loading ? (
            <BiLoader className="animate-spin w-[1.55rem] h-[1.55rem] text-lightPurple"/>
          ) : (
            <motion.img src={searchIcon} alt="" whileTap={{ scale: 0.9 }} />
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
