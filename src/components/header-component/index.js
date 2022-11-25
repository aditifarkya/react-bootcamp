import logo from "./logo.png";
import user from "./user.png";
import "./index.css";
const HeaderComponent = () => {
  return (
    <div className="header_div">
      <img alt="Logo" src={logo} className="header__logo" />
      <div className="header__search">
        <input type="text" placeholder=" Search" name="search"></input>
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <img alt="icon" src={user} className="header__icon" />
    </div>
  );
};
export default HeaderComponent;
