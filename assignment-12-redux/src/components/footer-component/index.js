import UserContext from "../../context/user-context";
import call from "./assets/call.png";
import mail from "./assets/email.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import { useContext } from "react";
import ThemeContext from "../../context/theme-context";
import "./index.scss";

const FooterComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="footer"
      style={{ backgroundColor: theme === "light" ? "#d8f5e8" : "grey" }}
    >
      <div>
        <div className="footer__socialicons">
          <a href="#">
            <img src={facebook} alt="Fb" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="footer__contactus">
        <a href="#">
          <img src={call} />
          Phone Number :99999999
        </a>
        <UserContext.Consumer>
          {({ email }) => {
            return (
              <a href="#">
                <img src={mail} />
                Email :{email}
              </a>
            );
          }}
        </UserContext.Consumer>
      </div>
    </div>
  );
};
export default FooterComponent;
