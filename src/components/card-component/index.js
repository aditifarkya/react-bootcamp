import "./style.css";
const CardComponent = (props) => {
  const teamdata = props.teamdata;
  const { img, name, designation, linkedinurl, githuburl } = teamdata;
  return (
    <div className="card__component">
      <div className="card__profileimg">
        <img src={img} alt="image" className="card__img" />
      </div>
      <div className="card__details">
        <h2>{name}</h2>
        <h5>- {designation}</h5>
      </div>
      <div className="card__url">
        <a href={linkedinurl} target="_blank">
          <img src="https://img.icons8.com/color/75/000000/linkedin.png" />
        </a>
        <a href={githuburl} target="_blank">
          <img src="https://img.icons8.com/ios-glyphs/75/null/github.png" />
        </a>
      </div>
    </div>
  );
};
export default CardComponent;
