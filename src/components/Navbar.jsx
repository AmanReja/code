import logo_light from "../../src/assets/spiderman-logo.png";
import logo_dark from "../../src/assets/Spider-Man.png";
import search_icon_light from "../../src/assets/search-w.png";
import search_icon_dark from "../../src/assets/search-b.png";
import toogle_light from "../../src/assets/night.png";
import toogle_dark from "../../src/assets/day.png";
import "./Navbar.css";

const Navbar = ({ theme, setTheme,}) => {
  const toggole_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul className="list">
        <li>Home</li>
        <li>Products</li>
        <li>Featurs</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" className="search-input" />
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          className="search_icon_dark"
          alt=""
        />
      </div>
      <img
        onClick={() => {
          toggole_mode();
        }}
        src={theme == "light" ? toogle_light : toogle_dark}
        alt=""
        className="toggle-icon"
      />
      <div>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};
export default Navbar;
