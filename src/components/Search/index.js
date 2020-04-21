import React, {useState} from "react";

import "./style.css";

const Search = () => {
  const [showForm, setShowForm] = useState({show: false, typeOfForm: ""});

  /*  const openSearch = () => {
      setSearch(true);
    }; */

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searhed");
  };

  const searchClass = !showForm ? "searchInput active" : "searchInput";
  return (
    <div className='search'>
      <form onSubmit={submitSearch}>
        <input
          type='text'
          className={searchClass}
          placeholder='Search a question'
        />
        <img
          onClick={() => setShowForm((prevstate) => !prevstate)}
          className='searchIcon'
          src={require("../../assets/icons/search.png")}
          alt='Search'
        />
      </form>
    </div>
  );
};

export default Search;
