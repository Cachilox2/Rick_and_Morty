import { useState } from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ onSearch, randomChar }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleInput = (id) => {
    setId("");
    onSearch(id);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        onChange={handleChange}
        value={id}
        type="search"
      />
      
      <span className="search__button" onClick={() => handleInput(id)}>
        <MdSearch className="icon-search" />
      </span>
  
      <button className="search__random" onClick={randomChar}>Random</button>
    </div>
  );
};

export default SearchBar;
