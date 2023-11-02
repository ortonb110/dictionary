/* eslint-disable react/prop-types */
import dictionaryLogo from "../assets/images/logo.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";
const NavBar = ({ toggleColorScheme }) => {
  const [color, setColor] = useState(false);

  const handleThemeSwitcher = () => {
    toggleColorScheme();
    setColor((val) => !val);
  };

  return (
    <nav className="flex justify-between items-center ">
      <img src={dictionaryLogo} alt="Logo" className="w-[3.2rem] h-[3.65rem]" />
      <div className="flex justify-between items-center ">
        <section>
          <button className="text-[1.8rem] font-bold leading-[2.4rem] capitalize flex justify-between items-center w-[12rem]">
            <span className="">sans serif</span>
            <img src={arrowDown} aria-hidden />
          </button>
          {/* <div></div>    something goes here later */}
        </section>
        <div className="w-[1px] h-[3.2rem] bg-veryLightGray mx-[2.6rem]"></div>
        <div className="flex justify-between items-center">
          <label className="relative inline-flex items-center mb-5 cursor-pointer top-[-50%] translate-y-[35%] mr-[2rem]">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={handleThemeSwitcher}
            />
            <div className="w-[4rem] h-[2rem] bg-gray-200 peer-focus:outline-no rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:transition-all dark:border-gray-600 peer-checked:bg-lightPurple"></div>
          </label>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke={`${color ? "#A445ED" : "#838383"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
