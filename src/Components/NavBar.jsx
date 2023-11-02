/* eslint-disable react/prop-types */
import dictionaryLogo from "../assets/images/logo.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

const fonts = [
  {
    title: "sans serif",
    font: "inter",
  },
  {
    title: "serif",
    font: "lora",
  },
  {
    title: "mono",
    font: "inconsolata",
  },
];

const NavBar = ({ toggleColorScheme }) => {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleThemeSwitcher = () => {
    toggleColorScheme();
    setColor((val) => !val);
  };

  return (
    <nav className="flex justify-between items-center mb-[5.15rem]">
      <img src={dictionaryLogo} alt="Logo" className="w-[3.2rem] h-[3.65rem]" />
      <div className="flex justify-between items-center ">
        <section className="relative">
          <button className="text-[1.8rem] font-bold leading-[2.4rem] capitalize flex justify-between items-center w-[12rem]">
            <span className="">sans serif</span>
            <img src={arrowDown} aria-hidden />
          </button>
          {isOpen && (
            <div className="absolute z-10 p-[2.4rem] w-[18.3rem] bg-white dark:bg-lightDark rounded-[1.6rem] right-0 top-[4.2rem] shadow-menu dark:shadow-menu-dark">
              <ul className="space-y-[1rem]">
                {fonts.map((font, index) => {
                  return (
                    <li
                      key={index}
                      className={`font-${font.font} capitalize font-bold text-[1.8rem] leading-[2.4rem] hover:text-lightPurple cursor-pointer transition-all ease-in-out duration-150`}
                    >
                      {font.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
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
