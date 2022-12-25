import { useState, useContext } from "react";
import ThemeContext from "../../context/theme-context";
import UserContext from "../../context/user-context";
import "./index.scss";

const AboutUsComponent = () => {
  const [aboutusemail, setaboutusemail] = useState("");
  const { theme } = useContext(ThemeContext);
  return (
    <UserContext.Consumer>
      {({ email, setemail }) => {
        return (
          <div
            className="aboutus"
            style={{
              flex: "1",
              padding: "20px",
              backgroundColor: theme === "light" ? "white" : "grey",
            }}
          >
            <p>
              Email: <strong>{email}</strong>
            </p>
            <input
              value={aboutusemail}
              onChange={(e) => {
                setaboutusemail(e.target.value);
              }}
            ></input>
            <button
              className="filter__btn"
              onClick={() => {
                setemail(aboutusemail);
              }}
            >
              Update email
            </button>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};
export default AboutUsComponent;
