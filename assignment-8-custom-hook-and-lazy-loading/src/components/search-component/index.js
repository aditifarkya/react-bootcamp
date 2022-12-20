import { useEffect, useState } from "react";
import useCity from "../../hooks/useCity.js";
import "./index.scss";

const SearchComponent = ({ setsearchfiltertext, initialuserlist }) => {
  const [searchval, setsearchval] = useState("");
  const [statecitylist, setstatecitylist] = useState({});
  const [state, setstate] = useState("Madhya Pradesh");
  const [city, setcity] = useState("");
  //function to submit search value
  const submitsearch = (e) => {
    e.preventDefault();
    //this check is when search text is blank set the state with initialuserlist
    !searchval.length ? setsearchfiltertext(initialuserlist) : setfilterdata();
  };

  /*
  - function is to set the search filtered result in to state variable
  - setting "no result" into state to display no data found when there is no match
   */
  const setfilterdata = () => {
    const filterdata = filtersearchdata(searchval);
    filterdata.length
      ? setsearchfiltertext(filterdata)
      : setsearchfiltertext("");
  };

  // function return array of filter out data
  const filtersearchdata = (searchval) => {
    return initialuserlist.filter((search) => {
      return (
        search?.name?.toLowerCase().includes(searchval.toLowerCase()) ||
        search?.company?.toLowerCase().includes(searchval.toLowerCase())
      );
    });
  };
  //functions to handle filter logic
  const handleSelectState = (e) => {
    setstate(e.target.value);
  };
  const handleSelectCity = (e) => {
    setcity(e.target.value);
  };
  const filteruserbycity = (city) => {
    return initialuserlist.filter((search) => {
      return search?.location?.toLowerCase().includes(city.toLowerCase());
    });
  };
  const handleFilter = () => {
    const checkdata = filteruserbycity(city);
    console.log(checkdata);
    checkdata.length ? setsearchfiltertext(checkdata) : setsearchfiltertext("");
  };
  useEffect(() => {
    const fetchstatecity = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/bhanuc/indian-list/master/state-city.json"
      );
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      return data;
    };
    fetchstatecity()
      .then((data) => {
        setstatecitylist(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="search__filter">
      <div>
        <label htmlFor="select-state">Select State</label>
        <select value={state} id="select-state" onChange={handleSelectState}>
          <option>Select State</option>
          {Object.keys(statecitylist).map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="select-city">Select City</label>
        <select id="select-city" value={city} onChange={handleSelectCity}>
          <option>Select City</option>
          {useCity(statecitylist, state)?.map((ele) => {
            return (
              <option key={ele} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
      <button onClick={handleFilter} className="filter__btn">
        Filter
      </button>
      <form className="search" onSubmit={submitsearch}>
        <label style={{ padding: "10px" }}>Search Member</label>
        <input
          type="text"
          placeholder=" Search...."
          name={searchval}
          onChange={(e) => {
            setsearchval(e.target.value);
          }}
        ></input>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};
export default SearchComponent;
