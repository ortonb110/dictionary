import dictionaryLogo from "../assets/images/logo.svg";
import darkModeIcon from '../assets/images/icon-moon.svg'
const NavBar = () => {
  return (
    <nav>
        <img src={dictionaryLogo} alt="Logo" />
      <div>
        <section>
          <button>sans serif</button>
          {/* <div></div>    something goes here later */}
        </section>
         <div></div>
        <img src={darkModeIcon} alt='Dark mode switcher' />
      </div>
    </nav>
  );
};

export default NavBar;
