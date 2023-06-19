import React from "react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { ScoreContext } from "../context/AppContext";

export const SearchBar = () => {
  const [searchField, setSearchField] = useState("");

  const { onSeacrh, setOnsearch, teamData } = React.useContext(ScoreContext);
  console.log("this is onSearch", onSeacrh);

  // update onsearch global state on onchange

  const handleChange = (e) => {
    setSearchField(e.target.value);
    
    if (e.target.value === "") {
    //   console.log("empty field detected");
      setOnsearch(false);
    } else {
      setOnsearch(true);
    }
  };

  return (
    <div className="setStoresSection">
      <form action="">
        <input type="search" placeholder="search" onChange={handleChange} />
        <button>
          <GoSearch />
        </button>
      </form>
    </div>
  );
};
