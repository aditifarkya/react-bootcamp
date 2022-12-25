import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import fetchapirequest from "../../utils/utils";
import "./index.scss";
import ThemeContext from "../../context/theme-context";

const UserComponent = () => {
  let name = "";
  const [userdetail, setuserdetail] = useState({});
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    fetchapirequest([id], "https://api.github.com/users")
      .then((data) => {
        setuserdetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      className="user__details"
      style={{ backgroundColor: theme === "light" ? "white" : "grey" }}
    >
      <div className="left_section">
        <div className="user__image">
          <img
            src={userdetail[0]?.avatar_url}
            alt="image"
            className="card__img"
          />
        </div>
        <h1 className="user__name">{userdetail[0]?.login}</h1>
        <div style={{ display: "flex" }}>
          <h3 className="user__follower" style={{ marginRight: "20px" }}>
            {userdetail[0]?.followers} Followers
          </h3>
          <h3 className="user__follower">
            {userdetail[0]?.following} Following
          </h3>
        </div>
        <div className="user__company">
          <i className="fa fa-building-o" aria-hidden="true"></i>
          {userdetail[0]?.company}
        </div>
        <div className="user__company">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {userdetail[0]?.location}
        </div>
      </div>
      <div className="right_section">
        <h3>Overview</h3>
        <div className="user__block">
          <h2>
            Hey, I'm <strong>{userdetail[0]?.name}</strong>
          </h2>
          <ul>
            <li>
              I'm currently working with{" "}
              <strong>{userdetail[0]?.company}</strong>
            </li>
            <li>I'm currently learning React js</li>
            <li>Ask me about any tech related stuff</li>
          </ul>
        </div>
        <div className="user__techstack">
          <p>HTML5</p>
          <p>Javascript</p>
          <p>React JS</p>
          <p>CSS3</p>
          <p>ES 6</p>
        </div>
      </div>
    </div>
  );
};
export default UserComponent;
