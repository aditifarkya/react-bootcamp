import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../features/slice";
import "./index.scss";

const LoginComponent = () => {
  const { username } = useSelector((store) => store.user.value) || "";
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Useremail, setUseremail] = useState("");
  const [Userpassword, setUserpassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const validateForm = () => {
    if (!Username) {
      setError("Please enter Username.");
      return false;
    }
    if (!Useremail) {
      setError("Please enter an email address.");
      return false;
    }

    if (!Userpassword) {
      setError("Please enter a password.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Useremail)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (Userpassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(Login({ username: Username }));
      navigate("/");
    }
  };
  return (
    <div className="login__box">
      <div className="login__container">
        <div className="drop">
          <div className="content">
            <h2 className="animate__heartBeat">LogIn</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  id="user-id"
                  placeholder="Enter Username"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="input-box">
                <input
                  id="user-email"
                  placeholder="Enter Email"
                  value={Useremail}
                  onChange={(e) => setUseremail(e.target.value)}
                ></input>
              </div>
              <div className="input-box">
                <input
                  id="user-password"
                  placeholder="Enter Password"
                  value={Userpassword}
                  onChange={(e) => setUserpassword(e.target.value)}
                ></input>
              </div>
              {error && <p className="error">{error}</p>}
              <div className="input-box">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
