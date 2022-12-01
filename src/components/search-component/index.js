import { useState } from "react";
import teamdata from "./../card-component/config";

const SearchComponent = ({ setsearchfiltertext }) => {
  const [searchval, setsearchval] = useState("");
  //function to submit search value
  const submitsearch = (e) => {
    e.preventDefault();
    setsearchfiltertext(filtersearchdata(searchval));
  };
  // function return arry of filter out data
  const filtersearchdata = (searchval) => {
    return teamdata.filter((search) => {
      return (
        search.name.toLowerCase().includes(searchval.toLowerCase()) ||
        search.designation.toLowerCase().includes(searchval.toLowerCase())
      );
    });
  };
  return (
    <div>
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
