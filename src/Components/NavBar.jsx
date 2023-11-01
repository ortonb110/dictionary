import dictionaryLogo from "../assets/images/logo.svg";
import darkModeIcon from "../assets/images/icon-moon.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center ">
      <img src={dictionaryLogo} alt="Logo" className="w-[3.2rem] h-[3.65rem]" />
      <div className="flex justify-between items-center ">
        <section>
          <button className="text-[1.8rem] font-bold leading-[2.4rem] capitalize flex justify-between items-center w-[12rem] font-inter">
            <span>sans serif</span>
            <img src={arrowDown} aria-hidden />
          </button>
          {/* <div></div>    something goes here later */}
        </section>
        <div className="w-[1px] h-[3.2rem] bg-veryLightGray mx-[2.6rem]"></div>
        <div className="flex justify-between items-center">
          <label className="relative inline-flex items-center mb-5 cursor-pointer top-[-50%] translate-y-[35%] mr-[2rem]">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-[4rem] h-[2rem] bg-gray-200 peer-focus:outline-no rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <img src={darkModeIcon} alt="Dark mode switcher" className="w-[1.99rem] h-[2rem]"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
