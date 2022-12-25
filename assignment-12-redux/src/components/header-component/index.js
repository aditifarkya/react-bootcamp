//header component with search bar, logo and icon
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ThemeContext from "../../context/theme-context";
import { Logout } from "../../features/slice.js";
import logo from "./team_logo.png";
import userimg from "./user.png";
import "./index.scss";

const HeaderComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { username } = useSelector((store) => store.user.value);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(Logout({}));
  };
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
      <div className="header__right show__flex">
        <div className="show__flex" style={{ alignItems: "center" }}>
          <Link to={"/search"} className="header__link">
            Search
          </Link>
          <Link to={"/aboutus"} className="header__link">
            About US
          </Link>
          {username ? (
            <>
              <a className="header__link">Hello, {username}</a>
              <Link
                to={"/login"}
                className="header__link"
                style={{ marginRight: "5px" }}
                onClick={handleLogoutClick}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              to={"/login"}
              className="header__link"
              style={{ marginRight: "5px" }}
            >
              Login
            </Link>
          )}
        </div>
        <div className="header__img">
          <img alt="icon" src={userimg} className="header__icon" />
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
      </div>
    </div>
  );
};
export default HeaderComponent;
