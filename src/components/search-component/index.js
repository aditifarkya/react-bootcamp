import { useState } from "react";
// import teamdata from "./../card-component/config";

const SearchComponent = ({ setsearchfiltertext, initialuserlist }) => {
  const [searchval, setsearchval] = useState("");

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
