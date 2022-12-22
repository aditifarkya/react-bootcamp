import { useState } from "react";
import UserContext from "../../context/user-context";

const AboutUsComponent = () => {
  const [aboutusemail, setaboutusemail] = useState("");
  return (
    <UserContext.Consumer>
      {({ email, setemail }) => {
        return (
          <div style={{ flex: "1" }}>
            <p>Email:{email}</p>
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
              update email
            </button>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};
export default AboutUsComponent;
