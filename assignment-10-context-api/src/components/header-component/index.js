//header component with search bar, logo and icon
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./team_logo.png";
import user from "./user.png";
import "./index.scss";
import ThemeContext from "../../context/theme-context";

const HeaderComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className="header_div"
      style={{ backgroundColor: theme === "light" ? "#d8f5e8" : "grey" }}
    >
      <div className="header__teamlogo">
        <img alt="Logo" src={logo} className="header__logo" />
        <hr
          style={{ height: "100px", marginLeft: "20px", marginRight: "20px" }}
        />
        <Link to={"/"}>
          <h1 style={{ color: "deeppink" }}>Brainly Fools</h1>
        </Link>
      </div>
      <div>
        <Link to={"/search"} className="header__link">
          Search
        </Link>
        <Link to={"/aboutus"} className="header__link">
          About US
        </Link>
      </div>
      <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button b2" id="theme-button">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
              }}
            />
            <div className="knobs">
              <span></span>
            </div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
      {/* <div className="header__img">
        <img alt="icon" src={user} className="header__icon" />
      </div> */}
    </div>
  );
};
export default HeaderComponent;
