import { useState, useEffect } from "react";
import CardComponent from "../card-component";
import SearchComponent from "../search-component";
import fetchapirequest from "../../utils/utils";

// Team card component (assignment-4) and search functionality (assignment-5) and fetch data from github api (assignment-6)

const CardContainer = ({ searchlistdata }) => {
  return searchlistdata.map((element) => {
    return <CardComponent data={element} key={element.id} />;
  });
};
const BodyComponent = () => {
  const [initialuserlist, setinitialuserlist] = useState([]);
  const [searchfiltertext, setsearchfiltertext] = useState([]);
  const [apierror, setapierror] = useState();
  const fetchapidata = () => {
    const userlist = [
      "gavandivya",
      "Bhallora",
      "aditifarkya",
      "nikitaj-57",
      "it-abhishek2000",
      "soumyagangamwar",
      "shreerajjadeja",
    ];
    return fetchapirequest(userlist, "https://api.github.com/users");
  };

  useEffect(() => {
    fetchapidata()
      .then((teamdata) => {
        setapierror(false);
        setinitialuserlist(teamdata);
      })
      .catch((err) => {
        setapierror(true);
        console.log(err.message);
      });
  }, []);

  return apierror ? (
    <h2>Could not load the api due to errors</h2>
  ) : (
    <div className="card__body">
      <h2 style={{ textAlign: "center" }}>
        Here's our team. <br></br> Meet our Team Members
      </h2>
      <SearchComponent
        setsearchfiltertext={setsearchfiltertext}
        initialuserlist={initialuserlist}
      />
      <div className="card__containers">
        {searchfiltertext === "" ? (
          <h1>No search data found</h1>
        ) : (
          <CardContainer
            searchlistdata={
              searchfiltertext?.length !== 0
                ? searchfiltertext
                : initialuserlist
            }
          />
        )}
      </div>
    </div>
  );
};
export default BodyComponent;
